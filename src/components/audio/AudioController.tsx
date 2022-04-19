import React, { useRef, useState,useReducer } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

export const Context = React.createContext<any>({});


interface IActionType {
  firstCase: string;
  moreTwiceCase: string;
  selectCase: string;
}

interface IState {
  isFirst:boolean;
  refData:any;
}

interface IAction {
  type: string;
  payload: any;
  data?: boolean;
}

interface IAudioCurrent {
  play: () => void;
  pause: () => void;
  currentTime?: number;
}
interface IAudio {
  current: IAudioCurrent
}

const initialState: IState = {
  isFirst: true,
  refData: null,
};

export const ACTIONS_TYPE: IActionType = {
  firstCase: '한번실행',
  moreTwiceCase: '두번이상',
  selectCase: '선택후문소리',
};

const audioReducer = (state: IState, action: IAction) => {
  switch (action?.type) {
    case ACTIONS_TYPE.firstCase: //처음실행하면 무조건 켜진다.
      return {
        ...state,
        refData: action.payload,
      };
    case ACTIONS_TYPE.moreTwiceCase: //두번째 소리가 들어오면 앞에소리 꺼진다.
      return {
        ...state,
        isFirst: action.data,
        refData: action.payload,
      };
    case ACTIONS_TYPE.selectCase: //둘중 하나 선택하면 선택한것 켜지고 문소리 들린다.
      return action.payload; //TODO 0419
  }
};

const AudioContainer = (props: any) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isCurrent, setIsCurrent] = useState<any>();
  const bgmRef = useRef<any>(null);
  const onClickBgmBtn = () => { 
    //배경음악 컨트롤
    setIsPlay(!isPlay);
    console.log(isPlay);
    !isPlay ? bgmRef.current.play() : bgmRef.current.pause();
  };

  const [audioData, dispatch] = useReducer(audioReducer, initialState);

  const onOffSound = () => {
    //만약 처음 이미 노래가 들어와 있다면 멈춘다음 새로운 노래로 변경. 첫번째 호출과 두번째호출을 비교해야함
    setIsCurrent(audioData.refData);   
    if(audioData.isFirst) {
      audioData.refData?.current.play();
    } else {
      isCurrent?.current.pause();
      setTimeout(() => {
        audioData.refData?.current.play();
      },0)
    }
  }
  useEffect(() => {
    onOffSound();
  },[audioData])
  const viewSound = (audioData: IAudio, stopArg?: string) => {
    //계속 실행되거나 및 껏다켜야하는 오디오 :일반적으로 풍경 sound가 있다 및 2분20초
    if (stopArg) {
      audioData.current.pause();
      audioData.current.currentTime = 0;
    } else {
      audioData.current.play();
    }
  };
  
  // 단순히 이벤트용 오디오 ->실행소리만 동작한다. : 일반적으로 선택 sound가 있다.
  const startEventSound = (audioData: IAudio) => {
    audioData.current?.play();
  };

  return (
    <Context.Provider value={{ isPlay, onClickBgmBtn, viewSound, dispatch }}>
      {props.children}
      <audio src="bgm/배경음악.mp3" loop ref={bgmRef}></audio>
    </Context.Provider>
  );
};

export default AudioContainer;
