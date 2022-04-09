import Button from "../component/Button/Button";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Button
        text={"click"}
        onClick={() => {
          console.log("hi");
        }}
      ></Button>
    </>
  );
}

export default HomePage;
