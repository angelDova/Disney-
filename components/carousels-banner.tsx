"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie } from "@/typings";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

interface CarouselsBannerProps {
  movies: Movie[];
}

Autoplay.globalOptions = { delay: 8000 };

function CarouselsBanner({ movies }: CarouselsBannerProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
    >
      <div className="flex">
        {movies.map((movies) => (
          <div key={movies.id} className="flex-[0_0_100%] min-w-0 relative">
            <Image
              key={movies.id}
              src={getImagePath(movies.backdrop_path, true)}
              alt=""
              height={1080}
              width={1920}
            />
            <div className="hidden md:inline absolute mt-0 top-0  pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
              <h2 className="text-5xl font-bold z-50">{movies.title}</h2>
              <p className="max-w-xl line-clamp-3">{movies.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
    </div>
  );
}

export default CarouselsBanner;
