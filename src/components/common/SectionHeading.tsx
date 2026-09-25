import type { ReactNode } from "react";

export interface SectionHeadingProps {
  label: string;
  children: ReactNode;
  description?: string;
}

export function SectionHeading({
  label,
  children,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <div className="section-label">{label}</div>
      <h2 className="text-3xl font-bold tracking-tight text-bright sm:text-5xl">
        {children}
      </h2>
      {description && (
        <p className="mx-auto mt-4 text-sm leading-relaxed text-copy-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
