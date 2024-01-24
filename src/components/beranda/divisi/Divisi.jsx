import DivisiCard from "./DivisiCard";

const Divisi = () => {
  return (
    <div className="text-center mt-10 lg:mx-20">
      <h3 className="text-4xl lg:text-[48px] font-semibold">
        Pelatihan di <span className="text-primary">Comit</span>
      </h3>
      <p className="opacity-80 text-sm lg:text-[20px] mt-6">
        Pelatihan di comit ada 3 divisi Desain Grafis, <br /> Programming, Comp
        & Network
      </p>
      <DivisiCard />
    </div>
  );
};

export default Divisi;
