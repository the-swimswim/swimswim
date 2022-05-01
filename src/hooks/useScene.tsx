import { useEffect, useState, useMemo } from "react";
import NormalVideo from '../components/blocks/NormalVideo';
import LoopVideo from '../components/blocks/LoopVideo';
import Selection from '../components/blocks/Selection';
import NextScene from "../components/blocks/NextScene";
import Image from "../components/blocks/Image";

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
  onEnded?: () => void;
  muted?: boolean;
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
        );
      } else if (block.type === "video") {
        const goto = block.goto ?? null;
        const muted = block.muted !== undefined ? block.muted : false;

        return (
          <NormalVideo
            key={`${key}-${i}`}
            url={[{ src: block.src || "", type: "video/mp4" }]}
            muted={muted}
            playing={current === block.id}
            onEnded={goto ? () => handleMove(goto) : undefined}
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
        const goto = block.goto ?? block.id + 1;

        return (
          <Selection
            key={`${key}-${i}`}
            src={block.src}
            left={block.left}
            top={block.top}
            width={block.width}
            height={block.height}
            playing={current === block.id}
            onSelect={() => handleMove(goto)}
          />
        );
      } else if (block.type === "nextScene") {
        return (
          <NextScene
            key={`${key}-${i}`}
            playing={current === block.id}
            onNextScene={onNextScene}
          />
        );
      }

      return null;
    });
  }, [sequence, current]);

  return { elements };
}

export default useScene;
export type { Block };
