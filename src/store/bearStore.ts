import { create } from 'zustand';

interface BearState {
  bears: number;
  increasePopulation: (amount: number) => void;
  removeAllBears: () => void;
}

const _useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increasePopulation: (amount) => set((state) => ({ bears: state.bears + amount })),
  removeAllBears: () => set({ bears: 0 }),
}))
