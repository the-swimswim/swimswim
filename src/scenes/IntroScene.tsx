import React from 'react';
import useScene, { Block } from '../hooks/useScene';
import getScreenRatio from '../utils/getScreenRatio';

const ratio = getScreenRatio();

console.log(ratio);

const blocks: Block[] = [
  // 두루마리 올라옴
  {
    type: 'video',
    id: 'group_1/bg_1',
    src: '/intro_bg_1.mp4',
    muted: true,
    active: {
      'intro/group_1': false,
      'intro/group_2': true,
    },
  },

  // 씰 클릭
  {
    type: 'image',
    id: 'group_2/bg_2',
    src: '/intro_bg_2.png',
  },
  {
    type: 'selection',
    id: 'group_2/selection_1',
    src: '/intro_sealing.png',
    active: {
      'intro/group_2': false,
      'intro/group_3': true,
      'intro/group_4': true,
    },
    width: `${196 * ratio}px`,
    height: `${188 * ratio}px`,
  },

  // 씰 내려감 => 두루마리 펼쳐짐
  {
    type: 'video',
    id: 'group_3/bg_3',
    src: '/intro_bg_3.mp4',
  },

  // 좌우 화살표, 시작하기 버튼
  {
    type: 'selection',
    id: 'group_4/selection_2',
    src: '/intro_button_arrow.png',
    active: {
      'intro/group_3': false,
      'intro/group_4': false,
      'intro/group_5': false,
      'intro/group_6': true,
    },
    left: `${100 * ratio}px`,
    top: '50%',
    width: `${97 * ratio}px`,
    height: `${135 * ratio}px`,
  },
  {
    type: 'selection',
    id: 'group_4/selection_3',
    src: '/intro_button_arrow.png',
    active: {
      'intro/group_3': false,
      'intro/group_4': false,
      'intro/group_5': false,
      'intro/group_7': true,
    },
    left: `calc(100% - ${100 * ratio}px)`,
    top: '50%',
    width: `${97 * ratio}px`,
    height: `${135 * ratio}px`,
  },
  {
    type: 'selection',
    id: 'group_4/selection_4',
    src: '/intro_button_enter.png',
    active: {
      'intro': false,
      'scene1/group_1': true,
    },
    left: '50%',
    top: `calc(100% - ${100 * ratio}px)`,
    width: `${649 * ratio}px`,
    height: `${148 * ratio}px`,
  },

  // 화살표 클릭 후 돌아왔을 때
  { 
    type: 'video', 
    id: 'group_5/bg_4', 
    src: '/intro_bg_4.mp4' 
  },

  // 왼쪽 스크롤
  { 
    type: 'video', 
    id: 'group_6/bg_5', 
    src: '/intro_bg_5.mp4' 
  },
  {
    type: 'selection',
    id: 'group_6/selection_8',
    active: {
      'intro/group_4': true,
      'intro/group_5': true,
      'intro/group_6': false,
    },
    left: `${200 * ratio}px`,
    top: '50%',
    width: `${200 * ratio}px`,
    height: `${200 * ratio}px`,
  },

  // 오른쪽 스크롤
  { 
    type: 'video', 
    id: 'group_7/bg_6', 
    src: '/intro_bg_6.mp4' 
  },
  {
    type: 'selection',
    id: 'group_7/selection_9',
    active: {
      'intro/group_4': true,
      'intro/group_5': true,
      'intro/group_7': false,
    },
    left: `calc(100% - ${200 * ratio}px)`,
    top: '50%',
    width: `${200 * ratio}px`,
    height: `${200 * ratio}px`,
  },
];

const IntroScene: React.FC = () => {
  const { elements } = useScene('intro', blocks);

  return <>{elements}</>;
};

export default IntroScene;
