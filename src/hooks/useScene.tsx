import { useEffect, useMemo, CSSProperties } from "react";
import NormalVideo from '../components/blocks/NormalVideo';
import LoopVideo from '../components/blocks/LoopVideo';
import Selection from '../components/blocks/Selection';
import Image from "../components/blocks/Image";
import useController from "./useController";

interface Block {
  type: string;
  id: string;
  src?: string;
  autoNext?: string;
  onNextScene?: () => void;
  left?: string;
  top?: string;
  width?: string;
  height?: string;
  onEnded?: () => void;
  active?: { [key: string]: boolean };
  transform?: string;
  muted?: boolean;
}

interface SceneElement {
  elements: (JSX.Element | null)[];
}

function useScene(sceneId: string, blocks: Block[]): SceneElement {
  const update = useController((state) => state.update);

  useEffect(() => {
    const newState: { [key: string ]: boolean } = {};

    blocks.forEach(block => {
      const blockId = `${sceneId}/${block.id}`;

      newState[blockId] = false;
    });

    update(newState);
  }, []);

  const elements = useMemo(() => {
    return blocks.map((block, i) => {
      const blockId = `${sceneId}/${block.id}`;
      const active = block.active;

      if (block.type === "image") {
        return (
          <Image
            blockId={blockId}
            key={`${sceneId}-${i}`}
            src={block.src || ''}
            transform={block.transform}
          />
        );
      } else if (block.type === "video") {
        const muted = block.muted !== undefined ? block.muted : false;

        return (
          <NormalVideo
            blockId={blockId}
            key={`${sceneId}-${i}`}
            url={[{ src: block.src || "", type: "video/mp4" }]}
            muted={muted}
            active={active}
          />
        );
      } else if (block.type === "loop") {
        const muted = block.muted !== undefined ? block.muted : false;

        return (
          <LoopVideo
            blockId={blockId}
            key={`${sceneId}-${i}`}
            url={[{ src: block.src || "", type: "video/webm" }]}
            muted={muted}
          />
        );
      } else if (block.type === "selection") {
        return (
          <Selection
            blockId={blockId}
            key={`${sceneId}-${i}`}
            src={block.src}
            left={block.left}
            top={block.top}
            width={block.width}
            height={block.height}
            active={active}
            transform={block.transform}
          />
        );
      }

      return null;
    });
  }, [blocks]);

  return { elements };
}

export default useScene;
export type { Block };
