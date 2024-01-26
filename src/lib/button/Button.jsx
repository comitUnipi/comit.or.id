import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ButtonReusable = ({path, title, variant, className, size}) => {
    const router = useRouter()
    return (
        <Button onClick={() => router.push(path)} variant={variant} className={className} size={size}>
            {title}
        </Button>
    )
}

export default ButtonReusable;