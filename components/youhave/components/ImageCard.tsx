const ImageCard = ({ photo, text }: ImageCardType) => {
  return (
    <div className="w-full flex relative">
      <div
        className="w-full sm:h-[600px] h-[200px]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${photo})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      />
      <p
        className="absolute leading-5 text-white text-center left-[50%] top-[80%] sm:text-subtitles text-smp font-lexend uppercase font-bold"
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
