import Image from "next/image";
import React from "react";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <section className="pt-14 relative mx-5 sm:mx-10 md:mx-20 h-screen">
        <div className="pt-10 w-full">
          <div className="flex flex-col items-center relative h-85 gap-y-10 sm:gap-y-20">
            <h2 className="text-4xl sm:text-6xl w-full lg:w-1/4 md:absolute left-0 top-0">
              ABOUT ME
            </h2>
            <p className="text-2xl md:text-4xl w-full md:w-3/5 md:absolute md:left-1/4 md:top-1/4 lg:left-1/4 2xl:top-[20%] z-10">
              Daniel Zyrick Gayao is my name, though. I am a web designer and
              front-end developer based in the Philippines. Creating stunning,
              user-friendly, and flexible websites is my passion.
            </p>
            <Image
              src="/1.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ height: "auto" }}
              className="w-3/5 sm:w-1/3 md:w-1/4 lg:w-1/5 md:absolute right-0 md:bottom-10 z-0"
              alt="Daniel Image"
              priority={true}
            />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="mb-20 px-20">
          <h5 className="text-5xl w-2/5 font-light">
            driven by the simple objective of helping companies change the way
            we live.
          </h5>
          <div className="w-full flex gap-20 pt-20">
            <Image
              src="/inked2600.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              alt="inked2600 Image"
              priority={true}
            />
            <Image
              src="/Hilaga Studio.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              alt="Hilaga Studio Image"
              priority={true}
            />
            <Image
              src="/Fi.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              alt="Fi Image"
              priority={true}
            />
          </div>
        </div>
      </section> */}
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
