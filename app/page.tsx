import Image from "next/image";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <Banner />
      <Explore />
      <Slider />
   </main>
  );
}
