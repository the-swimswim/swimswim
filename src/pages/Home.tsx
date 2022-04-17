import React from 'react';
import { useContext } from 'react';
import { Context } from '../components/audios/AudioController';
import AudioLayout from '../components/Layout';

const Home = () => {
  const { onClickBgmBtn } = useContext(Context);
  return (
    <AudioLayout>
      <div>
        <img src="imgs/00_완성예시이미지1.png" />
        <img
          onClick={onClickBgmBtn}
          src="imgs/02_심볼1.png"
          style={{ position: 'absolute', top: '20px', left: '400px' }}
        />
      </div>
    </AudioLayout>
  );
};

export default Home;
