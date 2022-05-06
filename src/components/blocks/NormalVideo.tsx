import { useEffect, useRef } from 'react';

interface NormalVideoProp {
  url: { src: string; type: string }[];
  playing: boolean;
  muted?: boolean;
  onEnded?: () => void;
}

/**
 * 일회성으로 실행되는 영상
 * @param url { src: string, type: string }[] 영상 URL.
 * @param playing boolean 실행중인가
 * @param onEnded Function 영상이 끝나면 실행되는 콜백
 * @returns React.FunctionComponent
 */
const NormalVideo: React.FunctionComponent<NormalVideoProp> = ({
  url,
  playing,
  muted = false,
  onEnded,
}) => {
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
      onEnded={onEnded}
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
