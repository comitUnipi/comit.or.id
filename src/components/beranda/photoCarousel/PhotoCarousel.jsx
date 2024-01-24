import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselItem, CarouselContent } from "../../ui/carousel";
import { Card, CardContent } from "../../ui/card";

const PhotoCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <Carousel
        className="w-full mt-10 mb-10 "
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="bg-[#d9d9d9] md:h-[442px] flex justify-center rounded-none h-[221px]">
                  <CardContent className="flex items-center">
                    <span className="text-4xl font-semibold">
                      Foto Carousel {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
