import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../audio_store';

const Menubar = () => {
  const { isPlay, onClickPlayBtn } = useContext(Context);
  console.log(isPlay);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/author">Author</Link>
        </li>
        <div>
          {isPlay && (
            <img
              src="imgs/사운드아이콘_brown.gif"
              onClick={onClickPlayBtn}
            />
          )}
          {!isPlay && (
            <img
              src="imgs/사운드아이콘_brown.png"
              onClick={onClickPlayBtn}
            />
          )}
        </div>
      </ul>
    </div>
  );
};

export default Menubar;