export type Spec = { label: string; value: string };

/**
 * At-a-glance dossier metadata — a bordered spec panel below the page hero.
 * Hairline gaps (bg-rule showing through gap-px) match the site's card grids.
 */
export function SpecStrip({ specs }: { specs: Spec[] }) {
  return (
    <div className="container-page py-8 md:py-10">
      <dl className="grid grid-cols-2 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-4">
        {specs.map((s) => (
          <div key={s.label} className="bg-paper px-4 py-5 sm:px-5">
            <dt className="ref-no">{s.label}</dt>
            <dd className="mt-1.5 font-display text-lg leading-snug text-ink">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
