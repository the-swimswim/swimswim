import useController from '../../hooks/useController';

interface SelectionProp {
  blockId: string;
  active?: { [key: string]: boolean };
  left?: string;
  top?: string;
  width?: string;
  height?: string;
  src?: string;
  transform?: string;
}

/**
 * 특정한 행동을 하는 버튼
 * @param playing boolean 실행중인가
 * @param onSelect Function 버튼이 클릭되었을 때 실행하는 내용
 * @returns React.FunctionComponent
 */
const Selection: React.FC<SelectionProp> = ({
  blockId,
  active,
  left,
  top,
  width = 'auto',
  height = 'auto',
  src,
  transform,
}) => {
  const playing = useController((state) => state.blocks[blockId]) || false;
  const update = useController((state) => state.update);

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
            transform: `translate(-50%, -50%) ${transform || ''}`,
            width,
            height,
            zIndex: 100,
          }}
          onClick={active ? () => update(active) : undefined}
        />
      ) : (
        <button
          style={{
            display: playing ? 'block' : 'none',
            position: 'absolute',
            left: left || '50%',
            top: top || '50%',
            transform: `translate(-50%, -50%) ${transform || ''}`,
            width,
            height,
            background: 'transparent',
            border: 'none',
            zIndex: 100,
          }}
          onClick={active ? () => update(active) : undefined}
        />
      )}
    </>
  );
};

export default Selection;
