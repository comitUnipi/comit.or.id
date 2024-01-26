import Link from "next/link";
import Excerpt from "./Excerpt";
import { KontenList } from "@/helper/artikel/kontenList";

const ArticleExcerpt = () => {
  return (
    <div className="items-center lg:mx-[10em] mt-2 mx-7">
      <div className="md:flex md:justify-between text-center">
        <h1 className="font-semibold md:text-[48px] text-4xl">Artikel Kami</h1>
        <Link href="/artikel" className=" hidden md:block self-end hover:underline md:text-[16px] text-sm">
          Selengkapnya
        </Link>
      </div>
      <div>
        {KontenList.slice(0, 3).map((konten, index) => {
          return index % 2 == 0 ? (
            <Excerpt
              key={index}
              title={konten.judul}
              createdAt={konten.tanggal}
              tag={konten.topik}
              excerpt={konten.subJudul}
              featuredImage={konten.img}
              />
              ) : (
                <Excerpt
                key={index}
                title={konten.judul}
                createdAt={konten.tanggal}
                tag={konten.topik}
                excerpt={konten.subJudul}
                featuredImage={konten.img}
                rowStart="lg:row-start-1"
                />
          );
        })}
      </div>
      <p className="mt-6 block md:hidden underline text-center pr-4 text-sm">
        <Link href="/artikel">Selengkapnya</Link>
      </p>
    </div>
  );
};

export default ArticleExcerpt;
