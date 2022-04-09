import { useState } from 'react';
import "./SwapVideo.css";

function SwapVideo() {
  const [swapped, setSwapped] = useState(false);

  function handleEnded() {
    setSwapped(true);
  }

  // 임시 함수
  function getClass(repeat: boolean) {
    let result = "swap-video ";

    if (repeat) {
      result += swapped ? "swap-video-visible" : "swap-video-invisible"
    } else {
      result += !swapped ? "swap-video-visible" : "swap-video-invisible"
    }

    return result;
  }
  
  return (
    <>
      <video className={getClass(false)} id="normal-video" autoPlay muted onEnded={handleEnded}>
        <source src="일반 영상.webm" type="video/webm" />
      </video>
      <video className={getClass(true)} id="repeat-video" autoPlay loop muted>
        <source src="반복 영상.webm" type="video/webm" />
      </video>
    </>
  );
}

export default SwapVideo;
