import Image from "next/image";

const ImageCard = ({ photo, text }: ImageCardType) => {
  return (
    <div className="w-full flex relative">
      <div
        className="w-full sm:h-[600px] h-[200px]"
        style={{
          backgroundImage: `url(${photo})`,
          backgroundSize: "cover",
        }}
      />
      <p
        className="absolute text-white left-[50%] top-[80%] sm:text-subtitles text-smp font-lexend uppercase sm:font-bold "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ImageCard;
