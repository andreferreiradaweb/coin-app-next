import { create } from "zustand";

interface ILoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleModal: () => void;
}

const useLoginModal = create<ILoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useLoginModal;
