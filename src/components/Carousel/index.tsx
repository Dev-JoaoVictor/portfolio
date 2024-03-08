import { Swiper } from "swiper/react"
import { Pagination } from "swiper/modules";

interface CoruselProps {
  children: React.ReactNode;
  slidesPerView: number
}

export function Carousel({ children, slidesPerView }: CoruselProps) {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={slidesPerView}
      spaceBetween={10}
      pagination
    >
      {children}
    </Swiper >
  )
}