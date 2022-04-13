import { ReactEventHandler, useState } from 'react';
import "./SwapVideo.css";

import useScene, { Block } from '../hook/useScene';

const sequence:Block[] = [
  {type: "video", src: "일반 영상.webm", autoNext: "yes"},
  {type: "loop", src: "반복 영상.webm", autoNext: "no"},
  {type: "video", src: "일반 영상.webm", autoNext: "end"},
];

function SwapVideo2({ onNextScene }: { onNextScene?: Function }) {
  const [elements, handleForceNext] = useScene(sequence, onNextScene);

  return (
    <>
      <button onClick={handleForceNext}>next</button>
      {elements}
    </>
  );
}

export default SwapVideo2;
