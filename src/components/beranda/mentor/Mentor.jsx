import MentorCard from "./MentorCard";

const Mentor = () => {
  return (
    <>
      <div className="text-center mt-20 lg:mx-20">
        <h3 className="text-4xl lg:text-[48px] font-bold">
          Mentor di <span className="text-primary">Comit</span>
        </h3>
        <p className="opacity-80 text-md lg:text-[20px] mt-3">
          Pelatihan di comit dilatih oleh para <br />
          mentor yang sudah ahli dibidangnya.
        </p>
        <MentorCard />
      </div>
      <div className="bg-primary h-[15px] md:h-[20px] mb-5 mt-5" />
    </>
  );
};

export default Mentor;
