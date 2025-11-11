"use client";

import Link from "next/link";
import { Car, Home, LandPlot, Package, Smartphone, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import PageLayout from "@/tools/PageLayout";

type CategoryConfig = {
  title: string;
  items: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent: string;
  listings: string;
};

const categories: CategoryConfig[] = [
  {
    title: "Smart / Android Merchants",
    items: ["Smartphones", "Android Tablets", "Wearables"],
    icon: Smartphone,
    accent: "from-primary/20 via-primary/10 to-transparent",
    listings: "24.6K listings",
  },
  {
    title: "Mobile, Electronics & Gadgets",
    items: ["Laptops", "Headphones", "Smart Home"],
    icon: Sparkles,
    accent: "from-indigo-400/25 via-indigo-300/10 to-transparent",
    listings: "19.8K listings",
  },
  {
    title: "Vehicles & Accessories",
    items: ["Cars", "Motorcycles", "Parts & Accessories"],
    icon: Car,
    accent: "from-emerald-400/25 via-emerald-300/10 to-transparent",
    listings: "8.4K listings",
  },
  {
    title: "Home & Living",
    items: ["Furniture", "Kitchen & Dining", "Decor"],
    icon: Home,
    accent: "from-amber-400/25 via-amber-300/10 to-transparent",
    listings: "11.2K listings",
  },
  {
    title: "Property",
    items: ["Apartments", "Commercial Space", "Land"],
    icon: LandPlot,
    accent: "from-rose-400/25 via-rose-300/10 to-transparent",
    listings: "6.5K listings",
  },
  {
    title: "Others",
    items: ["Air Conditioners", "Refrigerators", "Washing Machines"],
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
    <section className="bg-muted/20">
      <PageLayout>
        <div className="space-y-2 pb-10">
          <div className="space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Browse the marketplace
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Categories curated for every need
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground">
              Pick a category to explore tailored deals and trending listings. Each block surfaces
              the most active sub-collections so you can dive in instantly.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

const CategoryCard = ({
  title,
  items,
  listings,
  icon: Icon,
  accent,
}: CategoryConfig) => {
  return (
    <Link
      href={`/categories/${toSlug(title)}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-card/95 p-6 transition hover:-translate-y-1 hover:border-primary/40"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br opacity-0 transition group-hover:opacity-100",
          accent
        )}
      />
      <div className="relative z-10 flex flex-col gap-4">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-border/40 bg-background/60 text-primary shadow-sm transition group-hover:border-primary/50 group-hover:text-primary">
          <Icon className="h-7 w-7" />
        </span>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{listings}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-border/40 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground transition group-hover:border-primary/40 group-hover:text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Category;