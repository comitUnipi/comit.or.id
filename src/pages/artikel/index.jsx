import React from "react";
import Topik from "@/components/artikel/Topik";
import SearchArtikel from "@/components/artikel/SearchArtikel";
import KontenArtikel from "@/components/artikel/KontenArtikel";

const Artikel = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl font-bold">Artikel</h1>
          <p className="py-4 opacity-80">
            Artikel Comit Seputar Teknologi, Desain, dan Kegiatan apa saja di
            comit.
          </p>
          <SearchArtikel />
        </div>
        <Topik />
        <KontenArtikel />
      </div>
    </>
  );
};

export default Artikel;
