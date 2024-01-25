import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormInput = ({label, type, placeholder}) => {
  return (
    <div className="py-3 -mr-32">
      <Label className="text-lg font-semibold">{label}</Label>
      <Input
        type={type}
        className="mt-2 w-[73%] md:w-[83%] lg:w-[77%]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput
