import Title from "./components/Title";
import MediaLinks from "./components/MediaLinks";
import Address from "./components/Address";

const VenhaSerStrong = () => {
  return (
    <section className="w-full mx-auto flex flex-col items-center justify-center">
      <Title />
      <MediaLinks />
      <Address />
    </section>
  );
};

export default VenhaSerStrong;
