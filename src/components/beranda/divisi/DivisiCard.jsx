import { Card, CardHeader, CardContent } from "../../ui/card";
import getDivisi from "@/helper/Pelatihan/pelatihan";
import Image from "next/image";

const DivisiCard = () => {
  return (
    <div className="flex-cols gap-5 mt-10 w-4/5 mx-auto md:flex">
      {getDivisi.map((item, index) => {
        return (
          <Card key={index} className="flex-1 rounded-t-sm ">
            <CardHeader>
              <Image
                src={item.img}
                alt="image"
                width={200}
                height={100}
                className="mx-auto"
              />
            </CardHeader>
            <CardContent className="bg-blue-500 text-white rounded-b-sm flex justify-center">
              <p className="mt-5 text-md font-medium">{item.name}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DivisiCard;
