import { Button } from "@/components/ui/button";
import { IoMdMenu } from "react-icons/io";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import FooterList from "../footer/FooterList";

export function NavigationMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <IoMdMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="mt-5 flex justify-start items-center">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <Image
                src="/images/logoComit.png"
                alt="logo"
                width={100}
                height={100}
              />
            </SheetDescription>
          </div>
        </SheetHeader>
        <div className="flex flex-col text-sm gap-4 py-4">
          <div className="items-center gap-4">
            <SheetClose asChild>
              <Link href="#" className="hover:underline">
                Beranda
              </Link>
            </SheetClose>
          </div>
          <div className="items-center gap-4">
            <SheetClose asChild>
              <Link href="#" className="hover:underline">
                Tentang Kami
              </Link>
            </SheetClose>
          </div>
          <div className="items-center gap-4">
            <SheetClose asChild>
              <Link href="#" className="hover:underline">
                Galeri
              </Link>
            </SheetClose>
          </div>
          <div className="items-center gap-4">
            <SheetClose asChild>
              <Link href="#" className="hover:underline">
                Artikel
              </Link>
            </SheetClose>
          </div>
        </div>
        <SheetFooter>
          <FooterList>
            <h2 className="mt-5 text-base font-semibold mb-2">Ikuti Kami</h2>
            <div className="flex gap-2">
              <Link href="#">
                <FaGithub size={24} />
              </Link>
              <Link href="#">
                <FaInstagram size={24} />
              </Link>
              <Link href="#">
                <FaTiktok size={24} />
              </Link>
            </div>
          </FooterList>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
