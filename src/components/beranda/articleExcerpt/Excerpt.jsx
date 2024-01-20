import Image from "next/image";
import articleExcerpt from "@/helper/articleExcerpt/articleExcerpt";

const Excerpt = ({
  key,
  title,
  createdAt,
  tag,
  excerpt,
  featuredImage,
  flexDecoration,
}) => {
  return (
    <div>
      <div
        key={key}
        className={`md:flex md:gap-[10rem] md:my-[5rem] ${flexDecoration} md:border-none flex flex-col-reverse mt-[3rem]`}
      >
        <div>
          <h3 className="text-[#646464] text-[12px] font-medium">
            {createdAt}
          </h3>
          <h1 className="text-2xl font-semibold mb-3">{title}</h1>
          <p className="text-sm md:text-lg opacity-80">{excerpt}</p>
          <div className="flex gap-5 font-semibold mt-[20px]">
            {tag.map((value, index) => {
              return (
                <div key={index} className="bg-primary text-white text-xs py-1 px-5 rounded-md">
                  {value}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-3">
          <Image src={featuredImage} alt="" width={850} height={850} />
        </div>
      </div>
    </div>
  );
};

export default Excerpt;
