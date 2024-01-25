import Link from "next/link";

const FormDesc = ({keterangan, linkForm, title}) => {
  return (
    <div className="flex justify-center my-4">
      <p>
        {keterangan}
        <Link className="text-primary font-bold" href={linkForm}>
          {title}
        </Link>
      </p>
    </div>
  );
};

export default FormDesc;
