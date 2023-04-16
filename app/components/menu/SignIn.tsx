"use client";

import MenuItem from "./MenuItem";
import useLoginModal from "@hooks/useLoginModal";

const MenuItemSignIn = () => {
  const loginModal = useLoginModal();

  return <MenuItem href="#" onClick={loginModal.onOpen} label="Sign In" />;
};

export default MenuItemSignIn;
