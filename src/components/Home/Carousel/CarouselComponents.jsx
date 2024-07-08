import Carousel from "./Carousel";
import Image from "./Image";

export default function CarouselComponents() {
  return (
    <div className="flex h-[360px] gap-7 my-5 ">
        <Image/>
        <Carousel/>
    </div>
  )
}
