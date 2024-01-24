import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import NavbarButton from "./NavbarButton";
import { IoMdMenu } from "react-icons/io";
import NavigationMobile from "./NavigationMobile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <main className="container mx-auto fixed top-0 left-0 right-0 bg-white  z-[99999]">
        <nav className="flex justify-between items-center py-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logoComit.png"
                alt="logo"
                width={80}
                height={80}
              />
              <h1 className="text-primary font-bold text-xl">COMIT</h1>
            </div>
          </Link>
            <Navigation />
            <NavbarButton />
          <IoMdMenu onClick={handleNav} size={30} className="md:hidden hover:bg-primary hover:text-white hover:opacity-80 rounded-md" />
          <div className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen p-10 ease-in-out duration-500 bg-primary dark:bg-slate-800 rounded-r-md"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }>
            <NavigationMobile handleNav={handleNav}/>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
