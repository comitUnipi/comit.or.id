import DivisiCard from "./DivisiCard";

const Divisi = () => {
  return (
    <section className="text-center mt-5 mx-20">
      <h3 className="text-4xl font-bold">
        Pelatihan di <span className="text-primary">Comit</span>
      </h3>
      <p className="text-gray-600 leading-4 mt-3">
        Pelatihan di comit ada 3 divisi Desain <br /> Grafis, Programming, Comp
        & <br />
        Network
      </p>

      <DivisiCard />
    </section>
  );
};

export default Divisi;
