import ImageSlider from "./ImageSlider";

const Rockets = () => {
  const slides = [
    { url: "http://localhost:8001/photos/falcon-1.jpg", title: "Falcon-1" },
    { url: "http://localhost:8001/photos/falcon-9.jpg", title: "Falcon-9" },
    {
      url: "http://localhost:8001/photos/falcon-heavy.jpg",
      title: "Falcon-Heavy"
    },
    { url: "http://localhost:8001/photos/eagle-lite.jpg", title: "Eagle-Lite" },
    { url: "http://localhost:8001/photos/eagle-1.jpg", title: "Eagle 1" },
    { url: "http://localhost:8001/photos/eagle-2.jpg", title: "Eagle 2" }
  ];
  return (
    <div className="rockets">
      <h1 style={{ color: "#fff", overflow: "hidden", marginTop: "2rem" }}>
        Check our Rockets
      </h1>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Rockets;
