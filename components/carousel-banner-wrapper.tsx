import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselsBanner from "./carousels-banner";

interface CarouselBannerWrapperProps {
  id?: string;
  keywords?: string;
}

const CarouselBannerWrapper = async ({
  id,
  keywords,
}: CarouselBannerWrapperProps) => {
  const movies = await getDiscoverMovies(id, keywords);
  return <CarouselsBanner movies={movies} />;
};

export default CarouselBannerWrapper;
