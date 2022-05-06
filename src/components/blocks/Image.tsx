import shallow from 'zustand/shallow';
import useController from '../../hooks/useController';

interface ImageProp {
  blockId: string;
  src: string;
  width?: string;
  height?: string;
}

/**
 * 일반 이미지를 위한 블록
 * @param blockId string 블록 구분자
 * @param src string 이미지 URL.
 * @param playing boolean 실행중인가
 * @returns React.FunctionComponent
 */
const Image: React.FC<ImageProp> = ({ blockId, src, width, height }) => {
  const playing = useController((state) => state.blocks[blockId]) || false;

  console.log(blockId, playing)

  return (
    <img
      src={src}
      style={{
        display: playing ? 'block' : 'none',
        width: width || '100%',
        height: height || '100%',
      }}
    />
  );
};

export default Image;
