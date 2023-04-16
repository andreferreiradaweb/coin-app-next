"use client";

import { twMerge } from "tailwind-merge";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

import { Icons } from "@components/Card";
import type { IconTypes } from "@components/Card";
import useSidebar from "@hooks/useSidebar";

interface ItemProps {
  iconType: IconTypes;
  title: string;
}

const items: ItemProps[] = [
  {
    iconType: "wallet",
    title: "Lorem Ipsum",
  },
  {
    iconType: "solutions",
    title: "Lorem Ipsum",
  },
  {
    iconType: "btc",
    title: "Lorem Ipsum",
  },
  {
    iconType: "graph",
    title: "Lorem Ipsum",
  },
];

const Sidebar = () => {
  const sidebar = useSidebar();

  return (
    <div
      className={twMerge(
        "group absolute z-50 h-full min-h-screen shadow-menu lg:relative lg:flex",
        !sidebar.isOpen && "hidden"
      )}
    >
      {sidebar.isOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden"
          aria-hidden="true"
        />
      )}

      <div
        className={twMerge(
          "absolute inset-y-0 left-0 w-0 -translate-x-full space-y-6 border-y-2 border-y-secondary-300 bg-white text-primary-500 transition duration-200 ease-in-out lg:relative lg:w-20 lg:translate-x-0",
          sidebar.isOpen && "absolute w-64 translate-x-0"
        )}
      >
        <nav className="flex flex-col py-5">
          {items.map((i, index) => {
            const Icon = Icons[i.iconType];

            return (
              <div key={i.iconType}>
                <Tooltip
                  place="right"
                  className="bg-primary-500 shadow-lg"
                  id={`my-tooltip-${index}`}
                >
                  <div className="px-4 py-2">Lorem Ipsum</div>
                </Tooltip>
                <a
                  href="#"
                  data-tooltip-id={`my-tooltip-${index}`}
                  className={twMerge(
                    "my-3 flex flex-row items-center justify-center rounded py-2.5 text-gray transition duration-200 hover:bg-primary-100",
                    sidebar.isOpen && "mx-3 justify-start px-4"
                  )}
                >
                  <div className="h-8 w-8">
                    <Icon height={34} width={34} />
                  </div>
                  <span
                    className={twMerge(
                      "hidden",
                      sidebar.isOpen && "mx-3 block px-4 lg:hidden"
                    )}
                  >
                    {i.title}
                  </span>
                </a>
              </div>
            );
          })}

          <a
            href="#"
            className={twMerge(
              "my-5 mt-20 hidden flex-row items-center rounded py-2.5 text-gray transition duration-200 hover:bg-primary-100",
              sidebar.isOpen && "mx-3 block px-4"
            )}
            onClick={sidebar.onClose}
          >
            <div className="">
              <BsArrowLeftCircle className="h-8 w-8 text-primary-500" />
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
