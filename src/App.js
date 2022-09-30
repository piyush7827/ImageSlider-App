import ImageSlider from "./ImageSlider";
import Navigationbar from "./Navigationbar";
const App = () => {
  const slides = [
    {
      url: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
      title: "beach",
    },
    {
      url: "https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/lands-endslide__800x600.jpg",
      title: "boat",
    },
    {
      url: "https://www.seozoom.co.uk/wp-content/uploads/2021/02/caroselli-immagine.jpg",
      title: "forest",
    },
    {
      url: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).webp",
      title: "city",
    },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <Navigationbar />
      <br />

      <h1>Wallpaper Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
