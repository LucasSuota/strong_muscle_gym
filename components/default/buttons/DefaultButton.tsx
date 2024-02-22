import Link from "next/link";

const DefaultButton = ({
  text = "Conhecer ser strong",
  link = "https://www.instagram.com/strongymuscle/",
}: DefaultInputType) => {
  return (
    <Link
      className="text-smp text-center sm:w-1/5 w-2/4 sm:px-8 px-2 sm:py-4 py-2 rounded-sm bg-red_primary text-white hover:bg-red-700 transition-[0.5s] active:bg-black_primary uppercase font-bold"
      href={link}
      target="_blank"
    >
      {text}
    </Link>
  );
};

export default DefaultButton;
