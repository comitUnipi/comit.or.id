import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarList } from "@/helper/navigation/navbarList";

const NavigationMobile = ({handleNav}) => {
  return (
    <>
      <Link href="/">
        <div className="flex items-center ">
          <Image
            src="/images/logoComit.png"
            alt="logo"
            width={80}
            height={80}
          />
          <h1 className="text-white font-bold text-xl">COMIT</h1>
        </div>
      </Link>
      <div onClick={handleNav} className="mt-5">
        {NavbarList.map((item, index) => (
          <li className="text-sm text-white py-1 opacity-80 hover:underline" key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default NavigationMobile;
