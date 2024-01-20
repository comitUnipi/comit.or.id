import Excerpt from "./Excerpt";
import articleExcerpt from "@/helper/articleExcerpt/articleExcerpt";

const ArticleExcerpt = () => {
  return (
    <div className="w-[75%] mx-auto mt-[7rem]">
      <div className="md:flex md:justify-between text-center">
        <h1 className="font-semibold md:text-[48px] text-4xl">Artikel Kami</h1>
        <p className="self-end underline md:text-[16px] text-sm ">Selengkapnya</p>
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
              flexDecoration="md:flex-row"
            />
          ) : (
            <Excerpt
              key={index}
              title={value.title}
              createdAt={value.created_at}
              tag={value.tag}
              excerpt={value.excerpt}
              featuredImage={value.featured_image}
              flexDecoration="md:flex-row-reverse"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArticleExcerpt;
