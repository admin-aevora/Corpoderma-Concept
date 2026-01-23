export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-cream)]">
      <div className="text-center">
        <div className="inline-block animate-pulse">
          <span className="font-serif text-4xl text-[var(--color-charcoal)]">
            Plush
          </span>
        </div>
        <div className="mt-4 flex items-center justify-center gap-1">
          <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
