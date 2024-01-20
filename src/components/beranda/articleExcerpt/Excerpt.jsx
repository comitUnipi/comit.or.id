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
        className={`md:flex md:gap-[10rem] md:my-[5rem] ${flexDecoration} md:border-none flex flex-col-reverse my-[3rem] border border-[#646464] rounded-[10px] p-2`}
      >
        <div>
          <h3 className="text-[#646464] text-[12px] font-medium">
            {createdAt}
          </h3>
          <h2 className="text-[20px] my-3">{title}</h2>
          <p className="text-[12px]">{excerpt}</p>
          <div className="flex gap-5 text-[12px] font-semibold mt-[20px]">
            {tag.map((value, index) => {
              return (
                <div key={index} className="bg-[#80c5ff] px-5 rounded-[10px]">
                  {value}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Image src={featuredImage} alt="" width={850} height={850} />
        </div>
      </div>
    </div>
  );
};

export default Excerpt;
