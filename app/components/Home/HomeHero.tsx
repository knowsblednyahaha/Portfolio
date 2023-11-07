import styles from "@/app/page.module.css";
import Link from "next/link";
export default function HomeHero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen min-h-full relative z-10 mx-20">
      <div>
        <h1 className="text-9xl p-5">Daniel Zyrick Gayao</h1>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-extralight">
          Junior Front-end Web Developer
        </span>
        <span className="text-5xl font-extralight">Based in Philippines</span>
      </div>
      <div className={styles.bgRadial}></div>
      <div className="absolute bottom-7 left-0">
        <div className="w-60 h-auto">
          <span className="text-5xl font-extralight">Portfolio 2023</span>
        </div>
      </div>
      <div className="flex flex-col absolute bottom-7 right-0 font-extralight text-xl">
        <Link href="">Instagram</Link>
        <Link href="">Facebook</Link>
        <Link href="">Email</Link>
        <Link href="">LinkedIn</Link>
      </div>
    </section>
  );
}