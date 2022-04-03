import { useEffect, useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
function Audio() {
  const player = useRef<any>(null);
  const [pause,setPause] = useState(false);
  const onPause = () => {
    console.log(player.current);
    pause ? player.current?.onPause() : player.current?.onPlay();
    setPause(!pause);
  }
  //bgm은 껏다 킬 수 있음. onPause, onPlay할때, 각각 전역으로 사진교체
  return (
    <div>
      {/* 123
      <AudioPlayer
        autoPlay
        src="bgm/TOMBOY.mp3"
        onPlay={(e) => console.log('onPlay')}
      /> */}
      {!pause && <img src="imgs/사운드아이콘_brown.gif" onClick={onPause}/>}
      {pause && <img src="imgs/사운드아이콘_brown.png" onClick={onPause}/>}
      <ReactAudioPlayer
        src="bgm/TOMBOY.mp3"
        autoPlay
        controls
        loop
        volume={0.2}
        onPause={() => {
          setPause(true)
          console.log('멈춤');
        }}
        onPlay={() => {
          setPause(false);
          console.log('실행');
        }}
        ref={player}
      />
    </div>
  );
}
export default Audio;
