import React from "react";
import Link from "next/link";
import { NavbarList } from "@/helper/navigation/navbarList";

const Navigation = () => {
  return (
    <>
      <div className="hidden md:block">
        <ul className="flex items-center gap-6">
          {NavbarList.map((item, index) => (
            <li className="text-sm opacity-80 hover:underline" key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
