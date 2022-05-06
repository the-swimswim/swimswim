import React, { useState, useEffect, useMemo } from 'react';
import useScene, { Block } from '../hooks/useScene';

enum BlockId {
  Video1 = 0,
  Selection,
  Video2,
  NextScene,
}

const blocks: Block[] = [
  { type: 'video', id: 'video1', src: '일반 영상.webm' },
  { type: 'loop', id: 'loop1', src: '반복 영상.webm' },
  { type: 'selection', id: 'selection1' },
  { type: 'video', id: 'video2', src: '일반 영상.webm' },
];

const Scene2: React.FunctionComponent = () => {
  const { elements } = useScene('scene2', blocks);

  return <>{elements}</>;
};

export default Scene2;
