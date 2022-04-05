import { useEffect, useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
function Audio() {
  const player = useRef<any>(null);
  const [pause, setPause] = useState(true);
  const onChangeAudio = () => { //audio handler
    console.log(player);
    setPause(!pause);
    !pause ? player.current.play() : player.current.pause();

    
  };
  useEffect(() => {
    player.current.autoplay = true;
    // player.current;
    // asyncFunction();
    console.log('호출이 되엇나요?');
    console.log(player);
  },[])
  const asyncFunction =() => {
    let playPromise = player.current.play();
    if(playPromise !== undefined) {
      playPromise.then((e:any) => {
        console.log('여기안탐??');
        
        // playPromise();
      })
      .catch((e:any) => console.log(e))
    }
  }
  // player.current.volume = 0.2; volueControl
  //bgm은 껏다 킬 수 있음. onPause, onPlay할때, 각각 전역으로 사진교체
  return (
    <div>
      {pause && <img src="imgs/사운드아이콘_brown.gif" onClick={onChangeAudio} />}
      {!pause && <img src="imgs/사운드아이콘_brown.png" onClick={onChangeAudio} />}
      <audio src="bgm/TOMBOY.mp3" autoPlay loop ref={player}></audio>
    </div>
  );
}
export default Audio;
