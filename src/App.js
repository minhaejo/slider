import logo from "./logo.svg";
import "./App.css";
// import ImgSlider from "./"
import ImgSlider from "./components/ImgSlider";

function App() {
  const slides = [
    {
      imgUrl: "https://cdn.imweb.me/thumbnail/20220530/7874d196fb7a0.png",
      title: "one",
    },
    {
      imgUrl: "https://cdn.imweb.me/thumbnail/20220530/959f9df227495.png",
      title: "two",
    },
    {
      imgUrl: "https://cdn.imweb.me/thumbnail/20220530/fa78cafd2812e.png",
      title: "three",
    },
  ];
  const containerStyles = {
    width: "500px",
    height: "380px",
    margin: "0 auto",
  };
  return (
    <div className="App">
      <h1>Hello I'm Carousel</h1>
      <div style={containerStyles}>
        <ImgSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
