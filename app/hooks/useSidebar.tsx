import { create } from "zustand";

interface ISidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleSidebar: () => void;
}

const useSidebar = create<ISidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebar;
