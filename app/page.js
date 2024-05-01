import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Splash from "@/public/hero-splash.jpg";

export default function Home() {
  return (
    <section className="flex mx-auto justify-center">
      <div className="h-[90vh] flex lg:flex-row flex-col items-center gap-x-8">
        <div className="lg:w-1/2 flex">
          <div className="flex flex-col lg:justify-center leading-4 max-w-[500px] lg:mx-[60px] mx-2 items-center">
            <h1 className="text-4xl font-bold text-center my-4 lg:text-left lg:my-2">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="my-4 mr-4 text-muted-foreground text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              deleniti fugiat quaerat deserunt odit quae.
            </p>
            <div className="flex lg:flex-row lg:gap-x-2 gap-y-2 mt-4 flex-col w-full">
              <Input
                type="email"
                placeholder="Your email"
                className="h-[50px]"
              />
              <Button className="h-[50px]">Join waitlist</Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex">
          <div className="lg:w-[560px] lg:h-[560px] justify-center items-center mt-6 overflow-hidden">
            <Image
              src={Splash}
              alt="splash"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
