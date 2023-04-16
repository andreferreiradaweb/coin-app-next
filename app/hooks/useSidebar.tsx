import { create } from "zustand";

interface SidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggleSidebar: () => void;
}

const useSidebar = create<SidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebar;
