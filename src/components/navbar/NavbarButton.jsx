import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const NavbarButton = () => {
  const router = useRouter();
  return (
    <>
      <div className="hidden md:flex">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => router.push("/auth/login")}
            className="px-6"
            size="sm"
          >
            Masuk
          </Button>
          <Button
            onClick={() => router.push("/auth/register")}
            className="px-6"
            size="sm"
            variant="outline"
          >
            Daftar
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavbarButton;
