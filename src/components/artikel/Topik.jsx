import { TopikList } from "@/helper/artikel/topikList";
import React from "react";

const Topik = () => {
  return (
    <>
      <div className="flex items-center gap-2 mt-4 pl-2">
        <h1 className="text-xs md:text-md">Pilih Topik:</h1>
        {TopikList.map((item, index) => (
          <div key={index}>
            <span className="bg-slate-200 py-1 px-3 text-[#636363] text-xs rounded-md cursor-pointer hover:bg-slate-400 hover:text-black">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Topik;
