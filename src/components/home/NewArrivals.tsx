import Image from "next/image";
import Link from "next/link";

const mockProducts = [
  {
    id: "n1",
    name: "Wireless Earbuds V5.3",
    price: "৳ 1,490",
    image:
      "https://images.pexels.com/photos/3394667/pexels-photo-3394667.jpeg",
    href: "/ads/electronics/earbuds-v53",
  },
  {
    id: "n2",
    name: "Smartwatch Series X",
    price: "৳ 2,990",
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    href: "/ads/electronics/smartwatch-x",
  },
  {
    id: "n3",
    name: "Office Chair Ergonomic",
    price: "৳ 7,500",
    image:
      "https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg",
    href: "/ads/furniture/ergonomic-chair",
  },
  {
    id: "n4",
    name: "Android Phone A15",
    price: "৳ 18,900",
    image:
      "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg",
    href: "/ads/electronics/android-a15",
  },
] as const;

export default function NewArrivals() {
  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">New Arrivals</h2>
          <Link href="/ads/new" className="text-primary hover:underline">
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
