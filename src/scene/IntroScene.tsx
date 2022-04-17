import React, { useState, useEffect, useMemo } from 'react';
import useScene, { Block } from '../hook/useScene';

enum BlockId {
    Start = 0,
    Lobby,
    Left,
    NextScene,
}

interface SceneProps {
    onNextScene?: Function;
}

const sequence: Block[] = [
    { type: "image", id: BlockId.Start, src: "intro1.png" },
    { type: "selection", id: BlockId.Start, src: "intro2.png", goto: BlockId.Lobby },
    { type: "image", id: BlockId.Lobby, src: "lobby1.png" },
    { type: "selection", id: BlockId.Lobby, src: "lobby2.png", goto: BlockId.Left, left: "100px", top: "50%" },
    { type: "selection", id: BlockId.Lobby, src: "lobby3.png", goto: BlockId.Left, left: "calc(100% - 100px)", top: "50%" },
    { type: "image", id: BlockId.Left, src: "left1.png" },
    { type: "selection", id: BlockId.Left, src: "left2.png", goto: BlockId.Lobby, left: "100px", top: "50%" },
    { type: "nextScene", id: BlockId.NextScene },
];

const IntroScene:React.FunctionComponent<SceneProps> = (prop: SceneProps) => {
    const { onNextScene } = prop;
    const { elements } = useScene('intro', sequence, onNextScene);

    return (
        <>
            {elements}
        </>
    );
}

export default IntroScene;
