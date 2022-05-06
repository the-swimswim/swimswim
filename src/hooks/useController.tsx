/**
 * Zustand Store hook
 * https://github.com/pmndrs/zustand
 */

import create from 'zustand';
 
interface Controller {
  blocks: { [key: string]: boolean };
  update: (key: string, value: boolean) => void;
  reset: () => void;
}

const useController = create<Controller>(set => ({
  blocks: {},
  update: (key, value) => set(state => ({ ...state, blocks: { ...state.blocks, [key]: value }})),
  reset: () => set(state => ({ 
    blocks: {},
    update: state.update, 
    reset: state.reset,
  }), true),
}));

export default useController;
