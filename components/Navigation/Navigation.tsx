import Link from "next/link";
import Image from "next/image";
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className="flex absolute justify-center items-center top-0 text-base h-20 z-10 w-full">
        <div className="flex h-20 w-full py-0 px-12">
          <h1 className="font-bold text-white  justify-self-start flex text-3xl items-center ml-14 z-20 "><Image width={220} height={120} src="/CARSELL.svg" alt="" /></h1>
          <ul className="flex items-center text-center mr--6 z-20">
            <li className={styles.item}><Link className={styles.link} href=''>New</Link></li>
            <li className={styles.item}><Link className={styles.link} href=''>Used</Link></li>
            <li className={styles.item}><Link className={styles.link} href=''>Sell</Link></li>
            <li className={styles.item}><Link className={styles.link} href=''>Electric</Link></li>
            <li className={styles.item}><Link className={styles.link} href=''>Leasing</Link></li>
          </ul>
          <nav className='flex ml-120'><Link className={styles.sign} href='/login'>Login</Link></nav>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
