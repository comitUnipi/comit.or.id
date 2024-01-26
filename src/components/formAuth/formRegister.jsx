import React from "react";
import Image from "next/image";
import FormInput from "./formInput";
import FormButton from "./formButton";
import FormDesc from "./formDesc";
import { Label } from "@radix-ui/react-label";

const FormRegister = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="flex justify-between shadow-lg rounded-lg">
        <div className="p-4 mx-5 w-full">
          <h1 className="text-4xl mt-5 font-bold text-center">Daftar</h1>
          <form>
            <FormInput
              label={"NamaLengkap"}
              type={"text"}
              placeholder={"Contoh: John Doe"}
            />
            <div className="py-3 -mr-32">
              <Label className="text-lg font-semibold">Divisi</Label>
              <br />
              <div className="text-[14px]">
                <select className="mt-2 w-[73%] md:w-[83%] lg:w-[77%] border rounded-md p-2 opacity-80 focus:outline-none focus:ring focus:ring-primary">
                  <option>Program</option>
                  <option>Comp & Network</option>
                  <option>Desain</option>
                </select>
              </div>
            </div>
            <FormInput
              label={"NPM"}
              type={"number"}
              placeholder={"Contoh: 2024123456"}
            />
            <FormInput
              label={"Kata Sandi"}
              type={"password"}
              placeholder={"********"}
            />
            <FormButton title={"Daftar"} />
            <FormDesc
              keterangan={"Sudah memiliki akun? "}
              linkForm={"/auth/login"}
              title={"Login"}
            />
          </form>
        </div>
        <div className="hidden lg:block bg-primary rounded-r-md shadow-lg lg:w-[77%]">
          <Image
            className="lg:mt-[10rem] lg:ml-[38px]"
            src="/images/sayHello.png"
            alt="..."
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
