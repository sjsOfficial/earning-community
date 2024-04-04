import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/admin">
      <div className="flex items-center gap-4 m-3">
        <Image src="/logo.svg" alt="logo" height={60} width={60} priority />
        <p className="font-semibold text-[15px]">Earning Community</p>
      </div>
    </LinkStyled>
  );
};

export default Logo;
