import React, { useContext, useRef } from 'react';
import { Context } from '../audio_store';
import Layout from '../components/layout';

const Author = () => {
  const {eventSound} = useContext(Context);
  const bookRef =useRef(null);
  return (
    <Layout>
      <h1>Author</h1>
      <p onClick={() => eventSound(bookRef)}>
        누르면 책장사운드
        <audio src="bgm/책장넘기기.mp3" ref={bookRef}></audio>
        </p>
    </Layout>
  );
};

export default Author;
