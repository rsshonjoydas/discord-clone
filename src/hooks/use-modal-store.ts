/* eslint-disable no-unused-vars */
import { create } from 'zustand';

export type ModalType = 'createServer';

interface ModalStore {
  type: ModalType | null; // Correct the type declaration
  isOpen: boolean;
  onOpen: (type: ModalType) => void; // Correct the parameter type
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }), // Specify the parameter type
  onClose: () => set({ type: null, isOpen: false }),
}));
