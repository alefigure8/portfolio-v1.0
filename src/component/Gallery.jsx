import React, { useState } from "react";
import Image from "./Image";
import ImageZoom from "./ImageZoom";

const Gallery = ({ images }) => {
  const [zoomedSrc, setZoomedSrc] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const handleImage = (src) => {
    setZoomedSrc(src);
  };

  const handleOpen = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {images?.map((img, index) => (
        <div
          key={index}
          onClick={() => {
            handleImage(img.source);
            handleOpen();
          }}
        >
          <Image src={img.source} alt={img.source} />
        </div>
      ))}
      {zoomed && (
        <div
          onClick={() => {
            handleOpen();
          }}
          className="cursor-pointer"
        >
          <ImageZoom href={zoomedSrc} alt={zoomedSrc} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
