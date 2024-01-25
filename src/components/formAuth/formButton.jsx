import { Button } from "@/components/ui/button";

const FormButton = ({title}) => {
  return (
    <div className="-mr-32">
      <Button className="mt-2 w-[73%] md:w-[83%] lg:w-[77%]">{title}</Button>
    </div>
  );
};

export default FormButton;