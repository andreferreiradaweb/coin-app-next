"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      priority
      onClick={() => router.push("/")}
      className="cursor-pointer"
      src="/images/logo.svg"
      height="21"
      width="124"
      alt="Logo"
    />
  );
};

export default Logo;
