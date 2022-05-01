import ReactVideo from 'react-player';

interface NormalVideoProp {
    url: { src: string, type: string }[],
    playing: boolean,
    muted?: boolean,
    onEnded?: () => void,
}

/**
 * 일회성으로 실행되는 영상
 * @param url { src: string, type: string }[] 영상 URL. 
 * @param playing boolean 실행중인가
 * @param onEnded Function 영상이 끝나면 실행되는 콜백
 * @returns React.FunctionComponent
 */
const NormalVideo:React.FunctionComponent<NormalVideoProp> = ({ url, playing, muted = false, onEnded }) => {
    return (
        <ReactVideo
            // style={{ position: "fixed", display: playing ? "block" : "none" }}
            style={{ position: "fixed", zIndex: playing ? 0 : -10 }}
            playing={playing}
            muted={muted}
            width="100%"
            height="100%"
            url={url}
            onEnded={onEnded}
        />
    )
}

export default NormalVideo;
