import { Link, useParams } from "react-router-dom";
import { Scene1, Scene2, SceneNotFound } from './../scene';
import { ReactElement, useEffect } from 'react';
import useStore from './../hook/useStore';

// index: url이름, value: 컴포넌트
interface SceneInfo {
  [index: string]: React.FC;
}

const scene:SceneInfo = {
  1: Scene1,
  2: Scene2,
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
      <Link to="/test">Back</Link>
      {getScene(id)({})}
    </>
  )
}

export default TestContainerPage;
