import ReactVideo from 'react-player';

interface NormalVideoProp {
    url: { src: string, type: string }[],
    playing: boolean,
    onEnded: () => void,
}

/**
 * 일회성으로 실행되는 영상
 * @param url { src: string, type: string }[] 영상 URL. 
 * @param playing boolean 실행중인가
 * @param onEnded Function 영상이 끝나면 실행되는 콜백
 * @returns React.FunctionComponent
 */
const NormalVideo:React.FunctionComponent<NormalVideoProp> = ({ url, playing, onEnded }) => {
    return (
        <ReactVideo
            style={{ display: playing ? "block" : "none" }}
            playing={playing}
            muted
            width="100%"
            height="100%"
            url={url}
            onEnded={onEnded}
        />
    )
}

export default NormalVideo;
