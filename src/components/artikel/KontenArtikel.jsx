import React from "react";
import { KontenList } from "@/helper/artikel/kontenList";
import Excerpt from "../beranda/articleExcerpt/Excerpt";

const KontenArtikel = () => {
  return (
    <>
      {KontenList.map((konten, index) => (
        <Excerpt
          key={index}
          title={konten.judul}
          createdAt={konten.tanggal}
          tag={konten.topik}
          excerpt={konten.subJudul}
          featuredImage={konten.img}
        />
      ))}
    </>
  );
};

export default KontenArtikel;
