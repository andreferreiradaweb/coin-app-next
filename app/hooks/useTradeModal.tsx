import { create } from "zustand";

interface ITradeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleModal: () => void;
}

const useTradeModal = create<ITradeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useTradeModal;
