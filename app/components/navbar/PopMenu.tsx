"use client";

import { twMerge } from "tailwind-merge";
import { Popover } from "@headlessui/react";

interface PopMenuProps {
  children: JSX.Element;
  item: JSX.Element;
  className?: string;
  position?: string;
}

const PopMenu: React.FC<PopMenuProps> = (props) => {
  const { children, item, className, position } = props;

  return (
    <Popover className={twMerge("group relative md:hidden", className)}>
      <Popover.Button
        className="focus:outline-none"
        aria-label="navbar navigation"
      >
        {item}
      </Popover.Button>
      <Popover.Panel className="relative">
        <>
          <span className="absolute left-1/2 -translate-x-1/2 border-[6px] border-t-0 border-b-neutral-900 border-l-transparent border-r-transparent group-active:inline-block" />
          {children}
        </>
      </Popover.Panel>
    </Popover>
  );
};

export default PopMenu;
