"use client";

import {
  useController,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";

import { CgCheck } from "react-icons/cg";

interface InputProps extends UseControllerProps {
  name: string;
  label?: string | JSX.Element;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
}

const Checkbox: React.FC<InputProps> = (props) => {
  const formContext = useFormContext();
  const { name, label, rules, type, formatPrice, ...inputProps } = props;

  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { isSubmitting },
  } = useController({ name, rules });

  if (!formContext || !name) {
    const msg = !formContext
      ? "Checkbox must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  return (
    <div className="relative h-12 w-full">
      <div>
        <label className="relative inline-flex cursor-pointer ">
          <input
            name={name}
            disabled={isSubmitting}
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value || false}
            checked={field.value || false}
            {...inputProps}
            type="checkbox"
            className="h-[16px] w-[20px] appearance-none rounded border-2 border-primary-500 text-primary-500 accent-primary-500 checked:bg-primary-500 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-70"
          />
          <CgCheck className="absolute -left-[2px] -top-[1px] hidden text-xl text-secondary-500 disabled:cursor-not-allowed disabled:opacity-70" />
          <span className="ml-4">{label}</span>
        </label>
      </div>
      <span>
        <small className="text-rose-500">{error?.message}</small>
      </span>
    </div>
  );
};

export default Checkbox;
