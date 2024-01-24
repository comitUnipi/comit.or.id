import galeri from "@/helper/galeri/galeri";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const GaleriList = () => {
  return (
    <>
      {galeri.map((item, index) => (
        <div key={index} className="lg:ml-[3rem] my-10 ml-[2.5rem]">
          <h2 className="lg:ml-[9rem] font-semibold lg:text-2xl text-xl">
            {item.judul}
          </h2>
          <div className="">
            <Carousel className="w-full lg:max-w-5xl lg:mx-auto mt-5">
              <CarouselContent className="-ml-1">
                {item.src.map((image) => (
                  <CarouselItem
                    key={image.id}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="">
                      <Image src={image.src} alt="" width={300} height={100} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      ))}
    </>
  );
};

export default GaleriList;
