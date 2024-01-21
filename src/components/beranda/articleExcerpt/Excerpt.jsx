import Image from "next/image";
import articleExcerpt from "@/helper/articleExcerpt/articleExcerpt";

const Excerpt = ({
  key,
  title,
  createdAt,
  tag,
  excerpt,
  featuredImage,
  rowStart,
}) => {
  return (
    <>
      <div
        key={key}
        className={`mt-10 grid grid-cols-12 gap-5`}
      >
        <div className="order-2 col-span-12 lg:col-span-9 lg:order-1">
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
        <div className={`order-1 col-span-12 py-2 lg:col-span-3 lg:order-2 ${rowStart}`}>
          <Image src={featuredImage} alt="" width={400} height={400}/>
        </div>
      </div>
    </>
  );
};

export default Excerpt;
