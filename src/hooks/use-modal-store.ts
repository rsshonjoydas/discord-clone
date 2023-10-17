/* eslint-disable no-unused-vars */
import { Server } from '@prisma/client';
import { create } from 'zustand';

export type ModalType = 'createServer' | 'invite' | 'editServer' | 'members';

interface ModalData {
  server?: Server;
}

interface ModalStore {
  type: ModalType | null; // Correct the type declaration
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void; // Correct the parameter type
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }), // Specify the parameter type
  onClose: () => set({ type: null, isOpen: false }),
}));
