import { IntroScene, Scene1, Scene2 } from '../scenes';

const scenes = [
  IntroScene,
  Scene1,
  Scene2,
];

const Main = () => {
  return (
    <>
      {scenes}
    </>
  );
};

export default Main;
