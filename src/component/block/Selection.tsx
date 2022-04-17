import ReactVideo from 'react-player';

interface SelectionProp {
    playing: boolean,
    onSelect: () => void,
    onEnded: () => void,
    left?: string,
    top?: string,
    src: string,
}

/**
 * 특정한 행동을 하는 버튼
 * @param playing boolean 실행중인가
 * @param onSelect Function ???
 * @param onEnded Function ???
 * @returns React.FunctionComponent
 */
const Selection:React.FunctionComponent<SelectionProp> = ({ playing, onEnded, onSelect, left, top, src }) => {
    return (
        <img 
            src={src}
            style={{ 
                display: playing ? "block" : "none",
                position: 'absolute', left: left || "50%", top: top || "50%", 
                transform: "translate(-50%, -50%)",
            }} 
            onClick={onSelect}
        />
    )
}

export default Selection;
