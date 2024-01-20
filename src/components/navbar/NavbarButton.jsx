import React from "react";
import { Button } from "../ui/button";

const NavbarButton = () => {
  return (
    <>
      <div className="hidden md:flex">
        <div className="flex items-center gap-4">
          <Button className="px-6" size="sm">
            Masuk
          </Button>
          <Button className="px-6" size="sm" variant="outline">
            Daftar
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavbarButton;
