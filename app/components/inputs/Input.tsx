"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  useController,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";
import {
  AiOutlineDollar,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import { IconType } from "react-icons";

interface InputProps extends UseControllerProps {
  name: string;
  label?: string;
  Icon?: IconType;
  type?: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    name,
    label,
    rules,
    type,
    formatPrice,
    Icon,
    className,
    ...inputProps
  } = props;

  const formContext = useFormContext();

  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { isSubmitting },
  } = useController({ name, rules });

  const [passwordVisibility, changePasswordVisibility] =
    useState<boolean>(true);

  const togglePassword = () => {
    changePasswordVisibility((prevProps) => !prevProps);
  };

  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  const hasIcon =
    formatPrice || type === "email" || type === "password" || Icon;

  return (
    <div className={twMerge("relative h-12 w-full", className)}>
      <span className="absolute inset-y-0 left-0 flex items-center">
        {Icon && <Icon className="ml-4 h-5 w-5 text-secondary-300" />}
        {formatPrice && (
          <AiOutlineDollar className="ml-4 h-5 w-5 text-secondary-300" />
        )}
        {type === "email" && (
          <AiOutlineMail className="ml-4 h-5 w-5 text-secondary-300" />
        )}
        {type === "password" && (
          <AiOutlineLock className="ml-4 h-5 w-5 text-secondary-300" />
        )}
      </span>
      <input
        name={name}
        disabled={isSubmitting}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value || ""}
        {...inputProps}
        type={!passwordVisibility ? "text" : type}
        className={`
          peer
          h-full
          w-full
          rounded-md
          border-2 
          bg-white
          py-4
          font-light
          outline-none
          transition
          placeholder:text-base
          placeholder:font-normal
          disabled:cursor-not-allowed
          disabled:opacity-70
          ${hasIcon ? "pl-10" : "pl-4"}
          ${error ? "border-rose-500" : "border-secondary-300"}
          ${error ? "focus:border-rose-500" : "focus:border-secondary-500"}
        `}
      />
      <span className="absolute inset-y-0 right-0 flex items-center">
        {type === "password" && passwordVisibility && (
          <AiOutlineEye
            onClick={togglePassword}
            className="mr-4 h-5 w-5 text-secondary-300"
          />
        )}
        {type === "password" && !passwordVisibility && (
          <AiOutlineEyeInvisible
            onClick={togglePassword}
            className="mr-4 h-5 w-5 text-secondary-300"
          />
        )}
      </span>
      <label
        className={`
          text-md 
          absolute
          top-5 
          z-10 
          origin-[0] 
          -translate-y-3 
          transform 
          duration-150 
          ${hasIcon ? "left-10" : "left-4"}
          peer-placeholder-shown:translate-y-0 
          peer-placeholder-shown:scale-100 
          peer-focus:-translate-y-4
          peer-focus:scale-75
          ${error ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
      <span>
        <small className="text-rose-500">{error?.message}</small>
      </span>
    </div>
  );
};

export default Input;
