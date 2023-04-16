"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { TbChevronDown, TbChevronRight } from "react-icons/tb";

import {
  useController,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { Coin } from "@utils/getCoins";

export interface SelectProps extends UseControllerProps {
  name: string;
  placeholder?: string;
  data: any[];
  valueKey: string;
  labelKey: string;
  displayValue: (data: any) => string;
  children: (data: any, selected: boolean, active: boolean) => JSX.Element;
}

const Select: React.FC<SelectProps> = (props) => {
  const [query, setQuery] = useState("");

  const formContext = useFormContext();
  const {
    placeholder,
    name,
    data = [],
    valueKey,
    labelKey,
    children,
    displayValue,
    ...inputProps
  } = props;

  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { isSubmitting },
  } = useController({ name });

  if (!formContext || !name) {
    const msg = !formContext
      ? "Select must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  const filteredData =
    query === ""
      ? data
      : data.filter((data: any) => {
          if (data[labelKey]) {
            return data[labelKey]
              ?.toLowerCase?.()
              .includes(query.toLowerCase());
          }

          return "";
        });

  const hasIcon = false;

  return (
    <div className="w-full">
      <Combobox
        disabled={isSubmitting}
        value={field.value || ""}
        onChange={field.onChange}
      >
        <div className="relative mt-1">
          <div>
            <Combobox.Input
              placeholder={placeholder}
              className={`
                peer
                h-12
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
                ${
                  error ? "focus:border-rose-500" : "focus:border-secondary-500"
                }
              `}
              displayValue={displayValue}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex h-full items-center pr-2">
              <TbChevronDown
                className="h-8 w-8 text-secondary-300"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md border-2 border-secondary-200 bg-white text-base shadow-lg focus:outline-none sm:text-sm">
              {filteredData.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-secondary-500">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((data, index) => (
                  <Combobox.Option
                    key={data?.[valueKey]}
                    className={({ active, selected }) =>
                      `relative cursor-pointer select-none border-b border-secondary-200 py-4 pl-4 pr-4 last-of-type:border-b-0 ${
                        selected ? "bg-primary-100" : "text-gray"
                      }`
                    }
                    value={data}
                  >
                    {({ selected, active }) =>
                      children && children(data, selected, active)
                    }
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
        <span>
          <small className="text-rose-500">{error?.message}</small>
        </span>
      </Combobox>
    </div>
  );
};

export default Select;
