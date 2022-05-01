import React, { useState, useEffect, useMemo } from 'react';
import useScene, { Block } from '../hooks/useScene';

enum BlockId {
    Video1 = 0,
    Selection,
    Video2,
    NextScene,
}

interface SceneProps {
    onNextScene?: Function;
}

const sequence: Block[] = [
    { type: "video", id: BlockId.Video1, src: "일반 영상.webm" },
    { type: "loop", id: BlockId.Selection, src: "반복 영상.webm" },
    { type: "selection", id: BlockId.Selection },
    { type: "video", id: BlockId.Video2, src: "일반 영상.webm" },
    { type: "nextScene", id: BlockId.NextScene },
];

const Scene1:React.FunctionComponent<SceneProps> = (prop: SceneProps) => {
    const { onNextScene } = prop;
    const { elements } = useScene('scene2', sequence, onNextScene);

    return (
        <>
            {elements}
        </>
    );
}

export default Scene1;
