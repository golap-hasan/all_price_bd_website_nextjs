'use client'
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Crown, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/tools/PageLayout";

const spotlightAds = [
  {
    id: "p1",
    name: "Refurbished iPhone 13",
    price: "৳ 58,500",
    image:
      "https://images.pexels.com/photos/6078123/pexels-photo-6078123.jpeg",
    href: "/ads/electronics/iphone-13",
    metric: "4.8★ seller",
  },
  {
    id: "p2",
    name: "Gaming Laptop RTX 4060",
    price: "৳ 119,000",
    image:
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    href: "/ads/electronics/laptop-rtx4060",
    metric: "92 bids today",
  },
  {
    id: "p3",
    name: "Motorbike - 125cc",
    price: "৳ 85,000",
    image:
      "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
    href: "/ads/vehicles/bike-125",
    metric: "Trending now",
  },
  {
    id: "p4",
    name: "LED TV 43\"",
    price: "৳ 31,900",
    image:
      "https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg",
    href: "/ads/electronics/tv-43",
    metric: "Pick of the week",
  },
  {
    id: "p5",
    name: "Apple Watch Ultra",
    price: "৳ 67,500",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    href: "/ads/electronics/apple-watch-ultra",
    metric: "Seller verified",
  },
  {
    id: "p6",
    name: "Premium Gaming Rig RTX 4080",
    price: "৳ 238,000",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    href: "/ads/electronics/gaming-rig-4080",
    metric: "New arrival",
  },
  {
    id: "p7",
    name: "City Hybrid Bicycle 2024",
    price: "৳ 42,000",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
    href: "/ads/vehicles/hybrid-bicycle",
    metric: "Seller verified",
  },
  {
    id: "p8",
    name: "MacBook Pro M3 Max",
    price: "৳ 315,000",
    image:
      "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg",
    href: "/ads/electronics/macbook-pro-m3",
    metric: "Hot deal",
  },
  {
    id: "p9",
    name: "Luxury Sofa Set 7 Seater",
    price: "৳ 178,000",
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    href: "/ads/home-living/luxury-sofa",
    metric: "Popular",
  },
  {
    id: "p10",
    name: "Canon EOS R6 II Kit",
    price: "৳ 255,000",
    image:
      "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg",
    href: "/ads/electronics/canon-r6",
    metric: "Top rated",
  },
  {
    id: "p11",
    name: "Apple iPad Pro 13 M4",
    price: "৳ 185,000",
    image:
      "https://images.pexels.com/photos/5082555/pexels-photo-5082555.jpeg",
    href: "/ads/electronics/ipad-pro-m4",
    metric: "Trending",
  },
  {
    id: "p12",
    name: "Dyson V15 Detect Absolute",
    price: "৳ 92,000",
    image:
      "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg",
    href: "/ads/home-appliances/dyson-v15",
    metric: "Limited stock",
  },
] as const;

export default function TopAds() {
  return (
    <PageLayout
      paddingSize="small"
      className="relative overflow-hidden rounded-xl border border-secondary/20 bg-linear-to-br from-secondary/10 via-background to-muted/60 dark:border-secondary/30 dark:from-secondary/20 dark:via-slate-950 dark:to-black"
    >
      <div className="pointer-events-none absolute inset-y-0 left-1/3 h-full w-1/2 bg-secondary/20 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border-secondary/40 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground"
            >
              <Crown className="h-4 w-4" />
              <span>Top ads spotlight</span>
            </Badge>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Community favourites</h2>
              <p className="text-sm text-muted-foreground md:max-w-2xl md:text-base">
                Hottest listings voted by buyers and boosted by views. These deals are gaining massive love right now.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-secondary px-6 py-2 text-sm font-semibold text-secondary-foreground shadow-lg transition hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-xl dark:bg-secondary/80 dark:text-secondary-foreground dark:hover:bg-secondary"
            >
              <Link href="/ads/top-ads" className="inline-flex items-center gap-2">
                View leaderboard
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {spotlightAds.map((ad) => (
            <Card
              key={ad.id}
              className="group overflow-hidden rounded-2xl border-secondary/30 bg-background/85 p-3 text-sm shadow-lg transition hover:-translate-y-1 hover:border-secondary hover:bg-background dark:border-secondary/40 dark:bg-slate-900/70 dark:hover:bg-slate-900"
            >
              <Link href={ad.href} className="flex h-full flex-col gap-3">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={ad.image}
                      alt={ad.name}
                      fill
                      sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 18vw"
                      className="object-cover transition duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <Badge className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-secondary-foreground shadow">
                      <Crown className="h-3 w-3" />
                      Top pick
                    </Badge>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="save ad"
                      className="absolute right-2 top-2 h-8 w-8 rounded-full border-secondary/40 bg-background/80 text-secondary-foreground/70 shadow-sm transition hover:text-secondary-foreground dark:border-secondary/50 dark:bg-slate-950/80 dark:text-secondary-foreground/80"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Badge
                      variant="secondary"
                      className="absolute left-2 bottom-2 rounded-full px-2.5 py-1 text-xs font-semibold shadow dark:bg-secondary/30 dark:text-secondary-foreground"
                    >
                      {ad.price}
                    </Badge>
                  </div>
                </CardContent>

                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition group-hover:text-secondary dark:text-secondary-foreground">
                    {ad.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className="w-fit border-secondary/40 bg-secondary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-secondary dark:border-secondary/50 dark:bg-secondary/20 dark:text-secondary-foreground"
                  >
                    {ad.metric}
                  </Badge>
                  <p className="text-[11px] text-muted-foreground dark:text-muted-foreground/80">Dhaka • 2 hours ago</p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
