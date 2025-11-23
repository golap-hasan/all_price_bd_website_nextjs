import Image from "next/image";
import Link from "next/link";

const mockProducts = [
  {
    id: "p1",
    name: "Refurbished iPhone 13",
    price: "৳ 58,500",
    image:
      "https://images.pexels.com/photos/6078123/pexels-photo-6078123.jpeg",
    href: "/ads/electronics/iphone-13",
  },
  {
    id: "p2",
    name: "Gaming Laptop RTX 4060",
    price: "৳ 119,000",
    image:
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    href: "/ads/electronics/laptop-rtx4060",
  },
  {
    id: "p3",
    name: "Motorbike - 125cc",
    price: "৳ 85,000",
    image:
      "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
    href: "/ads/vehicles/bike-125",
  },
  {
    id: "p4",
    name: 'LED TV 43"',
    price: "৳ 31,900",
    image:
      "https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg",
    href: "/ads/electronics/tv-43",
  },
] as const;

export default function FeaturedProducts() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Top Ads</h2>
          <Link href="/ads/top-ads" className="text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockProducts.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group rounded-md border bg-card shadow-sm overflow-hidden"
            >
              <div className="aspect-4/3 relative">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-3">
                <div className="line-clamp-1 font-medium group-hover:text-primary transition-colors">
                  {p.name}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
