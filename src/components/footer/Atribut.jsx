import React from "react";
import Link from "next/link";
import { NavbarList } from "@/helper/navigation/navbarList";
import { SosmedList } from "@/helper/navigation/sosmedList";

const Atribut = () => {
  return (
    <>
      <div className="flex gap-6 mt-3 md:mt-0">
        <div className="text-white">
          <h1 className="opacity-80">Organisasi</h1>
          {NavbarList.map((item, index) => (
            <li className="text-xs hover:underline" key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </div>
        <div className="text-white">
          <h1 className="opacity-80">Sosial Media Kami</h1>
          {SosmedList.map((item, index) => (
            <li className="text-xs hover:underline" key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Atribut;
