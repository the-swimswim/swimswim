import React, { useRef, useState } from 'react';

export const Context = React.createContext<any>({});

const AudioContainer = (props: any) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef<any>(null);
  const onClickPlayBtn = () => {
    //bgm control
    setIsPlay(!isPlay);
    console.log(isPlay);
    !isPlay ? audioRef.current.play() : audioRef.current.pause();
  };
  const eventSound = (props?: any) => {
    //일회성 audio control
    console.log(props);
    props.current?.play();
  };

  return (
    <Context.Provider value={{ isPlay, onClickPlayBtn, eventSound }}>
      {props.children}
      <audio src="bgm/배경음악.mp3" autoPlay loop ref={audioRef}></audio>
    </Context.Provider>
  );
};

export default AudioContainer;
