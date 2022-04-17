import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './audios/AudioController';


const Menubar = () => {
  const { isPlay, onClickBgmBtn } = useContext(Context);
  const callBackClick = useCallback(() => {
    onClickBgmBtn();
  }, [isPlay]);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/next">Author</Link>
        </li>
        <div>
          {isPlay && (
            <img src="imgs/사운드아이콘_brown.gif" onClick={callBackClick} />
          )}
          {!isPlay && (
            <img src="imgs/사운드아이콘_brown.png" onClick={callBackClick} />
          )}
        </div>
      </ul>
    </div>
  );
};

export default Menubar;
