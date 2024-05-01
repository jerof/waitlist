import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <section className="flex mx-auto justify-center">
      <div className="h-[90vh] flex lg:flex-row flex-col items-center gap-x-8">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
}
