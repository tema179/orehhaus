
import { create } from 'zustand'

export const useStore = create((set, get) => ({
  user: null,
  setUser: () => set((state) => ({ user: state })),
}))