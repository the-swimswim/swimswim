import { useEffect, useRef } from 'react';
import useController from '../../hooks/useController';

interface NormalVideoProp {
  url: { src: string; type: string }[];
  blockId: string;
  muted?: boolean;
  active?: { [key: string]: boolean };
}

/**
 * 일회성으로 실행되는 영상
 * @param url { src: string, type: string }[] 영상 URL.
 * @param blockId string 블록 구분자
 * @param muted boolean 음소거인가
 * @param active object 영상 종료후 상태 변경
 * @returns React.FunctionComponent
 */
const NormalVideo: React.FC<NormalVideoProp> = ({
  url,
  blockId,
  muted = false,
  active,
}) => {
  const playing = useController((state) => state.blocks[blockId]) || false;
  const update = useController((state) => state.update);
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
      onEnded={active ? () => update(active) : undefined}
      autoPlay
      ref={ref}
    >
      {url.map((data, i) => (
        <source key={`normal-video-${i}`} src={data.src} type={data.type} />
      ))}
    </video>
  );
};

export default NormalVideo;
