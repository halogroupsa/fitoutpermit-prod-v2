"use client";

import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Static-export-friendly contact form: composes the enquiry and hands off to
 * WhatsApp (primary, instant) or email — no backend required.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const summary = `Hello, I'm ${name || "…"}.\nUnit location: ${location || "…"}\nProject: ${message || "…"}\nPhone: ${phone || "…"}`;

  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(summary)}`;
  const mailHref = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Permit enquiry — fitoutpermits.ae",
  )}&body=${encodeURIComponent(summary)}`;

  const inputCls =
    "w-full border border-rule bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="eyebrow">Your name</span>
          <input
            className={inputCls}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Full name"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="eyebrow">Phone / WhatsApp</span>
          <input
            className={inputCls}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+971 …"
          />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="eyebrow">Unit location</span>
        <input
          className={inputCls}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. JLT Cluster F, Business Bay tower, Palm Jumeirah…"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="eyebrow">What are you planning?</span>
        <textarea
          className={`${inputCls} min-h-32 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g. 1,800 sq ft restaurant fit-out, kitchen with gas, opening target in October…"
        />
      </label>
      <div className="mt-2 flex flex-wrap gap-3">
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-gold">
          <MessageCircle size={15} aria-hidden />
          Send via WhatsApp
        </a>
        <a href={mailHref} className="btn-outline">
          <Mail size={15} aria-hidden />
          Send via email
        </a>
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">
        Free scope review · response within one business day · no obligation
      </p>
    </form>
  );
}
