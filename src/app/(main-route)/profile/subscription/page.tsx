import React from 'react';
import { Crown, RefreshCw, ShieldCheck, Wallet } from "lucide-react";

import { ProfilePageHeader } from "@/components/profile/ProfilePageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const billingHistory = [
  {
    invoice: "INV-2025-112",
    date: "15 Nov 2025",
    plan: "Gold Plan",
    amount: "৳2,499",
    status: "Paid",
  },
  {
    invoice: "INV-2025-093",
    date: "15 Oct 2025",
    plan: "Gold Plan",
    amount: "৳2,499",
    status: "Paid",
  },
  {
    invoice: "INV-2025-074",
    date: "15 Sep 2025",
    plan: "Gold Plan",
    amount: "৳2,499",
    status: "Paid",
  },
];

const planPerks = [
  "5 Featured ad boosts each month",
  "Priority placement in search results",
  "Verified badge on all listings",
  "Dedicated account manager",
];

const upgradeOptions = [
  {
    title: "Platinum Business",
    price: "৳4,999/mo",
    description: "Unlimited featured boosts, banner visibility and analytics dashboard.",
    tags: ["Best for agencies", "Unlimited boosts"],
  },
  {
    title: "Silver Starter",
    price: "৳1,499/mo",
    description: "Ideal for new sellers with 2 featured boosts and weekly performance reports.",
    tags: ["Budget friendly", "2 boosts"],
  },
];

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <ProfilePageHeader
        title="Subscription & billing"
        description="Manage your membership benefits, payment methods, and invoices."
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <RefreshCw className="mr-2 h-4 w-4" /> Update payment method
            </Button>
            <Button size="sm" className="rounded-full">
              <Wallet className="mr-2 h-4 w-4" /> Add wallet funds
            </Button>
          </div>
        }
      />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Card className="border-border/60 bg-card/95 shadow-sm">
          <CardHeader className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Active plan
              </Badge>
              <CardTitle className="mt-2 flex items-center gap-2 text-xl font-semibold">
                <Crown className="h-5 w-5 text-amber-500" /> Gold Business
              </CardTitle>
              <CardDescription>Renews automatically on 15 Dec 2025</CardDescription>
            </div>
            <Button variant="outline" className="rounded-full">
              Manage subscription
            </Button>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Enjoy premium visibility, instant support, and exclusive access to promotional events tailored for top
                sellers in Bangladesh.
              </p>
              <div className="space-y-2 text-sm">
                {planPerks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span className="text-muted-foreground">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-primary shadow-sm dark:bg-primary/10">
              <p className="text-xs uppercase tracking-widest text-primary/70">Renewal summary</p>
              <p className="mt-2 text-2xl font-semibold text-primary">৳2,499</p>
              <p className="text-xs text-primary/80">Next billing cycle in 20 days</p>
              <div className="mt-4 space-y-2 text-xs text-primary/80">
                <p>Payment method: Visa ending ••18</p>
                <p>Auto-renewal: Enabled</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-primary/5 text-primary shadow-sm dark:bg-primary/10">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Need more visibility?</CardTitle>
            <CardDescription className="text-primary/80 dark:text-primary-foreground/80">
              Activate campaign bundles and reach up to 5x more buyers across Bangladesh.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
              <p className="text-xs uppercase tracking-widest text-primary/70">Current credits</p>
              <p className="text-lg font-semibold text-primary">12 promotion credits</p>
              <p className="text-xs text-primary/80">Use them for featured boosts anytime before 31 Dec 2025.</p>
            </div>
            <Button variant="default" className="w-full rounded-full">
              Explore campaign bundles
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {upgradeOptions.map((option) => (
          <Card key={option.title} className="border-border/60 bg-card/95 shadow-sm">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-lg font-semibold text-foreground">{option.title}</CardTitle>
              <CardDescription>{option.price}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {option.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-primary/40 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full">Upgrade plan</Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <Card className="border-border/60 bg-card/95 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Billing history</CardTitle>
          <CardDescription>Download invoices for your records and track payment status.</CardDescription>
        </CardHeader>
        <CardContent className="overflow-hidden rounded-xl border border-border/40">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billingHistory.map((bill) => (
                <TableRow key={bill.invoice}>
                  <TableCell className="font-medium text-foreground">{bill.invoice}</TableCell>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell>{bill.plan}</TableCell>
                  <TableCell>{bill.amount}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-emerald-400/50 text-emerald-600 dark:text-emerald-300">
                      {bill.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}