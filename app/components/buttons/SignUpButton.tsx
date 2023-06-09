"use client";

import Button from "./Button";
import useRegisterModal from "@hooks/useRegisterModal";

interface ISignUpProps {
  className?: string;
  textClass?: string;
  icon?: "BsArrowRightShort" | "BsPlus";
  label?: string;
}

const SignUpButton: React.FC<ISignUpProps> = (props) => {
  const { className, textClass, icon, label } = props;
  const registerModal = useRegisterModal();

  return (
    <Button
      title={label || "Sign up"}
      icon={icon}
      className={className}
      textClass={textClass}
      onClick={registerModal.onOpen}
    />
  );
};

export default SignUpButton;
