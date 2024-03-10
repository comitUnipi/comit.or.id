import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import LayoutContainer from "../Container";

import { Archivo_Narrow } from "next/font/google";
import { NavigationMobile } from "./NavigationMobile";

const AN = Archivo_Narrow({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 w-full bg-white z-30 shadow-sm">
        <div>
          <LayoutContainer>
            <div className="flex justify-between items-center gap-3 md:gap-0">
              <Link
                className={`flex items-center font-extrabold text-xl text-blue-600 ${AN.className}`}
                href="/"
              >
                <Image
                  src="/images/logoComit.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <span>Comit</span>
              </Link>
              <Navigation />
              <div className="block md:hidden">
                <NavigationMobile />
              </div>
            </div>
          </LayoutContainer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
