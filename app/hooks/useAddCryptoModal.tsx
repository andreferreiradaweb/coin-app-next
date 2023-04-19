import { create } from "zustand";

interface IAddCryptoModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleModal: () => void;
}

const useAddCryptoModal = create<IAddCryptoModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useAddCryptoModal;
