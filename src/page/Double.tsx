import { useContext, useState } from 'react';
import { useRef } from 'react';
import { ACTIONS_TYPE, Context } from '../components/audio/AudioController';
import AudioLayout from '../components/Layout';
const Double = () => {
  const hotelRef = useRef(null);
  const swimRef = useRef(null);
  const [isFrist, setisFrist] = useState<boolean>(true); // 이미 클릭했는지 체크하는 상태
  const { dispatch } = useContext(Context);


  const firstClick = (ref:any) => {
    dispatch({ type: ACTIONS_TYPE.firstCase, payload: ref });
    setisFrist(false);
  }

  const secondClick = (ref:any) => {
    dispatch({ type: ACTIONS_TYPE.moreTwiceCase, payload: ref, data: false });
  }

  return (
    <AudioLayout>
        <div>
          <p
            onClick={() => {
              isFrist ? firstClick(hotelRef) : secondClick(hotelRef);
            }}
          >
            누르면 호텔정원 소리
            <audio src="bgm/호텔정원소리.mp4" ref={hotelRef}></audio>
          </p>

          <p
            onClick={() => {
              isFrist ? firstClick(swimRef) : secondClick(swimRef);
            }}
          >
            누르면 수영장 소리
            <audio src="bgm/수영장1.mp3" ref={swimRef}></audio>
          </p>
        </div>
    </AudioLayout>
  );
}

export default Double;