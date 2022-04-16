import React, { useRef, useState } from 'react';

export const Context = React.createContext<any>({});

const AudioContainer = (props: any) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef<any>(null);
  const onClickBgmBtn = () => { 
    //bgm control
    setIsPlay(!isPlay);
    console.log(isPlay);
    !isPlay ? audioRef.current.play() : audioRef.current.pause();
  };

  const [event, setEvent] = useState(true);
  const eventSound = (props?: any,eventState?:any) => {
    //일회성 audio control
    console.log(props);
    event ? props.current?.play() : props.current?.pause();
  };

  return (
    <Context.Provider value={{ isPlay, onClickBgmBtn, eventSound,setEvent,event }}>
      {props.children}
      <audio src="bgm/배경음악.mp3" loop ref={audioRef}></audio>
    </Context.Provider>
  );
};

export default AudioContainer;
