import ButtonReusable from "@/lib/button/Button";

const NavbarButton = () => {
  return (
    <>
      <div className="hidden md:flex tems-center gap-4">
        <ButtonReusable
          path="auth/login"
          title="Masuk"
          className="px-6"
          size="sm"
        />
        <ButtonReusable
          path="auth/register"
          title="Daftar"
          className="px-6"
          size="sm"
          variant="outline"
        />
      </div>
    </>
  );
};

export default NavbarButton;
