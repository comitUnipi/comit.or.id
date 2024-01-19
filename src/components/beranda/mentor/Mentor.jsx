import MentorCard from "./MentorCard";

const Mentor = () => {
  return (
    <section className="text-center mt-20 mx-20">
      <h3 className="text-4xl font-bold">
        Mentor di <span className="text-primary">Comit</span>
      </h3>
      <p className="text-gray-600 leading-4 mt-3">
        Pelatihan di comit dilatih oleh para <br />
        mentor yang sudah ahli dibidangnya
      </p>
      <MentorCard />
    </section>
  );
};

export default Mentor;
