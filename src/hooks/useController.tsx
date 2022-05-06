/**
 * Zustand Store hook
 * https://github.com/pmndrs/zustand
 */

import create from 'zustand';
 
interface Controller {
  blocks: { [key: string]: boolean };
  update: (active: { [key: string]: boolean }) => void;
  reset: () => void;
}

const useController = create<Controller>(set => ({
  blocks: {},
  update: (active) => set(state => {
    const newState = { ...state };

    for (let blockId in active) {
      const isActive = active[blockId];
      const split = blockId.split('/');

      if (split.length === 3) {
        newState.blocks[blockId] = isActive;
      } else {
        for (let key in newState.blocks) {
          if (key.startsWith(blockId)) {
            newState.blocks[key] = isActive;
          }
        }
      }
    }

    console.log(newState)

    return newState;
  }),
  reset: () => set(state => ({ 
    blocks: {},
    update: state.update, 
    reset: state.reset,
  }), true),
}));

export default useController;
