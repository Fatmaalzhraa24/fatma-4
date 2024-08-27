import ImageGallery from "react-image-gallery";

function AutomaticCarousel({ images }) {
  return (
    <ImageGallery items={images} autoPlay={true} />
  );
}

export default AutomaticCarousel;