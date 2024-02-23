import RatingsTitle from "./components/RatingsTitle";
import SwiperRating from "./components/SwiperRating";

const Ratings = () => {
  return (
    <article className="w-full mx-auto flex flex-col items-center justify-center">
      <RatingsTitle />
      <SwiperRating />
    </article>
  );
};

export default Ratings;
