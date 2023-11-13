import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center mx-5 sm:mx-10 md:mx-20 xl:mx-56 mt-36 mb-20">
      <div className="w-3/4 sm:w-1/3 xl:w-2/5">
        <Image
          src="/1.jpg"
          width={500}
          height={750}
          alt="Daniel Image"
          className="rounded-3xl"
          priority={true}
          placeholder="blur"
          blurDataURL={"/1.jpg"}
        />
      </div>
      <div className="pt-10 sm:pt-0 lg:pt-10 sm:pl-12 lg:pt-0 lg:pl-24 w-full sm:w-2/3 xl:w-3/5">
        <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-5 lg:mb-10">
          In this age of technology, it's my goal to help brands in become
          distinctive. We'll establish the new standard for excellence to one
          another. Unexpected and constantly at the forefront of things.
        </p>
        <div className="flex flex-col sm:flex-row items-center">
          <p className="w-full sm:w-1/2 mb-5 sm:mb-0 sm:mr-10">
            I enjoy within the field of web development because of my love for
            design, coding, and interaction.
          </p>
          <div>
            <Link
              href="/about#top"
              className="w-28 h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 text-md sm:text-md xl:text-xl rounded-full  flex justify-center items-center bg-bkg dark:bg-white text-txt dark:text-black  font-medium"
            >
              About me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
