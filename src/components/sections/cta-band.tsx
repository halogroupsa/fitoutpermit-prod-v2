import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

interface CtaBandProps {
  title?: string;
  lead?: string;
}

/** Dark closing band — the dossier's signature page. */
export function CtaBand({
  title = "Send us the unit. We'll send back the map.",
  lead = "Location, current status, intended works — that's all we need. You get the authority map, document checklist, government-fee estimate and a fixed quote. Free, usually within one business day.",
}: CtaBandProps) {
  return (
    <section className="section-cta-band text-paper">
      <div className="container-page section">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow eyebrow-on-dark">Start with a free permit check</p>
          <h2 className="mt-4 text-3xl text-paper">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-paper/70">{lead}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={15} aria-hidden />
              WhatsApp the details
            </a>
            <Link href="/contact" className="btn-outline btn-outline-on-dark">
              Use the contact form
              <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-paper/45">
            {SITE.phone} · {SITE.email} · Al Quoz, Dubai
          </p>
        </div>
      </div>
    </section>
  );
}
