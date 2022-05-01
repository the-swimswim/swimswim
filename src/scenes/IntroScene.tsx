import React, { useState, useEffect, useMemo } from 'react';
import useScene, { Block } from '../hooks/useScene';
import getScreenRatio from '../utils/getScreenRatio';

const ratio = getScreenRatio();

console.log(ratio)

enum BlockId {
    Start1 = 0,
    Start2,
    Lobby1,
    Lobby2,
    Left,
    Right,
    NextScene,
}

interface SceneProps {
    onNextScene?: Function;
}

const sequence: Block[] = [
    { type: "video", id: BlockId.Start1, src: "/intro_bg_1.mp4", muted: true, goto: BlockId.Start2 },

    { type: "image", id: BlockId.Start2, src: "/intro_bg_2.png" },
    { type: "selection", id: BlockId.Start2, src: "/intro_sealing.png", goto: BlockId.Lobby1, width: `${196 * ratio}px`, height: `${188 * ratio}px` },

    { type: "video", id: BlockId.Lobby1, src: "/intro_bg_3.mp4" },
    { type: "selection", id: BlockId.Lobby1, src: "/intro_button_arrow.png", goto: BlockId.Left, left: `${100 * ratio}px`, top: "50%", width: `${97 * ratio}px`, height: `${135 * ratio}px` },
    { type: "selection", id: BlockId.Lobby1, src: "/intro_button_arrow.png", goto: BlockId.Right, left: `calc(100% - ${100 * ratio}px)`, top: "50%", width: `${97 * ratio}px`, height: `${135 * ratio}px` },
    { type: "selection", id: BlockId.Lobby1, src: "/intro_button_enter.png", goto: BlockId.NextScene, left: "50%", top: `calc(100% - ${100 * ratio}px)`, width: `${649 * ratio}px`, height: `${148 * ratio}px` },

    { type: "video", id: BlockId.Lobby2, src: "/intro_bg_4.mp4" },
    { type: "selection", id: BlockId.Lobby2, src: "/intro_button_arrow.png", goto: BlockId.Left, left: `${100 * ratio}px`, top: "50%", width: `${97 * ratio}px`, height: `${135 * ratio}px` },
    { type: "selection", id: BlockId.Lobby2, src: "/intro_button_arrow.png", goto: BlockId.Right, left: `calc(100% - ${100 * ratio}px)`, top: "50%", width: `${97 * ratio}px`, height: `${135 * ratio}px` },
    { type: "selection", id: BlockId.Lobby2, src: "/intro_button_enter.png", goto: BlockId.NextScene, left: "50%", top: `calc(100% - ${100 * ratio}px)`, width: `${649 * ratio}px`, height: `${148 * ratio}px` },

    { type: "video", id: BlockId.Left, src: "/intro_bg_5.mp4" },
    { type: "selection", id: BlockId.Left, goto: BlockId.Lobby2, left: `${200 * ratio}px`, top: "50%", width: `${200 * ratio}px`, height: `${200 * ratio}px` },

    { type: "video", id: BlockId.Right, src: "/intro_bg_6.mp4" },
    { type: "selection", id: BlockId.Right, goto: BlockId.Lobby2, left: `calc(100% - ${200 * ratio}px)`, top: "50%", width: `${200 * ratio}px`, height: `${200 * ratio}px` },

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
