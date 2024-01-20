import React from "react";
import Image from "next/image";
import { KontenList } from "@/helper/artikel/kontenList";

const KontenArtikel = () => {
  return (
    <>
      {KontenList.map((item, index) => (
        <div key={index} className="mt-10 grid grid-cols-12">
          <div className="order-1 col-span-12 lg:col-span-3 lg:order-2 py-2">
            <Image src={item.img} alt="img" width={400} height={400} />
          </div>
          <div className="order-2 col-span-12 lg:col-span-9 lg:order-1">
            <p className="opacity-80">{item.tanggal}</p>
            <h1 className="text-2xl font-semibold pb-3 hover:underline cursor-pointer">
              {item.judul}
            </h1>
            <p className="md:pr-20 opacity-80 lg:text-lg">{item.subJudul}</p>
            <div className="flex gap-6 items-center">
              {item.topik &&
                item.topik.map((item, index) => (
                  <span
                    className="bg-primary bg-opacity-50 py-1 px-4 rounded-md mt-6"
                    key={index}
                  >
                    <p className="text-white text-sm">{item.opsi}</p>
                  </span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default KontenArtikel;
