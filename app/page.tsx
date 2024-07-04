import Image from "next/image";
import Banner from "./banner/page";
import Idea from "./section1/page"
import Choose from "./choose/page";
import Bestmarketing from "./best/page";
export default function Home() {
  return (
    <div>
      <Banner/>
      <Idea/>
      <Choose/>
      <Bestmarketing/>
    </div>
  );
}
