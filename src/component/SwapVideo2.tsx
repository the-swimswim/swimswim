import { ReactEventHandler, useState } from 'react';
import "./SwapVideo.css";

interface Block {
  type: string;
  src?: string;
  autoNext?: string;
}

const sequence = [
  {type: "video", src: "일반 영상.webm", autoNext: "yes"},
  {type: "loop", src: "반복 영상.webm", autoNext: "no"},
  {type: "video", src: "일반 영상.webm", autoNext: "end"},
];

function SwapVideo2({ onNextScene }: { onNextScene?: ReactEventHandler }) {
  const [current, setCurrent] = useState<number>(0);

  function handleEnded() {
    setCurrent(prev => prev + 1);
  }

  // 임시 함수
  function getClass(index: string) {
    let result = `swap-video `;

    if (index === current.toString()) {
      result += "swap-video-visible"
    } else {
      result += "swap-video-invisible"
    }

    return result;
  }

  function renderBySeq(sequence: Block[]) {
    let result = [];

    for(let i in sequence) {
      const block = sequence[i];
      let onEnded = undefined;

      if (block.autoNext === "yes") {
        onEnded = handleEnded;
      } else if (block.autoNext === "end") {
        onEnded = onNextScene || undefined;
      }

      if (block["type"] === "video") {
        if (block.src === null || block.src === undefined) {
          continue;
        }

        result.push(
          <video className={getClass(i)} id="normal-video" autoPlay muted onEnded={onEnded}>
            <source src={block.src} type="video/webm" />
          </video>
        )
      } else if (block.type === "loop") {
        if (block.src === null || block.src === undefined) {
          continue;
        }

        result.push(
          <video className={getClass(i)} id="normal-video" autoPlay muted loop>
            <source src={block.src} type="video/webm" />
          </video>
        )
      }
    }

    return result
  }

  function handleForceNext() {
    setCurrent(prev => prev + 1);
  }
  
  return (
    <>
      <button onClick={handleForceNext}>next</button>
      {renderBySeq(sequence)}
    </>
  );
}

export default SwapVideo2;
