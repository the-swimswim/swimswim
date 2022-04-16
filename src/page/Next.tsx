import React, { useContext, useRef } from 'react';
import { Context } from '../components/audio/AudioController';
import AudioLayout from '../components/Layout';



const Next = () => {
  const { eventSound,setEvent,event} = useContext(Context);
  const childRef = useRef(null);
  const childRef2 = useRef(null);

  const onClickMountin = () => {
    setEvent(!event);
    eventSound(childRef);
  }
  return (
    <AudioLayout>
      <h1>Next</h1>
      <p onClick={() => onClickMountin()}>
        누르면 산소리
        <audio src="bgm/산뷰소리.mp3" ref={childRef}></audio>
      </p>
      <p onClick={() => eventSound(childRef2)}>
        누르면 계곡소리
        <audio src="bgm/계곡소리2(은은함).mp3" ref={childRef2}></audio>
      </p>
    </AudioLayout>
  );
};

export default Next;
