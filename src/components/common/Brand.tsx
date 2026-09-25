export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={
        compact
          ? "text-sm font-bold text-bright"
          : "text-2xl font-bold tracking-tight text-bright"
      }
    >
      zyn<span className="brand-x">x</span>.dev
    </span>
  );
}
