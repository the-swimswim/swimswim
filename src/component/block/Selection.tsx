import ReactVideo from 'react-player';

interface SelectionProp {
    playing: boolean,
    onSelect: (value: number) => void,
    onEnded: () => void,
}

/**
 * 특정한 행동을 하는 버튼
 * @param playing boolean 실행중인가
 * @param onSelect Function ???
 * @param onEnded Function ???
 * @returns React.FunctionComponent
 */
const Selection:React.FunctionComponent<SelectionProp> = ({ playing, onEnded }) => {
    return (
        <>
            <button 
                style={{ 
                    display: playing ? "block" : "none",
                    position: 'absolute', left: "50%", top: "50%", 
                    transform: "translate(-50%, -50%)",
                }} 
                onClick={onEnded}
            >
                next
            </button>
        </>
    )
}

export default Selection;
