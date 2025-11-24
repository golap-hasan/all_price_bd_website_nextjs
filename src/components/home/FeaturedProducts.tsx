'use client'
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/tools/PageLayout";
import ListingCard, { type ListingCardProps } from "@/components/ads/ListingCard";

const featuredAds: ListingCardProps[] = [
  {
    id: "premium-iphone-14",
    title: "Apple iPhone 14 Pro 512GB (Boxed)",
    price: "৳ 152,000",
    location: "Banani, Dhaka",
    postedAt: "3 hours ago",
    imageUrl: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
    isFeatured: true,
  },
  {
    id: "gaming-setup",
    title: "Custom Gaming PC RTX 4070Ti",
    price: "৳ 195,000",
    location: "Dhanmondi, Dhaka",
    postedAt: "Yesterday",
    imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    isFeatured: true,
  },
  {
    id: "hybrid-car",
    title: "Toyota Aqua 2019 S Package",
    price: "৳ 1,480,000",
    location: "Mirpur DOHS, Dhaka",
    postedAt: "2 days ago",
    imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    isFeatured: true,
  },
  {
    id: "luxury-sofa",
    title: "Italian Leather Sectional Sofa",
    price: "৳ 220,000",
    location: "Gulshan 1, Dhaka",
    postedAt: "4 hours ago",
    imageUrl: "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
    isFeatured: true,
  },
  {
    id: "mirrorless-kits",
    title: "Sony A7 IV Mirrorless Combo",
    price: "৳ 285,000",
    location: "Wari, Dhaka",
    postedAt: "1 day ago",
    imageUrl: "https://images.pexels.com/photos/1442338/pexels-photo-1442338.jpeg",
    isFeatured: true,
  },
  {
    id: "smart-apartment",
    title: "Smart Apartment Furniture Set",
    price: "৳ 95,000",
    location: "Motijheel, Dhaka",
    postedAt: "6 hours ago",
    imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    isFeatured: true,
  },
  {
    id: "flagship-android",
    title: "Samsung S24 Ultra Graphite",
    price: "৳ 165,000",
    location: "Uttara, Dhaka",
    postedAt: "30 minutes ago",
    imageUrl: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    isFeatured: true,
  },
  {
    id: "studio-monitors",
    title: "Yamaha HS8 Studio Monitor Pair",
    price: "৳ 72,500",
    location: "Tejgaon, Dhaka",
    postedAt: "Today",
    imageUrl: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
    isFeatured: true,
  },
] as const;

const stats = [
  { value: "12.5k+", label: "Average daily views" },
  { value: "98%", label: "Buyer satisfaction" },
  { value: "4.9★", label: "Top-rated sellers" },
] as const;

export default function FeaturedProducts() {
  return (
    <PageLayout
      paddingSize="small"
      className="relative overflow-hidden rounded-xl border border-primary/10 bg-linear-to-br from-primary/5 via-background to-muted/50 dark:border-primary/20 dark:from-primary/15 dark:via-slate-950 dark:to-black"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-64 bg-primary/30 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-60 w-60 translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
            >
              <Sparkles className="h-4 w-4" />
              <span>Premium picks</span>
            </Badge>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Featured Products</h2>
              <p className="text-sm text-muted-foreground md:max-w-2xl md:text-base">
                Hand-picked listings from verified sellers delivering the best upgrades, luxury steals, and collector pieces on Recycle Mart.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl dark:bg-primary/80 dark:hover:bg-primary"
          >
            <Link href="/ads/featured" className="inline-flex items-center gap-2">
              Explore featured deals
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {featuredAds.map((ad) => (
            <ListingCard key={ad.id} {...ad} />
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border-primary/10 bg-card/90 shadow-sm backdrop-blur supports-backdrop-filter:bg-card/80 dark:border-primary/20 dark:bg-slate-900/60"
            >
              <CardContent className="space-y-2">
                <div className="text-2xl font-semibold text-foreground md:text-3xl">{stat.value}</div>
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80 dark:text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
