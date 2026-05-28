type BannerProps = {
  variant?: "top" | "between" | "side";
  label?: string;
};

export function Banner({ variant = "between", label }: BannerProps) {
  const sizing =
    variant === "top"
      ? "h-20 sm:h-24"
      : variant === "side"
      ? "min-h-[360px] w-full"
      : "h-28 sm:h-32";

  return (
    <div
      className={`empty-slot ${sizing} mx-auto w-full max-w-7xl rounded-xl text-xs sm:text-sm`}
      style={{ borderStyle: "dashed" }}
    >
      {label ?? "Espacio publicitario · Banner pendiente de cargar"}
    </div>
  );
}
