import { create } from 'zustand';

export const useHeaderVisible = create((set) => {
  return {
    headerVisible: true,
    showHeader: () => set(() => ({ headerVisible: true })),
    hideHeader: () => set(() => ({ headerVisible: false })),
  };
});
