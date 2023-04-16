"use client";

import MenuItem from "./MenuItem";
import useRegisterModal from "@hooks/useRegisterModal";

const MenuItemSignUp = () => {
  const registerModal = useRegisterModal();

  return <MenuItem href="#" onClick={registerModal.onOpen} label="Sign Up" />;
};

export default MenuItemSignUp;
