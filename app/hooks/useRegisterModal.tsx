import { create } from "zustand";

interface IRegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleModal: () => void;
}

const useRegisterModal = create<IRegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useRegisterModal;
