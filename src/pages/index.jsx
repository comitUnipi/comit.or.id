import Divisi from "@/components/beranda/divisi/Divisi";
import Mentor from "@/components/beranda/mentor/Mentor";
import Pendahuluan from "@/components/beranda/Pendahuluan";
import TentangKami from "@/components/beranda/TentangKami";

const Home = () => {
  return (
    <>
      <section>
        <Pendahuluan />
        <TentangKami />
      </section>
      <section>
        <Divisi />
        <Mentor />
      </section>
    </>
  );
};

export default Home;
