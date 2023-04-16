"use client";

import Image from "next/image";
import { CgMenuRound } from "react-icons/cg";

import Logo from "./Logo";
import PopMenu from "./PopMenu";
import { HiChevronDown } from "react-icons/hi";
import { TbDoorExit } from "react-icons/tb";
import useSidebar from "@hooks/useSidebar";

import avatar from "../../../public/images/avatar.webp";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const sidebar = useSidebar();

  return (
    <header className="relative z-[60] bg-white px-7 py-5 shadow-menu md:px-10">
      <div className="flex flex-row items-center justify-center">
        <div className="order-2 mx-auto lg:ml-0">
          <Logo />
        </div>

        <div
          className={twMerge(
            "order-1 block lg:hidden",
            sidebar.isOpen ? "lg:block" : ""
          )}
        >
          <CgMenuRound
            onClick={sidebar.toggleSidebar}
            className="h-7 w-7 cursor-pointer text-secondary-500 hover:text-secondary-600"
          />
        </div>

        <nav className="order-3">
          <PopMenu
            className="shadow-home block md:block lg:block"
            item={
              <div className="flex cursor-pointer flex-row items-center justify-center">
                <Image
                  className="h-8 w-8 rounded-full"
                  src={avatar}
                  alt="Rounded avatar"
                />
                <label className="ml-2 mr-1 hidden lg:block">Aulus</label>
                <HiChevronDown className="h-6 w-6 text-secondary-400" />
              </div>
            }
          >
            <div className="fixed right-5 z-10 cursor-pointer rounded-lg bg-white p-5 shadow-lg hover:bg-primary-100">
              <div className="flex justify-between gap-x-4 ">
                <TbDoorExit className="h-5 w-5" />
                <label className="cursor-pointer">Logout</label>
              </div>
            </div>
          </PopMenu>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
