"use client";

import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";

interface IDisclosureProps {
  children: JSX.Element;
  className?: string;
  bodyContent?: JSX.Element;
}

const ContentDisclosure: React.FC<IDisclosureProps> = ({
  children,
  className,
  bodyContent,
}) => {
  return (
    <Disclosure>
      <Disclosure.Button className={className} as="tr">
        {children}
      </Disclosure.Button>
      <Disclosure.Panel as="tr" className="w-full">
        {bodyContent}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default ContentDisclosure;
