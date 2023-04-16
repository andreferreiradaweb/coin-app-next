"use client";

import { twMerge } from "tailwind-merge";
import Button from "./Button";
import useLoginModal from "@hooks/useLoginModal";

interface SignInButtonProps {
  className?: string;
}

const SignInButton: React.FC<SignInButtonProps> = (props) => {
  const { className } = props;
  const loginModal = useLoginModal();

  return (
    <Button
      title="Sign in"
      className={twMerge("ghost", className)}
      onClick={loginModal.onOpen}
    />
  );
};

export default SignInButton;
