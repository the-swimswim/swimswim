import { Link, useParams } from "react-router-dom";
import { IntroScene, Scene1, Scene2, Scene3, SceneNotFound } from '../scenes';
import { ReactElement, useEffect } from 'react';
import useStore from './../hooks/useStore';

// index: url이름, value: 컴포넌트
interface SceneInfo {
  [index: string]: React.FC;
}

const scene:SceneInfo = {
  "intro": IntroScene,
  1: Scene1,
  2: Scene2,
  3: Scene3,
};

function getScene(id: string | undefined) {
  if (id === undefined || scene[id] === undefined) {
    return SceneNotFound;
  }

  return scene[id];
}

function TestContainerPage() {
  let { id } = useParams();
  const resetStore = useStore(state => state.resetStore);

  useEffect(() => {
    return () => {
      console.log("Store reset");
      resetStore();
    };
  }, [resetStore]);

  return (
    <>
      <button style={{ position: "fixed", right: "50px", bottom: "50px" }}>
        <Link to="/test">Back</Link>
      </button>
      {getScene(id)({})}
    </>
  )
}

export default TestContainerPage;
