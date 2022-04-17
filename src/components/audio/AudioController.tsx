import React, { useRef, useState,useReducer } from 'react';
import { useEffect } from 'react';

export const Context = React.createContext<any>({});

const audioReducer = (state:any,action:any) => {
  switch(action?.type) {
    case '하나씩실행': //두번째 소리가 들어오면 앞에소리 꺼진다.
      console.log(action);
      return action.payload;
    case '동시에실행': //동시에 두가지 이상의 소리가 실행될때.
      return action.payload; 
  }
}

const AudioContainer = (props: any) => {
  const [isPlay, setIsPlay] = useState(false);
  const bgmRef = useRef<any>(null);
  const onClickBgmBtn = () => { 
    //배경음악 컨트롤
    setIsPlay(!isPlay);
    console.log(isPlay);
    !isPlay ? bgmRef.current.play() : bgmRef.current.pause();
  };

  const [viewEvent,dispatch] = useReducer(audioReducer,false);

  const onOffSound = () => {
    
  }

  const viewSound = (props: any,stopArg?:any) => {
    //계속 실행되거나 및 껏다켜야하는 오디오 :일반적으로 풍경 sound가 있다 및 2분20초
    if (stopArg) {
      props.current.pause();
      props.current.currentTime = 0;
    } else {
      props.current.play();
    }
  };
  
  // 단순히 이벤트용 오디오 ->실행소리만 동작한다. : 일반적으로 선택 sound가 있다.
  const startEventSound = (props?:any) => {
    props.current?.play();
  }

  return (
    <Context.Provider value={{ isPlay, onClickBgmBtn, viewSound}}>
      {props.children}
      <audio src="bgm/배경음악.mp3" loop ref={bgmRef}></audio>
    </Context.Provider>
  );
};

export default AudioContainer;
