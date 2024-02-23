import { imageCards } from "@/constants";
import ImageCard from "./ImageCard";

const YouHavePhotos = () => {
  return (
    <section className="sm:w-4/5 mx-auto bg-black_primary grid grid-cols-2">
      {imageCards.map((item, index) => (
        <ImageCard key={index} text={item.text} photo={item.photo} />
      ))}
    </section>
  );
};

export default YouHavePhotos;
