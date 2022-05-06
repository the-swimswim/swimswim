import ReactVideo from 'react-player';

interface SelectionProp {
  playing: boolean;
  onSelect: () => void;
  left?: string;
  top?: string;
  width?: string;
  height?: string;
  src?: string;
}

/**
 * 특정한 행동을 하는 버튼
 * @param playing boolean 실행중인가
 * @param onSelect Function 버튼이 클릭되었을 때 실행하는 내용
 * @returns React.FunctionComponent
 */
const Selection: React.FunctionComponent<SelectionProp> = ({
  playing,
  onSelect,
  left,
  top,
  width = 'auto',
  height = 'auto',
  src,
}) => {
  return (
    <>
      {src !== undefined ? (
        <img
          src={src}
          style={{
            display: playing ? 'block' : 'none',
            position: 'absolute',
            left: left || '50%',
            top: top || '50%',
            transform: 'translate(-50%, -50%)',
            width,
            height,
          }}
          onClick={onSelect}
        />
      ) : (
        <button
          style={{
            display: playing ? 'block' : 'none',
            position: 'absolute',
            left: left || '50%',
            top: top || '50%',
            transform: 'translate(-50%, -50%)',
            width,
            height,
            background: 'transparent',
            border: 'none',
          }}
          onClick={onSelect}
        />
      )}
    </>
  );
};

export default Selection;
