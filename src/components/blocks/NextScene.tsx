import { useEffect } from 'react';

interface NextSceneProp {
  playing: boolean;
  onNextScene: Function | undefined;
}

/**
 * 다음 씬으로 넘어가기 위한 블록
 * @param playing boolean 실행중인가
 * @param onNextScene Function | undefined 다음 씬으로 넘어가는 콜백
 * @returns React.FunctionComponent
 */
const NextScene: React.FunctionComponent<NextSceneProp> = ({ playing, onNextScene }) => {
  useEffect(() => {
    if (playing) {
      onNextScene && onNextScene();
    }
  }, [playing]);

  return null;
};

export default NextScene;
