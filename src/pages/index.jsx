import Divisi from "@/components/beranda/divisi/Divisi";
import Mentor from "@/components/beranda/mentor/Mentor";
import Pendahuluan from "@/components/beranda/Pendahuluan";
import TentangKami from "@/components/beranda/TentangKami";
import PhotoCarousel from "@/components/beranda/photoCarousel/PhotoCarousel";
import ArticleExcerpt from "@/components/beranda/articleExcerpt/ArticleExcerpt";

const Home = () => {
  return (
    <>
    <div className="my-24">
      <section>
        <Pendahuluan />
        <TentangKami />
      </section>
      <section>
        <Divisi />
        <Mentor />
      </section>
      <section>
        <PhotoCarousel />
        <ArticleExcerpt />
      </section>
    </div>
    </>
  );
};

export default Home;
