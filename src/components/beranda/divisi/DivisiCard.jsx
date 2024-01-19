import React from "react";
import getDivisi from "@/helper/Pelatihan/pelatihan";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DivisiCard = () => {
  // const [hidden, setHidden] =
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="gap-5 mt-10 mx-auto">
      <Carousel
        className="w-full max-w-5xl mx-auto mt-10"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {getDivisi.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 flex justify-center gap-10">
                  <Card className="rounded-t-sm">
                    <Image
                      src={item.img}
                      alt="image"
                      width={300}
                      height={100}
                      className="w-full"
                    />
                    <CardContent className="bg-primary text-white rounded-b-sm flex justify-center">
                      <p className="mt-5 p-2 text-md font-semibold">
                        {item.name}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="block lg:hidden" />
        <CarouselNext className="block lg:hidden" />
      </Carousel>
    </div>
  );
};

export default DivisiCard;
