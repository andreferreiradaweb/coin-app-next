"use client";

import { Dialog } from "@headlessui/react";
import { GrClose } from "react-icons/gr";

interface DialogProps {
  bodyContent: JSX.Element;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<DialogProps> = (props) => {
  const { bodyContent, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4 md:p-6 lg:p-8 xl:max-w-md">
          <>
            <GrClose className="ml-auto h-4 w-4" onClick={onClose} />
            {bodyContent}
          </>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
