import Image from "next/image";
import Link from "next/link";

const mockProducts = [
  {
    id: "b1",
    name: "Refrigerator 240L",
    price: "৳ 27,500",
    image:
      "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg",
    href: "/ads/home-appliances/fridge-240l",
  },
  {
    id: "b2",
    name: "Washing Machine 7kg",
    price: "৳ 21,900",
    image:
      "https://images.pexels.com/photos/3967642/pexels-photo-3967642.jpeg",
    href: "/ads/home-appliances/wm-7kg",
  },
  {
    id: "b3",
    name: "DSLR Camera Kit",
    price: "৳ 38,000",
    image:
      "https://images.pexels.com/photos/51383/camera-lens-lens-reflection-51383.jpeg",
    href: "/ads/electronics/dslr-kit",
  },
  {
    id: "b4",
    name: "AC 1 Ton Inverter",
    price: "৳ 46,500",
    image:
      "https://images.pexels.com/photos/3968081/pexels-photo-3968081.jpeg",
    href: "/ads/home-appliances/ac-1ton",
  },
] as const;

export default function BestSellers() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Latest Ads</h2>
          <Link href="/ads/latest" className="text-primary hover:underline">
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
