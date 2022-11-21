import styles from "../HeroSection/HeroSection.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

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
      <div className="w-full h-96 bg-white absolute rounded-full top-80 "></div>
    </>
  );
};

export default HeroSection;
