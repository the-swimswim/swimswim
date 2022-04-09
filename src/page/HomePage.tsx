import Button from "../component/BrushButton";
import TransparentButton from "../component/TransparentButton";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Button text={"붓버튼"} onClick={() => {}} />
      <TransparentButton text={"투명버튼"} onClick={() => {}} />
    </>
  );
}

export default HomePage;
