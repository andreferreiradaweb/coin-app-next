import { CgMenuRound } from "react-icons/cg";

import Container from "@components/Container";
import SignInButton from "@components/buttons/SignInButton";
import SignUpButton from "@components/buttons/SignUpButton";

import Logo from "./Logo";
import MenuItem from "@components/menu/MenuItem";
import MenuItemSignIn from "@components/menu/SignIn";
import MenuItemSignUp from "@components/menu/SignUp";
import PopMenu from "./PopMenu";
import CoinCarrousel from "./CoinCarrousel";

const Navbar = () => {
  return (
    <header className="shadow-menu lg:shadow-none">
      <nav>
        <Container>
          <div className="my-5 flex items-center justify-between lg:mb-6 lg:mt-5">
            <Logo />
            <div className="z-10 flex md:order-3">
              <div className="hidden md:block">
                <SignInButton />
              </div>
              <div className="ml-6 hidden md:block">
                <SignUpButton />
              </div>
            </div>

            <PopMenu
              item={
                <CgMenuRound className="h-7 w-7 text-secondary-500 hover:text-secondary-600" />
              }
            >
              <div className="fixed right-4 z-10 grid grid-cols-1 space-y-2 rounded-md bg-white p-5 shadow-md">
                <MenuItemSignIn />
                <MenuItemSignUp />

                <MenuItem label="About Us" href="#about-us" />
                <MenuItem label="Top Cryptos" href="#top-cryptos" />
              </div>
            </PopMenu>

            <div className="mr-auto hidden items-center justify-between md:order-1 md:block">
              <ul className="flex">
                <li className="ml-10">
                  <MenuItem label="About Us" href="#about-us" />
                </li>
                <li className="ml-10">
                  <MenuItem label="Top Cryptos" href="#top-cryptos" />
                </li>
              </ul>
            </div>

            <div className="ml-auto mr-10 hidden w-72 overflow-hidden md:order-2 lg:block xl:mr-20 xl:w-96">
              <CoinCarrousel />
            </div>
          </div>
        </Container>
      </nav>

      <div className="flex items-center justify-center border-t-2 border-secondary-200 py-2 lg:hidden">
        <Container>
          <div className="mx-auto overflow-hidden sm:w-96">
            <CoinCarrousel />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
