/**
 * Zustand Store hook
 * https://github.com/pmndrs/zustand
 */

import create from 'zustand';

type StoreKeys = 'temp1' | 'temp2';

interface Store {
  temp1?: boolean;
  temp2?: boolean;
  updateStore: (key: StoreKeys, value: boolean) => void;
  resetStore: () => void;
}

const useStore = create<Store>(set => ({
  updateStore: (key, value) => set(state => ({ ...state, [key]: value })),
  resetStore: () => set(state => ({ 
    updateStore: state.updateStore, 
    resetStore: state.resetStore 
  }), true),
}));

export default useStore;
