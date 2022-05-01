import ReactVideo from 'react-player';

interface LoopVideoProp {
    url: { src: string, type: string }[],
    muted?: boolean,
    playing: boolean,
}

/**
 * 반복되는 영상을 위한 블록
 * @param url { src: string, type: string }[] 영상 URL. 
 * @param playing boolean 실행중인가
 * @returns React.FunctionComponent
 */
const LoopVideo:React.FunctionComponent<LoopVideoProp> = ({ url, muted = false, playing }) => {
    return (
        <ReactVideo
            loop
            style={{ display: playing ? "block" : "none" }}
            playing={playing}
            muted={muted}
            width="100%"
            height="100%"
            url={url}
        />
    )
}

export default LoopVideo;
