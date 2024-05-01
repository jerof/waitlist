import Image from "next/image";
import Splash from "@/public/hero-splash.jpg";

export default function RightSide() {
  return (
    <div className="lg:w-1/2 flex">
      <div className="lg:w-[560px] lg:h-[560px] justify-center items-center mt-6 overflow-hidden">
        <Image
          src={Splash}
          alt="splash"
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
