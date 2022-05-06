import { useRef, useEffect } from 'react';
import useController from '../../hooks/useController';

interface LoopVideoProp {
  blockId: string;
  url: { src: string; type: string }[];
  muted?: boolean;
}

/**
 * 반복되는 영상을 위한 블록
 * @param blockId string 블록 구분자
 * @param url { src: string, type: string }[] 영상 URL.
 * @param muted boolean 실행중인가
 * @returns React.FunctionComponent
 */
const LoopVideo: React.FC<LoopVideoProp> = ({ blockId, url, muted = false }) => {
  const playing = useController((state) => state.blocks[blockId]) || false;
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      const video = ref.current;

      if (playing) {
        // reset play
        video.pause();
        video.currentTime = 0;
        video.play();
      }
    }
  }, [playing]);

  return (
    <video
      style={{ display: playing ? 'block' : 'none', width: '100%', height: '100%' }}
      muted={muted}
      autoPlay
      ref={ref}
    >
      {url.map((data, i) => (
        <source key={`normal-video-${i}`} src={data.src} type={data.type} />
      ))}
    </video>
  );
};

export default LoopVideo;
