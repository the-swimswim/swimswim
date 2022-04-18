import { useContext, useState } from 'react';
import { useRef } from 'react';
import { Context } from '../components/audio/AudioController';
import AudioLayout from '../components/Layout';

const Double = () => {
  const hotelRef = useRef(null);
  const swimRef = useRef(null);
  const [isFrist, setisFrist] = useState<any>(true);
  const { dispatch } = useContext(Context);
  return (
    <AudioLayout>
      {isFrist && (
        <div>
          <p
            onClick={() => {
              dispatch({ type: '한번실행', payload: hotelRef });
              setisFrist(false);
            }}
          >
            누르면 호텔정원 소리
            <audio src="bgm/호텔정원소리.mp4" ref={hotelRef}></audio>
          </p>

          <p
            onClick={() => {
              dispatch({ type: '한번실행', payload: swimRef });
              setisFrist(false);
            }}
          >
            누르면 수영장 소리
            <audio src="bgm/수영장1.mp3" ref={swimRef}></audio>
          </p>
        </div>
      )}
      {!isFrist && (
        <div>
          <p
            onClick={() => {
              dispatch({ type: '두번실행', payload: hotelRef });
            }}
          >
            누르면 호텔정원 소리
            <audio src="bgm/호텔정원소리.mp4" ref={hotelRef}></audio>
          </p>

          <p
            onClick={() => {
              dispatch({ type: '두번실행', payload: swimRef });
            }}
          >
            누르면 수영장 소리
            <audio src="bgm/수영장1.mp3" ref={swimRef}></audio>
          </p>
        </div>
      )}
    </AudioLayout>
  );
}

export default Double;