import React from "react";
import Image from "next/image";
import Link from "next/link"
import { Button } from "../ui/button";

const TentangKami = () => {
  return (
    <>
      <div className="bg-primary h-[15px] md:h-[20px] mt-5" />
      <div className="grid grid-cols-12 py-5 lg:py-3 items-center">
        <div className="col-span-3 lg:col-span-2">
          <Image src="/images/logoComit.png" alt="" width={300} height={200} />
        </div>
        <div className="text-center col-span-6 lg:col-span-8">
          <h1 className="text-2xl lg:text-[48px] lg:mb-2 font-semibold">
            Tentang Kami
          </h1>
          <p className="opacity-80 leading-normal text-sm lg:text-[20px] py-2">
            Marilah Belajar Berorganisasi <br /> dan Berbagi Ilmu Teknologi
            <br /> Bersama Kami.
          </p>
          <Button size="sm">
            <Link href="/about">Selengkapnya</Link>
          </Button>
        </div>
        <div className="col-span-3 lg:col-span-2 -mt-10">
          <Image src="/images/sayHello.png" alt="" width={300} height={200} />
        </div>
      </div>
      <div className="bg-primary h-[15px] md:h-[20px] mb-5" />
    </>
  );
};

export default TentangKami;
