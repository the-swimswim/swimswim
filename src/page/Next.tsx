import React, { useContext, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Context } from '../components/audio/AudioController';
import AudioLayout from '../components/Layout';



const Next = () => {
  const { viewSound} = useContext(Context);
  const [selectRef, setSelectRef] = useState<any>() //현재 실행되는 노래를 담고있는 상태
  const childRef = useRef(null);
  const childRef2 = useRef(null);
  return (
    <AudioLayout>
      <h1>Next</h1>
      <p
        onClick={() => {
          viewSound(childRef);
          setSelectRef(childRef);
        }}
      >
        누르면 산소리
        <img
          src="imgs/05_계곡커튼.png"
          style={{ width: '50px', height: '50px' }}
        />
        <audio src="bgm/산뷰소리.mp3" ref={childRef}></audio>
      </p>
      <p
        onClick={() => {
          viewSound(childRef2);
          setSelectRef(childRef2);
        }}
      >
        누르면 계곡소리
        <img
          src="imgs/05_커튼_산.png"
          style={{ width: '50px', height: '50px' }}
        />
        <audio src="bgm/계곡소리2(은은함).mp3" ref={childRef2}></audio>
      </p>
      <div onClick={() => {
        viewSound(selectRef, 'Stop'); //현재 실행되는 음악을 끈다.
      }}>
        뒤로가기(누르면원래 다시 커튼3개 선택)
      </div>
    </AudioLayout>
  );
};

export default Next;
