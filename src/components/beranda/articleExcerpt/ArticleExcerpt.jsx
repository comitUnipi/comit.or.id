import Link from "next/link"
import Excerpt from "./Excerpt";
import articleExcerpt from "@/helper/articleExcerpt/articleExcerpt";

const ArticleExcerpt = () => {
  return (
    <div className="items-center lg:mx-[10em] mt-2 mx-5">
      <div className="md:flex md:justify-between text-center">
        <h1 className="font-semibold md:text-[48px] text-4xl">Artikel Kami</h1>
        <p className=" hidden md:block self-end underline md:text-[16px] text-sm">
          Selengkapnya
        </p>
      </div>
      <div>
        {articleExcerpt.map((value, index) => {
          return index % 2 == 0 ? (
            <Excerpt
              key={index}
              title={value.title}
              createdAt={value.created_at}
              tag={value.tag}
              excerpt={value.excerpt}
              featuredImage={value.featured_image}
            />
          ) : (
            <Excerpt
              key={index}
              title={value.title}
              createdAt={value.created_at}
              tag={value.tag}
              excerpt={value.excerpt}
              featuredImage={value.featured_image}
              rowStart="lg:row-start-1"
            />
          );
        })}
      </div>
      <p className="mt-6 block md:hidden underline text-center pr-4 text-sm">
        <Link href="/artikel">
        Selengkapnya
        </Link>
        </p>
    </div>
  );
};

export default ArticleExcerpt;
