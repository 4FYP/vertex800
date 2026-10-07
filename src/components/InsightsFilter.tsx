"use client";

import { useMemo, useState } from "react";
import { data } from "@/lib/data";

export function InsightsFilter() {
  const [active, setActive] = useState("All");

  const articles = useMemo(
    () =>
      data.insights.filter((a) => active === "All" || a.category === active),
    [active]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {data.insightCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] transition ${
              active === cat
                ? "border-[var(--signal)] bg-[rgba(46,242,198,0.12)] text-[var(--signal)]"
                : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--line-strong)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.slug} className="panel p-6 transition hover:border-[var(--line-strong)]">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--signal)]">
              {article.category} ·{" "}
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {article.readTime}
            </p>
            <h3 className="font-display mt-3 text-xl leading-snug">{article.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
