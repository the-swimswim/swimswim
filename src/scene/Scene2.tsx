import React, { ReactElement } from 'react';
import useScene, { Block } from '../hook/useScene';
import "../component/SwapVideo.css";

interface SceneProps {
    onNextScene?: Function;
}

const sequence: Block[] = [
    { type: "video", src: "일반 영상.webm", autoNext: "yes" },
    { type: "loop", src: "반복 영상.webm", autoNext: "no" },
    { type: "video", src: "일반 영상.webm", autoNext: "end" },
];

const Scene2:React.FC<SceneProps> = (prop: SceneProps) => {
    const { onNextScene } = prop;
    const [elements, handleForceNext] = useScene(sequence, onNextScene);

    return (
        <>
            <button onClick={handleForceNext}>next</button>
            {elements}
        </>
    );
}

export default Scene2;
