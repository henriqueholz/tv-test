import { create } from 'zustand';

export const useHeaderVisible = create((set) => {
  return {
    headerVisible: true,
    showHeader: () => set(() => ({ headerVisible: true })),
    hideHeader: () => set(() => ({ headerVisible: false })),
  };
});

export const useMenuPage = create((set) => {
  return {
    headerPage: 'HEADER_HOME',
    setMenuPage: () => set((page: string) => set(() => ({ menuPage: page }))),
    updateHeaderPage: (headerPage: string) =>
      set(() => ({ headerPage: headerPage })),
  };
});
