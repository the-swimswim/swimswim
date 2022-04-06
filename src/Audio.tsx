import { useEffect, useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import { Howl, Howler } from 'howler';
import { link } from 'node:fs/promises';
function Audio() {
  const player = useRef<any>(null);
  const linkRef = useRef(null);
  const btnRef = useRef(null);
  const [pause, setPause] = useState(true);
  const onChangeAudio = () => { //audio handler
    console.log(player);
    setPause(!pause);
    !pause ? player.current.play() : player.current.pause();

    
  };
  var sound = new Howl({
    src: ['static/notification-4.wav'],
    volume: 1.0,
    autoplay: true,
    onend: () => {
      console.log('Finished!');
    },
  });
  useEffect(() => {
    console.log(btnRef);
    // btnRef.current?
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
      {pause && (
        <img src="imgs/사운드아이콘_brown.gif" onClick={onChangeAudio} ref={btnRef} />
      )}
      {!pause && (
        <img src="imgs/사운드아이콘_brown.png" onClick={onChangeAudio} ref={btnRef} />
      )}
      <audio  autoPlay loop ref={player}>
        <source src="bgm/TOMBOY.mp3"></source>
      </audio>
      {/* <button ref={btnRef}>hi</button> */}
      <a href="/" ref={linkRef}>
        T E S T
      </a>
    </div>
  );
}
export default Audio;
