import React, { useEffect, useRef, useState } from 'react';

export const Context = React.createContext<any>({});

const Container = (props:any) => {
  const [isPlay, setIsPlay] = useState(true);
  const audioRef = useRef<any>(null)
  console.log(isPlay);
  
  const onClickPlayBtn = () => {
    
    setIsPlay(!isPlay);
    console.log(isPlay);
    !isPlay ? audioRef.current.play() : audioRef.current.pause();
  }
  return (
    <Context.Provider value={{ isPlay, onClickPlayBtn }}>
      {props.children}
      <audio
        src="bgm/TOMBOY.mp3"
        autoPlay={true}
        ref={audioRef}
      ></audio>
    </Context.Provider>
  );
};

export default Container;
