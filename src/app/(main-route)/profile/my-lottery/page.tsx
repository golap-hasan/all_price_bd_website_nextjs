import { CalendarDays, Gift, Sparkles, Ticket, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ProfilePageHeader } from "@/components/profile/ProfilePageHeader";

const lotteryStats = [
  {
    label: "Entries this month",
    value: "18",
    change: "+4 vs last month",
    icon: Ticket,
  },
  {
    label: "Reward points",
    value: "2,450",
    change: "+320 earned",
    icon: Sparkles,
  },
  {
    label: "Wins so far",
    value: "3",
    change: "Last win 2 weeks ago",
    icon: Trophy,
  },
];

const upcomingDraws = [
  {
    title: "Mega Gadget Bonanza",
    drawDate: "28 Nov 2025",
    entries: 6,
    prize: "Gaming laptop & accessories bundle",
  },
  {
    title: "Weekly Shopper Rewards",
    drawDate: "02 Dec 2025",
    entries: 3,
    prize: "৳10,000 shopping voucher",
  },
];

const rewardHistory = [
  {
    title: "Smartphone Flash Draw",
    prize: "iPhone 14 Pro",
    wonOn: "15 Nov 2025",
    status: "Claimed",
  },
  {
    title: "Festival Cashback",
    prize: "৳5,000 wallet credit",
    wonOn: "08 Oct 2025",
    status: "Redeemed",
  },
  {
    title: "Weekend Lucky Spin",
    prize: "Featured ad boost",
    wonOn: "20 Sep 2025",
    status: "Used",
  },
];

export default function MyLotteryPage() {
  return (
    <div className="space-y-6">
      <ProfilePageHeader
        title="My Lottery"
        description="Increase your chances to win exclusive prizes and ad boosts. Track entries, rewards, and draw schedules here."
        actions={
          <Button size="sm" className="rounded-full">
            <Ticket className="mr-2 h-4 w-4" /> Enter new draw
          </Button>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {lotteryStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border-border/60 bg-card/95 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Card className="border-border/60 bg-card/95 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <CalendarDays className="h-4 w-4 text-primary" /> Upcoming draws
            </CardTitle>
            <CardDescription>Boost entries to increase your odds before the draw closes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDraws.map((draw) => (
              <div
                key={draw.title}
                className="flex flex-col gap-3 rounded-xl border border-border/40 bg-muted/30 p-4 text-sm dark:bg-muted/20"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-foreground">{draw.title}</p>
                    <p className="text-xs text-muted-foreground">Draw on {draw.drawDate}</p>
                  </div>
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    {draw.entries} entries
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Prize: {draw.prize}</p>
                <Progress value={Math.min(draw.entries * 10, 100)} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Increase your chances with more entries.</span>
                  <Button variant="outline" size="sm" className="rounded-full border-primary/40 px-3 text-primary">
                    Add entry
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-primary/5 text-primary shadow-sm dark:bg-primary/10">
          <CardHeader className="space-y-3">
            <CardTitle className="text-base font-semibold">Bonus rewards</CardTitle>
            <CardDescription className="text-primary/80 dark:text-primary-foreground/80">
              Collect reward points from each entry and redeem them for ad boosts, vouchers, and premium listings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
              <p className="text-xs uppercase tracking-widest text-primary/70">Current tier</p>
              <p className="text-lg font-semibold text-primary">Gold member</p>
              <p className="text-xs text-primary/80">Earn 2x points through 31 Dec 2025</p>
            </div>
            <Button variant="default" className="w-full rounded-full">
              Redeem reward points
            </Button>
            <Button variant="outline" className="w-full rounded-full border-primary/40 text-primary">
              View reward catalogue
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="border-border/60 bg-card/95 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <Gift className="h-4 w-4 text-primary" /> Reward history
          </CardTitle>
          <CardDescription>Your previous wins and redemptions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {rewardHistory.map((reward) => (
            <div
              key={reward.title}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/40 bg-muted/30 p-4 dark:bg-muted/20"
            >
              <div>
                <p className="font-medium text-foreground">{reward.title}</p>
                <p className="text-xs text-muted-foreground">Won on {reward.wonOn}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-primary/40 text-primary">
                  {reward.prize}
                </Badge>
                <Badge variant="secondary" className="text-xs font-medium">
                  {reward.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}