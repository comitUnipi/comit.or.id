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
        <div key={index} className="mx-[2rem] sm:mx-4 my-10">
          <div className="">
            <Carousel className="lg:max-w-5xl mx-auto mt-5">
              <h2 className="font-semibold mb-3 lg:text-2xl text-xl">
                {item.judul}
              </h2>
              <CarouselContent className="-ml-1">
                {item.src.map((image) => (
                  <CarouselItem
                    key={image.id}
                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
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
