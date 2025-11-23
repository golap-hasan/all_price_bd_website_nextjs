import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BestSellers from "@/components/home/BestSellers";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <FeaturedProducts />
      <BestSellers />
    </div>
  );
}
