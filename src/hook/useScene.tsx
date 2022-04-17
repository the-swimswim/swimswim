import { useEffect, useState, useMemo } from "react";
import NormalVideo from '../component/block/NormalVideo';
import LoopVideo from '../component/block/LoopVideo';
import Selection from '../component/block/Selection';
import NextScene from "../component/block/NextScene";
import Image from "../component/block/Image";

interface Block {
  type: string;
  id: number;
  src?: string;
  autoNext?: string;
  onNextScene?: () => void;
  goto?: number;
  left?: string;
  top?: string;
  width?: string;
  height?: string;
}

interface SceneElement {
  elements: (JSX.Element | null)[],
}

function useScene(key: string, sequence: Block[], onNextScene?: Function): SceneElement {
  const [current, setCurrent] = useState<number>(0);

  function handleNext() {
    setCurrent(prev => prev + 1);
  }

  function handleMove(value: number) {
    setCurrent(value);
  }

  const elements = useMemo(() => {
    return sequence.map((block, i) => {
      if (block.type === "image") {
        return (
          <Image 
            key={`${key}-${i}`}
            src={block.src || ''}
            playing={current === block.id}
          />
        )
      } else if (block.type === "video") {
        return (
          <NormalVideo
            key={`${key}-${i}`}
            url={[{ src: block.src || "", type: "video/webm" }]}
            playing={current === block.id}
            onEnded={handleNext}
          />
        );
      } else if (block.type === "loop") {
        return (
          <LoopVideo
            key={`${key}-${i}`}
            url={[{ src: block.src || "", type: "video/webm" }]}
            playing={current === block.id}
          />
        );
      } else if (block.type === "selection") {
        return (
          <Selection
            key={`${key}-${i}`}
            src={block.src || ""}
            left={block.left}
            top={block.top}
            playing={current === block.id}
            onEnded={handleNext}
            // FIX ME
            onSelect={() => { handleMove(block.goto || 0) }}
          />
        )
      } else if (block.type === "nextScene") {
        return (
          <NextScene
            key={`${key}-${i}`}
            playing={current === block.id}
            onNextScene={onNextScene}
          />
        )
      }

      return null;
    });
  }, [sequence, current]);

  return { elements };
}

export default useScene;
export type { Block };
