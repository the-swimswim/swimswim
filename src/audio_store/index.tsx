import React, { useEffect, useRef, useState } from 'react';

export const Context = React.createContext<any>({});

const Container = (props:any) => {
  const [isPlay, setIsPlay] = useState(true);
  const audioRef = useRef<any>(null)
  const onClickPlayBtn = () => { //bgm control
    setIsPlay(!isPlay);
    !isPlay ? audioRef.current.play() : audioRef.current.pause();
  }
  const eventSound = (props?:any) => { //일회성 audio control
    console.log(props);
    props.current?.play();
  }

  return (
    <Context.Provider value={{ isPlay, onClickPlayBtn ,eventSound}}>
      {props.children}
      <audio
        src="bgm/TOMBOY.mp3"
        autoPlay
        loop
        ref={audioRef}
      ></audio>
    </Context.Provider>
  );
};

export default Container;
