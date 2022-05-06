import { useRef, useEffect } from 'react';

interface LoopVideoProp {
  url: { src: string; type: string }[];
  muted?: boolean;
  playing: boolean;
}

/**
 * 반복되는 영상을 위한 블록
 * @param url { src: string, type: string }[] 영상 URL.
 * @param playing boolean 실행중인가
 * @returns React.FunctionComponent
 */
const LoopVideo: React.FunctionComponent<LoopVideoProp> = ({ url, muted = false, playing }) => {
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
