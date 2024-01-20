import React from "react";
import { SosmedList } from "@/helper/navigation/sosmedList";

const LogoSosmed = () => {
  return (
    <>
      <div className="flex gap-4">
        {SosmedList.map((item, index) => (
          <div key={index}>
            {item.icon && <item.icon size={25} className="text-white" />}
          </div>
        ))}
      </div>
    </>
  );
};

export default LogoSosmed;
