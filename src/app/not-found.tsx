import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="stamp text-accent-deep">NOT FOUND</p>
      <h1 className="mt-6 max-w-2xl text-3xl">
        This page didn&rsquo;t pass inspection.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
        The address doesn&rsquo;t match anything in our filing system. Try the authority index,
        or start from the front page of the dossier.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Home <ArrowRight size={14} aria-hidden />
        </Link>
        <Link href="/approvals" className="btn-outline">
          Authority index
        </Link>
        <Link href="/tools/approval-finder" className="btn-outline">
          Approval finder
        </Link>
      </div>
    </section>
  );
}
