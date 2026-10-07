"use client";

import { FormEvent, useState } from "react";
import { projectTypes } from "@/lib/data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to send message.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send message.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company" name="company" autoComplete="organization" />
        <label className="grid gap-2 text-sm">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
            Project Type
          </span>
          <select
            name="projectType"
            required
            defaultValue=""
            className="border border-[var(--line)] bg-[rgba(8,12,22,0.9)] px-3 py-3 text-[var(--text)] outline-none transition focus:border-[var(--signal)]"
          >
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Share goals, timelines, and any constraints..."
          className="resize-y border border-[var(--line)] bg-[rgba(8,12,22,0.9)] px-3 py-3 text-[var(--text)] outline-none transition focus:border-[var(--signal)]"
        />
      </label>

      {status === "success" && (
        <p className="border border-[rgba(46,242,198,0.35)] bg-[rgba(46,242,198,0.08)] px-4 py-3 text-sm text-[var(--signal)]">
          Thank you. Your message has been sent. We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="border border-[rgba(255,77,46,0.4)] bg-[rgba(255,77,46,0.08)] px-4 py-3 text-sm text-[var(--ember-soft)]">
          {error}
        </p>
      )}

      <div>
        <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message →"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border border-[var(--line)] bg-[rgba(8,12,22,0.9)] px-3 py-3 text-[var(--text)] outline-none transition focus:border-[var(--signal)]"
      />
    </label>
  );
}
