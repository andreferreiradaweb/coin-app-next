"use client";

import { twMerge } from "tailwind-merge";
import { useFormContext } from "react-hook-form";
import { BsArrowRightShort, BsPlus } from "react-icons/bs";

import Loader from "@components/Loader";

interface ButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
  icon?: "BsArrowRightShort" | "BsPlus";
  variant?: "primary" | "";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  iconLeft?: boolean;
  iconRight?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    title,
    className,
    onClick,
    disabled,
    icon,
    variant = "primary",
    type = "button",
    iconLeft = false,
    iconRight = false,
  } = props;

  // If a button is contained on a FORM we can show the loader
  const formContext = useFormContext();

  return (
    <button
      className={twMerge(
        variant,
        "bg-primary-500 px-7 hover:bg-primary-600",
        className
      )}
      title={title}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span>
        {icon === "BsPlus" && iconLeft && (
          <BsPlus className="mx-auto inline h-6 w-6" />
        )}
        {!formContext?.formState?.isSubmitting && title}
        {formContext?.formState?.isSubmitting && <Loader />}
        {icon === "BsArrowRightShort" && (
          <BsArrowRightShort className="mx-auto -mt-1 ml-2 inline h-6 w-6" />
        )}
        {icon === "BsPlus" && iconRight && (
          <BsPlus className="mx-auto ml-1 inline h-6 w-6" />
        )}
      </span>
    </button>
  );
};

export default Button;
