import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "¡Hola! Soy el asistente de SanRafael DigitalMarket. Pregúntame por negocios, productos, precios, categorías o calificaciones.",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || typing) return;
    const next: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setTyping(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { text?: string; error?: string };
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.error ?? "No pude responder en este momento." },
        ]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.text ?? "No tengo información sobre eso todavía." },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Error de conexión. Intenta de nuevo." },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-1"
          style={{
            background: "var(--gradient-brand)",
            boxShadow: "0 0 24px -4px var(--brand-blue), 0 10px 30px -10px var(--brand-purple)",
          }}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {open && (
        <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-auto sm:bottom-5 sm:right-5 sm:w-[380px]">
          <div className="card-surface flex h-[70vh] max-h-[560px] flex-col overflow-hidden bg-[var(--surface)] shadow-2xl">
            <div
              className="flex items-center justify-between px-4 py-3 text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              <div>
                <div className="text-sm font-semibold">Asistente DigitalMarket</div>
                <div className="text-xs opacity-90">San Rafael de Onoto</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="rounded-full p-1 transition-colors hover:bg-white/15"
              >
                <X size={18} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-3 py-3"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 text-sm text-white"
                        : "max-w-[85%] rounded-2xl rounded-bl-sm border border-border/60 bg-[var(--surface-elevated)] px-3 py-2 text-sm text-foreground"
                    }
                    style={
                      m.role === "user"
                        ? { background: "var(--gradient-brand)" }
                        : undefined
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm border border-border/60 bg-[var(--surface-elevated)] px-3 py-2 text-sm text-muted-foreground">
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border/60 bg-[var(--surface)] p-2">
              <div className="flex items-end gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void send();
                    }
                  }}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 rounded-full border border-border/60 bg-[oklch(0.18_0.008_280)] px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--brand-blue)] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => void send()}
                  disabled={typing || !input.trim()}
                  aria-label="Enviar"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-transform hover:-translate-y-0.5 disabled:opacity-50"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
