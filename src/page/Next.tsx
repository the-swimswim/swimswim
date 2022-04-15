import React, { useContext, useRef } from 'react';
import { Context } from '../components/audio/AudioController';
import AudioLayout from '../components/Layout';



const Next = () => {
  const { eventSound } = useContext(Context);
  const bookRef = useRef(null);
  return (
    <AudioLayout>
      <h1>Next</h1>
      <p onClick={() => eventSound(bookRef)}>
        누르면 책장사운드
        <audio src="bgm/책장넘기기.mp3" ref={bookRef}></audio>
      </p>
    </AudioLayout>
  );
};

export default Next;
