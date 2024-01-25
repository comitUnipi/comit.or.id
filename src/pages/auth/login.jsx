import React from "react";
import Image from "next/image";
import Link from "next/link"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const login = () => {
  return (
    <>
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between border border-black shadow-xl rounded-lg">
          <div className="p-4 mx-5">
            <h1 className="text-4xl mt-5 font-bold">Masuk</h1>
            <form>
              <div className="py-3 -mr-32">
                <Label className="text-lg font-semibold">NPM</Label>
                <Input type="number" className="mt-2" placeholder="contoh: 2020200303" />
              </div>
              <div className="py-3 -mr-32">
                <Label className="text-lg font-semibold">Kata Sandi</Label>
                <Input type="password" className="mt-2" placeholder="**********" />
              </div>
              <div className="-mr-32">
                <Button className="mt-2 w-full">Masuk</Button>
              </div>
                <div className="flex justify-center my-4">
                <p>Tidak memiliki akun? <Link className="text-primary font-bold" href="/auth/register">Daftar</Link></p>
                </div>
            </form>
          </div>
          <div className="hidden md:block bg-primary border-l border-black rounded-r-md shadow-lg">
            <Image className="mt-10" src="/images/sayHello.png" alt="..." width={350} height={350} />
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
