import React from "react";
import Image from "next/image";

import FormInput from "./formInput";
import FormButton from "./formButton";
import FormDesc from "./formDesc";

const FormLogin = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="flex justify-between shadow-xl rounded-lg">
        <div className="p-4 mx-5 w-full">
          <h1 className="text-4xl mt-5 font-bold text-center">Login</h1>
          <form>
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
            <FormButton title={"Login"} />
            <FormDesc
              keterangan={"Belum memiliki akun? "}
              linkForm={"/auth/register"}
              title={"Daftar"}
            />
          </form>
        </div>
        <div className="hidden lg:block bg-primary rounded-r-md shadow-lg lg:w-[70%]">
          <Image
            className="lg:mt-[112px] lg:ml-[120px]"
            src="/images/sayHello.png"
            alt="..."
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
