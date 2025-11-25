"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Heart,
  LayoutDashboard,
  Megaphone,
  Settings,
  Ticket,
  Bell,
  UserCircle,
  CreditCard,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const userSnapshot = {
  name: "Rafi Khan",
  phone: "+880 1711-000000",
  avatar: "https://images.pexels.com/photos/3775539/pexels-photo-3775539.jpeg",
  membership: "Member since 2023",
  verified: true,
};

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/profile", icon: LayoutDashboard },
      { label: "Alerts", href: "/profile/alerts", icon: Bell, badge: 3 },
    ],
  },
  {
    title: "My Activity",
    items: [
      { label: "My Ads", href: "/profile/my-ads", icon: Megaphone },
      { label: "Favourite Ads", href: "/profile/favourites", icon: Heart },
      { label: "My Lottery", href: "/profile/my-lottery", icon: Ticket },
      { label: "My Subscription", href: "/profile/subscription", icon: CreditCard },
    ],
  },
  {
    title: "Account",
    items: [{ label: "Settings", href: "/profile/settings", icon: Settings }],
  },
];

type ProfileSidebarProps = {
  variant?: "desktop" | "mobile";
  className?: string;
  onNavigate?: () => void;
};

export default function ProfileSidebar({ variant = "desktop", className, onNavigate }: ProfileSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/profile") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  const containerClass = cn(
    "flex flex-col gap-4 bg-card/95",
    variant === "desktop"
      ? "hidden rounded-xl border p-5 shadow-sm lg:flex"
      : "flex rounded-none border-0 p-5 lg:hidden"
  );

  return (
    <aside className={cn(containerClass, className)}>
      <div className="flex items-center gap-3">
        <Avatar className="h-14 w-14">
          <AvatarImage src={userSnapshot.avatar} alt={userSnapshot.name} />
          <AvatarFallback>
            <UserCircle className="h-7 w-7" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-base font-semibold leading-tight">{userSnapshot.name}</h2>
          <p className="text-xs text-muted-foreground">{userSnapshot.phone}</p>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {userSnapshot.membership}
            </Badge>
            {userSnapshot.verified ? <Badge className="text-xs">Verified</Badge> : null}
          </div>
        </div>
      </div>

      <Button variant="default" className="w-full rounded-full">
        <Link href="/post-ad">Post an ad</Link>
      </Button>

      <Separator className="bg-border/70" />

      <nav className="space-y-5 text-sm">
        {navSections.map((section) => (
          <div key={section.title} className="space-y-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground/80">
              {section.title}
            </p>
            <div className="space-y-1.5">
              {section.items.map(({ label, icon: Icon, href, badge }) => {
                const active = isActive(href);

                return (
                  <Link
                    key={label}
                    href={href}
                    className={cn(
                      "group flex items-center justify-between gap-3 rounded-xl border px-3 py-2 transition",
                      active
                        ? "border-primary/50 bg-primary/10 text-primary"
                        : "border-transparent text-muted-foreground hover:border-border hover:bg-muted/60"
                    )}
                    onClick={onNavigate}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "grid h-8 w-8 place-items-center rounded-lg border text-sm transition",
                          active
                            ? "border-primary/30 bg-primary/20 text-primary"
                            : "border-border/60 bg-muted/60 text-muted-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-medium leading-tight">{label}</span>
                    </span>
                    {badge ? (
                      <Badge
                        variant="secondary"
                        className={cn(
                          "h-6 min-w-7 justify-center text-[11px]",
                          active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        )}
                      >
                        {badge}
                      </Badge>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-sm text-emerald-900 dark:border-emerald-400/50 dark:bg-emerald-500/10 dark:text-emerald-100">
        <p className="font-semibold">Boost your ad visibility</p>
        <p className="mt-1 text-xs text-emerald-900/80 dark:text-emerald-100/80">
          Featured upgrades help your listings appear ahead of others. Try promoting your best-selling items.
        </p>
      </div>
    </aside>
  );
}
