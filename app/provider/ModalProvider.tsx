"use client";

import LoginModal from "@components/dialogs/Login";
import RegisterModal from "@components/dialogs/Register";
import AddCrypto from "@components/dialogs/AddCrypto";
import Trade from "@components/dialogs/Trade";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <AddCrypto />
      <Trade />
    </>
  );
};

export default ModalsProvider;
