import { useEffect, useState } from "react";
import videojs from "video.js";
import useDynamicRefs from "./useDynamicRefs";

interface Block {
  type: string;
  src?: string;
  autoNext?: string;
}

function useScene(sequence: Block[], onNextScene?: Function) : [JSX.Element[], () => void] {
  const [current, setCurrent] = useState<number>(0);
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const refs = useDynamicRefs<HTMLVideoElement>(sequence.length);

  function handleEnded() {
    setCurrent(prev => prev + 1);
  }

  // FIX ME: 상태에 따라 클래스로 가시화 결정
  function getClass(index: string) {
    let result = `swap-video `;

    if (index === current.toString()) {
      result += "swap-video-visible"
    } else {
      result += "swap-video-invisible"
    }

    return result;
  }

  useEffect(() => {
    refs.current.forEach(ref => {
      ref.current?.load();
    })
  }, [sequence]);

  useEffect(() => {
    let result = [];

    for(let i in sequence) {
      const block = sequence[i];
      let onEnded: Function | null = null;

      // identify onEnded
      if (block.autoNext === "yes") {
        onEnded = handleEnded;
      } else if (block.autoNext === "end") {
        onEnded = onNextScene || null;
      }

      // add component to list
      if (block.type === "video") {
        if (block.src === null || block.src === undefined) {
          continue;
        }

        result.push(
          <video className={getClass(i)} key={`normal-video-${i}`} ref={refs.current[i]} autoPlay muted onEnded={() => onEnded && onEnded()}>
            <source src={block.src} type="video/webm" />
          </video>
        )
      } else if (block.type === "loop") {
        if (block.src === null || block.src === undefined) {
          continue;
        }

        result.push(
          <video className={getClass(i)} key={`normal-video-${i}`} ref={refs.current[i]} autoPlay muted loop>
            <source src={block.src} type="video/webm" />
          </video>
        )
      }
    }

    setElements(result);
  }, [sequence, onNextScene]);

  function handleForceNext() {
    setCurrent(prev => prev + 1);
  }

  return [elements, handleForceNext];
}

export default useScene;
export type { Block };
