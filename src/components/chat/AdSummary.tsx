"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { AdSummary as Ad } from "./types";

type Props = {
  ad: Ad;
};

export default function AdSummary({ ad }: Props) {
  return (
    <aside className="hidden lg:block rounded-xl border bg-card overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={ad.image} alt={ad.title} fill className="object-cover" unoptimized />
        <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2.5 py-1 text-sm font-semibold shadow">
          {ad.price}
        </span>
      </div>
      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <Link href={ad.link} className="line-clamp-2 font-medium hover:text-primary">
            {ad.title}
          </Link>
          <div className="text-xs text-muted-foreground">{ad.location} • {ad.posted}</div>
        </div>
        <div className="flex items-center gap-2">
          <Link href={ad.link}>
            <Button className="inline-flex w-fit border text-sm hover:bg-accent">View ad</Button>
          </Link>
          <Button className="inline-flex w-fit bg-emerald-600 text-white hover:opacity-90">
            <Phone /> Call seller
          </Button>
        </div>
      </div>
    </aside>
  );
}
