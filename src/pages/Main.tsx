import { useEffect } from 'react';
import useController from '../hooks/useController';
import { IntroScene, Scene1, Scene2 } from '../scenes';

const scenes = [
  IntroScene,
  Scene1,
  Scene2,
];

const Main = () => {
  const update = useController((state) => state.update);

  useEffect(() => {
    update({ 'intro/group_1/bg_1': true });
  }, []);

  return (
    <>
      {scenes.map((Scene, i) => <Scene key={`scene-${i}`} />)}
    </>
  );
};

export default Main;
