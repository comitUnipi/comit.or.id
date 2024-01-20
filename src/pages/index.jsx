import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="text-4xl font-extrabold py-5 text-center">
          CEK REPOSITORY HERE
        </h1>
        <div className="flex justify-center">
          <Button>
            <Link href="https://github.com/comitUnipi">Click Here</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
