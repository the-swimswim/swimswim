import useStore from "../hook/useStore";import shallow from 'zustand/shallow'
import { useEffect } from "react";

function Scene1() {
  const { temp1, temp2, updateStore } = useStore(state => ({ 
    temp1: state.temp1, 
    temp2: state.temp2,
    updateStore: state.updateStore,
  }), shallow);

  useEffect(() => {
    setTimeout(() => {
      updateStore('temp1', true);
    }, 1000);

    setTimeout(() => {
      updateStore('temp2', true);
    }, 2000);

  }, [updateStore]);

  return (
    <>
      <p>temp1: {temp1 ? 'true' : 'false'}</p>
      <p>temp2: {temp2 ? 'true' : 'false'}</p>
      <div className={`scene1__temp1 ${temp1 && !temp2 ? 'scene1__temp1--before' : ''} ${temp2 ? 'scene1__temp1--after' : ''}`} />
    </>
  );
}

export default Scene1;
