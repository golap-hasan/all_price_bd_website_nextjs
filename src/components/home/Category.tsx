"use client";

import Link from "next/link";
import {
  Building,
  Car,
  Home,
  Laptop,
  Package,
  Smartphone,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import PageLayout from "@/tools/PageLayout";

type CategoryConfig = {
  title: string;
  icon: LucideIcon;
  accent: string;
  listings: string;
};

const categories: CategoryConfig[] = [
  {
    title: "Mobiles",
    icon: Smartphone,
    accent: "from-primary/20 via-primary/10 to-transparent",
    listings: "24.6K listings",
  },
  {
    title: "Electronics and Gadgets",
    icon: Laptop,
    accent: "from-indigo-400/25 via-indigo-300/10 to-transparent",
    listings: "19.8K listings",
  },
  {
    title: "Vehicles",
    icon: Car,
    accent: "from-emerald-400/25 via-emerald-300/10 to-transparent",
    listings: "8.4K listings",
  },
  {
    title: "Home Living",
    icon: Home,
    accent: "from-amber-400/25 via-amber-300/10 to-transparent",
    listings: "11.2K listings",
  },
  {
    title: "Property",
    icon: Building,
    accent: "from-rose-400/25 via-rose-300/10 to-transparent",
    listings: "6.5K listings",
  },
  {
    title: "Others",
    icon: Package,
    accent: "from-sky-400/25 via-sky-300/10 to-transparent",
    listings: "3.9K listings",
  },
];

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const Category = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-88 w-88 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
      <PageLayout>
        <div className="space-y-2 pb-10">
          <div className="mx-auto max-w-3xl space-y-2 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
              Browse the marketplace
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Categories curated for every need
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground">
              Pick a category to explore tailored deals and trending listings.
            </p>
          </div>
        </div>

        <div className="relative space-y-10">
          <div className="mx-auto grid container gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {categories.map(({ title, accent, icon: Icon, listings }) => (
              <Link
                key={title}
                href={`/ads?category=${toSlug(title)}`}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/95 p-5 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-linear-to-br opacity-0 transition group-hover:opacity-100",
                    accent
                  )}
                />
                <div className="relative z-10 flex items-start gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border/40 bg-background/80 text-primary shadow-sm transition group-hover:border-primary/40 group-hover:text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">{title}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {listings}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default Category;