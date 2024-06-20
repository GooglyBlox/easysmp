import { useState, useEffect } from "react";

const images = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
];

const BackgroundCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed-size-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`bg-image bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundCarousel;