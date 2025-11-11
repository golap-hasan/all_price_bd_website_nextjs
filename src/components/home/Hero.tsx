"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import PageLayout from "@/tools/PageLayout";

const heroSlides = [
  {
    id: 1,
    href: "/ads/featured",
    imageSrc: "/images/hero/featured-vehicles.jpg",
    alt: "Discover featured vehicles from trusted sellers",
  },
  {
    id: 2,
    href: "/ads/electronics",
    imageSrc: "/images/hero/flash-deals.jpg",
    alt: "View the latest electronics flash deals",
  },
  {
    id: 3,
    href: "/ads/property",
    imageSrc: "/images/hero/property-market.jpg",
    alt: "Browse trending properties across Bangladesh",
  },
] as const;

type SideAd = {
  href: string;
  imageSrc: string;
  alt: string;
};

const leftAd: SideAd = {
  href: "/pricing",
  imageSrc: "/images/home/ads/boost-your-ad.jpg",
  alt: "Promote your listing to reach more buyers",
};

const rightAd: SideAd = {
  href: "/delivery",
  imageSrc: "/images/home/ads/nationwide-delivery.jpg",
  alt: "Book nationwide delivery with end-to-end tracking",
};

const Hero = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null
  );
  const autoplayRef = React.useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const stopAutoplay = React.useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = React.useCallback(() => {
    stopAutoplay();
    if (!carouselApi) return;
    autoplayRef.current = setInterval(() => {
      if (!carouselApi) return;
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 3000);
  }, [carouselApi, stopAutoplay]);

  React.useEffect(() => {
    if (!carouselApi) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [carouselApi, startAutoplay, stopAutoplay]);

  return (
    <section className="relative overflow-hidden">
      <PageLayout className="relative">
        <div className="grid items-stretch gap-6 lg:grid-cols-[220px_minmax(0,1fr)_220px]">
          <aside className="hidden lg:block h-full">
            <SideAdLink {...leftAd} />
          </aside>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2">
            <Carousel
              className="w-full"
              setApi={setCarouselApi}
              onMouseEnter={stopAutoplay}
              onFocusCapture={stopAutoplay}
              onMouseLeave={startAutoplay}
              onBlurCapture={startAutoplay}
            >
              <CarouselContent className="ml-0">
                {heroSlides.map((slide) => (
                  <CarouselItem key={slide.id} className="pl-0">
                    <Link
                      href={slide.href}
                      className="group block overflow-hidden rounded-3xl"
                    >
                      <Image
                        src={slide.imageSrc}
                        alt={slide.alt}
                        width={960}
                        height={480}
                        priority={slide.id === 1}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="-left-4 top-1/2 -translate-y-1/2 border-border bg-card text-foreground shadow hover:bg-muted" />
              <CarouselNext className="-right-4 top-1/2 -translate-y-1/2 border-border bg-card text-foreground shadow hover:bg-muted" /> */}
            </Carousel>
          </div>

          <aside className="hidden lg:block h-full">
            <SideAdLink {...rightAd} />
          </aside>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:hidden">
          <SideAdLink {...leftAd} />
          <SideAdLink {...rightAd} />
        </div>
      </PageLayout>
    </section>
  );
};

const SideAdLink = ({ href, imageSrc, alt }: SideAd) => (
  <Link
    href={href}
    className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/40"
  >
    <Image
      src={imageSrc}
      alt={alt}
      width={360}
      height={440}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </Link>
);

export default Hero;