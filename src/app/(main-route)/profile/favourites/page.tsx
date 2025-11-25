import { Heart, Share2, SlidersHorizontal } from "lucide-react";

import ListingCard, { type ListingCardProps } from "@/components/ads/ListingCard";
import { ProfilePageHeader } from "@/components/profile/ProfilePageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const favouriteAds: ListingCardProps[] = [
  {
    id: "iphone-15-pro",
    title: "iPhone 15 Pro Max 256GB Blue Titanium",
    price: "৳165,000",
    location: "Gulshan 1, Dhaka",
    postedAt: "1 hour ago",
    imageUrl: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
    isFeatured: true,
  },
  {
    id: "hybrid-bike",
    title: "Giant Escape 3 Hybrid Bike (Like New)",
    price: "৳38,000",
    location: "Uttara, Dhaka",
    postedAt: "3 hours ago",
    imageUrl: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
  },
  {
    id: "mirrorless-sony-a7",
    title: "Sony A7 III Mirrorless Camera + 24-70mm",
    price: "৳165,000",
    location: "Banani, Dhaka",
    postedAt: "Yesterday",
    imageUrl: "https://images.pexels.com/photos/39866/pexels-photo-39866.jpeg",
    isUrgent: true,
  },
  {
    id: "family-flat",
    title: "Family Apartment 1,450 sqft at Bashundhara",
    price: "৳26,500/month",
    location: "Bashundhara, Dhaka",
    postedAt: "2 days ago",
    imageUrl: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
  },
  {
    id: "gaming-pc-rtx4070",
    title: "Custom Gaming PC RTX 4070 | Ryzen 7",
    price: "৳175,000",
    location: "Dhanmondi, Dhaka",
    postedAt: "3 days ago",
    imageUrl: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
  },
  {
    id: "smartwatch-ultra",
    title: "Apple Watch Ultra 2 (Brand New)",
    price: "৳82,000",
    location: "Mirpur DOHS, Dhaka",
    postedAt: "5 days ago",
    imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
  },
];

const quickFilters = ["All", "Electronics", "Vehicles", "Property", "Jobs", "Services"];

const collections = [
  {
    title: "Premium phones",
    items: 9,
    updated: "Today 2:30 PM",
  },
  {
    title: "Apartments to rent",
    items: 6,
    updated: "Yesterday",
  },
  {
    title: "Bike upgrades",
    items: 4,
    updated: "2 days ago",
  },
];

export default function FavouriteAdsPage() {
  return (
    <div className="space-y-6">
      <ProfilePageHeader
        title="Favourite ads"
        description="Everything you love in one place. Track price drops, contact sellers quickly, and share your shortlist."
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Manage filters
            </Button>
            <Button size="sm" className="rounded-full">
              <Share2 className="mr-2 h-4 w-4" /> Share list
            </Button>
          </div>
        }
      />

      <div className="flex flex-wrap gap-2">
        {quickFilters.map((filter) => (
          <Button
            key={filter}
            variant={filter === "All" ? "default" : "outline"}
            size="sm"
            className="rounded-full"
          >
            {filter}
          </Button>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {favouriteAds.map((ad) => (
            <ListingCard key={ad.id} {...ad} />
          ))}
        </div>

        <div className="space-y-4">
          <Card className="border-border/60 bg-card/95 shadow-sm">
            <CardHeader className="space-y-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Heart className="h-4 w-4 text-primary" /> Saved collections
              </CardTitle>
              <CardDescription>Group favourites into custom lists to stay organised.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {collections.map((collection) => (
                <div
                  key={collection.title}
                  className="flex items-center justify-between rounded-xl border border-border/40 bg-muted/30 p-3 dark:bg-muted/20"
                >
                  <div>
                    <p className="font-medium text-foreground">{collection.title}</p>
                    <p className="text-xs text-muted-foreground">Updated {collection.updated}</p>
                  </div>
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    {collection.items} ads
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full rounded-full">
                Create new collection
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-primary/5 text-primary shadow-sm dark:bg-primary/10">
            <CardHeader className="space-y-2">
              <CardTitle className="text-base font-semibold">Tip for faster deals</CardTitle>
              <CardDescription className="text-primary/80 dark:text-primary-foreground/80">
                Contact sellers early in the morning and include your phone number for quick replies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" className="w-full rounded-full">
                Set reminder
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}