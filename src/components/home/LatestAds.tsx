'use client'
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Clock, Flame, Heart, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/tools/PageLayout";

const filters = ["All", "Electronics", "Vehicles", "Home & Living", "Essentials"] as const;

const latestAds = [
  {
    id: "b1",
    name: "Refrigerator 240L",
    price: "৳ 27,500",
    image:
      "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg",
    href: "/ads/home-appliances/fridge-240l",
    location: "Bashundhara, Dhaka",
    postedAt: "5 minutes ago",
  },
  {
    id: "b2",
    name: "Washing Machine 7kg",
    price: "৳ 21,900",
    image:
      "https://images.pexels.com/photos/3967642/pexels-photo-3967642.jpeg",
    href: "/ads/home-appliances/wm-7kg",
    location: "Uttara, Dhaka",
    postedAt: "12 minutes ago",
  },
  {
    id: "b3",
    name: "DSLR Camera Kit",
    price: "৳ 38,000",
    image:
      "https://images.pexels.com/photos/51383/camera-lens-lens-reflection-51383.jpeg",
    href: "/ads/electronics/dslr-kit",
    location: "Chattogram City",
    postedAt: "30 minutes ago",
  },
  {
    id: "b4",
    name: "AC 1 Ton Inverter",
    price: "৳ 46,500",
    image:
      "https://images.pexels.com/photos/3968081/pexels-photo-3968081.jpeg",
    href: "/ads/home-appliances/ac-1ton",
    location: "Sylhet",
    postedAt: "45 minutes ago",
  },
  {
    id: "b5",
    name: "Premium Mountain Bike",
    price: "৳ 32,000",
    image:
      "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg",
    href: "/ads/vehicles/mountain-bike-premium",
    location: "Cumilla",
    postedAt: "1 hour ago",
  },
  {
    id: "b6",
    name: "MacBook Air M2 13\"",
    price: "৳ 98,500",
    image:
      "https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg",
    href: "/ads/electronics/macbook-air-m2",
    location: "Banani, Dhaka",
    postedAt: "1 hour ago",
  },
  {
    id: "b7",
    name: "Wireless ANC Headphones",
    price: "৳ 18,900",
    image:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    href: "/ads/electronics/anc-headphones",
    location: "Jatrabari, Dhaka",
    postedAt: "1 hour ago",
  },
  {
    id: "b8",
    name: "Premium Office Chair",
    price: "৳ 26,500",
    image:
      "https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg",
    href: "/ads/home-living/premium-chair",
    location: "Mohakhali, Dhaka",
    postedAt: "2 hours ago",
  },
  {
    id: "b9",
    name: "PlayStation 5 Slim Bundle",
    price: "৳ 68,000",
    image:
      "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
    href: "/ads/electronics/ps5-slim",
    location: "Keraniganj",
    postedAt: "2 hours ago",
  },
  {
    id: "b10",
    name: "iPhone 15 Pro Max 256GB",
    price: "৳ 165,500",
    image:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    href: "/ads/electronics/iphone-15-pro-max",
    location: "Khulna City",
    postedAt: "3 hours ago",
  },
  {
    id: "b11",
    name: "Home Generator 5kW",
    price: "৳ 55,000",
    image:
      "https://images.pexels.com/photos/10547278/pexels-photo-10547278.jpeg",
    href: "/ads/home-appliances/home-generator",
    location: "Barishal",
    postedAt: "Today",
  },
  {
    id: "b12",
    name: "Kitchen Appliance Combo",
    price: "৳ 29,900",
    image:
      "https://images.pexels.com/photos/1861789/pexels-photo-1861789.jpeg",
    href: "/ads/home-appliances/kitchen-combo",
    location: "Rajshahi",
    postedAt: "Today",
  },
] as const;

export default function LatestAds() {
  return (
    <PageLayout
      paddingSize="small"
      className="relative overflow-hidden rounded-xl border border-emerald-200/50 bg-linear-to-br from-emerald-100/40 via-background to-muted/60 dark:border-emerald-300/40 dark:from-emerald-400/20 dark:via-slate-950 dark:to-black"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              <Flame className="h-4 w-4" />
              <span>Fresh drops</span>
            </span>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Latest Ads in the spotlight</h2>
              <p className="text-sm text-muted-foreground md:max-w-2xl md:text-base">
                These listings just landed on Recycle Mart. Act fast—verified sellers are responding to buyers within minutes.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl dark:bg-emerald-500/80 dark:hover:bg-emerald-500"
          >
            <Link href="/ads/latest" className="inline-flex items-center gap-2">
              See all live ads
              <BadgeCheck className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <Button
              key={filter}
              type="button"
              variant="outline"
              className={`rounded-full border-emerald-200/60 bg-white/80 px-4 py-1 text-xs font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 dark:border-emerald-300/50 dark:bg-emerald-900/40 ${
                filter === "All"
                  ? "border-emerald-500 text-emerald-900 dark:text-emerald-200"
                  : "text-emerald-700 hover:text-emerald-900 dark:text-emerald-100 dark:hover:text-emerald-50"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {latestAds.map((ad, index) => (
            <Card
              key={ad.id}
              className="group relative overflow-hidden rounded-2xl border-emerald-200/60 bg-white/90 p-3 text-sm shadow-lg backdrop-blur supports-backdrop-filter:bg-white/70 transition hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-2xl dark:border-emerald-300/50 dark:bg-emerald-950/60 dark:hover:bg-emerald-950"
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
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <Badge className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow">
                      Live #{index + 1}
                    </Badge>
                    <Button
                      variant="secondary"
                      size="icon"
                      aria-label="save ad"
                      className="absolute right-2 top-2 h-8 w-8 rounded-full border border-white/40 bg-white/80 text-emerald-700 shadow-sm transition hover:text-emerald-900 dark:border-emerald-300/30 dark:bg-emerald-950/70 dark:text-emerald-200"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Badge
                      variant="secondary"
                      className="absolute left-2 bottom-2 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow dark:bg-emerald-500/30 dark:text-emerald-100"
                    >
                      {ad.price}
                    </Badge>
                  </div>
                </CardContent>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition group-hover:text-emerald-600 dark:text-emerald-100">
                      {ad.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="inline-flex items-center gap-1 rounded-full border-emerald-200 bg-emerald-100/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-emerald-700 dark:border-emerald-300/50 dark:bg-emerald-800/50 dark:text-emerald-200"
                    >
                      <Clock className="h-3 w-3" />
                      {ad.postedAt}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground dark:text-emerald-100/70">
                    <MapPin className="h-3.5 w-3.5" />
                    {ad.location}
                  </div>
                  <p className="text-[11px] text-muted-foreground/80 dark:text-muted-foreground/70">
                    Verified sellers respond within 8 minutes on average. Tap to chat instantly and secure the deal.
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
