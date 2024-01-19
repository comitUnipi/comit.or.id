import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Pendahuluan = () => {
  return (
    <>
      <div className="mx-5 md:flex justify-center items-center gap-10">
        <div className="lg:order-2 mt-8 md:mt-0">
          <Image className="md:w-[400px] lg:w-full" src="/images/comit.png" alt="logo" height={563} width={528} />
        </div>
        <div className="lg:w-[500px] lg:h-[370px] lg:-mt-28">
          <h1 className="text-[50px] lg:text-[64px] font-extrabold">
            Community
            <br />
            <span className="text-primary">Of Information</span>
            <br />
            Technology
          </h1>
          <div className="p-2 opacity-80">
            <p>
              Selamat Datang di
              <span className="text-primary font-semibold"> COMIT</span>
            </p>
            <p>
              Semangat <span className="text-primary font-semibold">COMIT</span>
              , Salam Teknologi
            </p>
          </div>
          <div className="flex gap-4 mt-3">
            <Button>
              <Link href="/">Selengkapnya</Link>
            </Button>
            <Button variant="outline">
              <Link href="/">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pendahuluan;
