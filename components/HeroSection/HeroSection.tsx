import styles from "../HeroSection/HeroSection.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbFreeRights } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiWorld } from "react-icons/bi";

const HeroSection = () => {
  return (
    <>
      <div className={styles.background}>
        <Image
          className="absolute bottom-4"
          width={800}
          height={0}
          src="/wave.svg"
          alt="title"
        />
        <Image
          className="absolute bottom-4 right-0"
          width={800}
          height={0}
          src="/wave.svg"
          alt="title"
        />
        <Image
          className="absolute bottom-44 left-20"
          width={500}
          height={0}
          src="/buy-sell-car.svg"
          alt="title"
        />

        <div className="absolute bottom-24 flex flex-col left-40 items-center">
          <button className={styles.buttonssell}>
            Sell my car
            <AiOutlineArrowRight className="absolute right-4" />
          </button>
          <button className={styles.buttonsbuy}>
            Buy a car
            <AiOutlineArrowRight className="absolute right-4" />
          </button>
        </div>
      </div>
      <div className="w-full h-full bg-white absolute rounded-full top-80 flex ">
        <article className="bg-slate-100 w-96 h-52 absolute top-28 left-32 rounded-xl">
          <div className="flex flex-col text-center items-center">
            <TbFreeRights className="text-5xl mt-11 text-rose-500" />
            <p className="font-bold text-xl mt-2">Free</p>
            <p className="mt-2 ">100% free, no fees, just great prices!</p>
          </div>
        </article>
        <article className="bg-slate-100 w-96 h-52 absolute top-28 right-37% rounded-xl">
          <div className="flex flex-col text-center items-center">
            <VscWorkspaceTrusted className="text-5xl mt-11 text-rose-500" />
            <p className="font-bold text-xl mt-2">Trusted</p>
            <p className="mt-2 ">Over 1000 positive reviews!</p>
          </div>
        </article>
        <article className="bg-slate-100 w-96 h-52 absolute top-28 right-32 rounded-xl pl-6">
          <div className="flex flex-col text-center items-center">
            <BiWorld className="text-5xl mt-11 text-rose-500" />
            <p className="font-bold text-xl mt-2">Worldwide</p>
            <p className="mt-2 ">Worldwide shipping services!</p>
          </div>
        </article>

        <section className={styles.sellcontainer}>
          <div className="">
            <div className="w-80 pl-5 pt-6">
              <h2 className="text-white font-bold text-3xl mb-4">The fastest way to sell your car through our services</h2>
              <p className="text-white text-lg  mb-8">Free and easy way to get buyers all over the world bidding on your car</p>
              <button className="bg-white text-lg font-bold py-3 rounded-xl px-24">Sell my car</button>
            </div>
          </div>
        </section>

        <section className={styles.youtubecontainer}>
            <video className="" src="https://carwow-uk-3.imgix.net/homepage/video/youtube.mp4" autoPlay loop></video>
            <div className="absolute w-96 pl-5 pt-6 z-10">
              <h2 className="font-bold text-3xl text-white mb-4">Site inspired by the most popular car Youtube channel</h2>
              <p className="text-white text-lg mb-20">With over 70+ million views a month, there is a review for everyone</p>
              <a className="text-white font-bold underline text-lg " href="https://www.youtube.com/channel/UCUhFaUpnq31m6TNX2VKVSVA" target="_blank">Watch on Youtube</a>
            </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
