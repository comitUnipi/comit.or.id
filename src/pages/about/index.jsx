import { aboutMe, visiMisi } from "@/helper/about/about";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div>
        {aboutMe.map((item) => (
          <div
            key={item.id}
            className="bg-primary text-white lg:p-[7rem] text-center p-5"
          >
            <h1 className="uppercase text-4xl font-bold">{item.judul}</h1>
            <p className="lg:mx-[7rem] mt-6 text-justify text-sm md:text-xl md:text-left">{item.desc}</p>
          </div>
        ))}
      </div>
      <div>
        {visiMisi.map((item, index) => (
          <div
            key={index}
            className="lg:flex lg:flex-col lg:items-center my-[5rem] lg:px-[15rem] px-5"
          >
            <h1 className="text-center text-4xl font-bold uppercase mb-5">
              {item.judul}
            </h1>
            <ul className="list-disc lg:mx-[10rem] mx-5">
              {item.desc.map((item, index) => (
                <li className="opacity-[80%] text-[18px]" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <Image src="/images/StrukturOrganisasi.png" alt="" width={900} height={900} className="mx-auto"/>
      </div>
    </div>
  );
};

export default About;
