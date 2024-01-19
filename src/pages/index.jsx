import Divisi from "@/components/beranda/divisi/Divisi";
import Mentor from "@/components/beranda/mentor/Mentor";

const Home = () => {
  return (
    <div>
      <Divisi />
      <Mentor />
      <div className="bg-primary h-[15px] md:h-[20px] mb-5 mt-5" />
    </div>
  );
};

export default Home;
