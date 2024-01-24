import React from "react";
import Image from "next/image";
import mentor from "@/helper/mentor/mentor";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../ui/card";
import { CiLinkedin } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

const MentorCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <Carousel
        className="w-full max-w-4xl mx-auto mt-10"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {mentor.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 flex justify-center gap-10">
                <Card className="bg-gray-200">
                  <CardHeader>
                    <Image
                      src={item.profile}
                      alt=""
                      width={100}
                      height={100}
                      className="mx-auto border border-gray-800 rounded-full"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{item.name}</CardTitle>
                    <p className="mt-2  text-primary">{item.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <span className="flex mx-auto gap-2">
                      <PiInstagramLogoLight className="text-2xl" />
                      <CiLinkedin className="text-2xl" />
                      <CiMail className="text-2xl" />
                    </span>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MentorCard;
