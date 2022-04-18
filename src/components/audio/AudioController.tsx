import React, { useRef, useState,useReducer } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

export const Context = React.createContext<any>({});

const initialState = {
  isFrist: true,
  refData: null
}

const audioReducer = (state:any,action:any) => {
  switch (action?.type) {
    case '한번실행': //처음실행하면 무조건 켜진다.
      return {
        ...state,
        refData: action.payload,
      };
    case '두번이상': //두번째 소리가 들어오면 앞에소리 꺼진다.
      return {
        ...state,
        isFrist: false,
        refData: action.payload,
      };
    case '선택후문소리': //둘중 하나 선택하면 선택한것 켜지고 문소리 들린다.
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

  const [audioData, dispatch] = useReducer(audioReducer, initialState);

  const onOffSound = () => {
    console.log(audioData);
    audioData.refData?.current.play();
    //만약 처음 이미 노래가 들어와 있다면 멈춘다음 새로운 노래로 변경. 첫번째 호출과 두번째호출을 비교해야함
  }
  useEffect(() => {
    onOffSound();
  },[audioData])
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
    <Context.Provider value={{ isPlay, onClickBgmBtn, viewSound, dispatch }}>
      {props.children}
      <audio src="bgm/배경음악.mp3" loop ref={bgmRef}></audio>
    </Context.Provider>
  );
};

export default AudioContainer;
