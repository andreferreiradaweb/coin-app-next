"use client";

import Button from "./Button";
import useRegisterModal from "@hooks/useRegisterModal";

interface SignUpProps {
  className?: string;
  icon?: "BsArrowRightShort" | "BsPlus";
  label?: string;
}

const SignUpButton: React.FC<SignUpProps> = (props) => {
  const { className, icon, label } = props;
  const registerModal = useRegisterModal();

  return (
    <Button
      title={label || "Sign up"}
      icon={icon}
      className={className}
      onClick={registerModal.onOpen}
    />
  );
};

export default SignUpButton;
