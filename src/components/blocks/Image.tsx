interface ImageProp {
  src: string;
  playing: boolean;
  width?: string;
  height?: string;
}

/**
 * 일반 이미지를 위한 블록
 * @param src string 이미지 URL.
 * @param playing boolean 실행중인가
 * @returns React.FunctionComponent
 */
const Image: React.FunctionComponent<ImageProp> = ({ src, playing, width, height }) => {
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
