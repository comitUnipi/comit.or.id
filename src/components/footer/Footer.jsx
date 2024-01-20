import React from "react";
import Image from "next/image";
import Atribut from "./Atribut";
import Copyright from "./Copyright";
import LogoSosmed from "./LogoSosmed";

const Footer = () => {
  return (
    <>
      <main className="bg-primary">
        <div className="container mx-auto">
          <footer className="flex-cols md:flex gap-12 justify-center py-4">
            <div className="flex gap-4">
              <Image
                src="/images/comitHello.png"
                alt=""
                width={100}
                height={100}
              />
              <div className="mt-4">
                <LogoSosmed />
                <Copyright />
              </div>
            </div>
            <Atribut />
          </footer>
        </div>
      </main>
    </>
  );
};

export default Footer;
