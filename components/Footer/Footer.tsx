import styles from "../Footer/Footer.module.css"
import Link from 'next/link';

const Footer = () => {

    return(
       <section className={styles.container}>
        <div className="ml-32">
            <h1 className="text-3xl font-bold mb-5">Explore cars</h1>
            <h1 className="text-xl font-bold mb-5">Browse by car type</h1>
        </div>
        <div className={styles.listcont}>
            <ul className="flex">

                <li className={styles.li}>
                <img alt="title" src='https://res.cloudinary.com/dgan9aq0c/image/upload/v1669301506/noun-hrv-914907_ytuvht.svg' className={styles.img} />
                <div className={styles.div}>
                <Link href=''><span className={styles.span}>SUVs</span></Link>
                </div>
                </li>

                <li className={styles.li}>
                <img alt="title" src='https://res.cloudinary.com/dgan9aq0c/image/upload/v1669301580/noun-mustang-913949_hvzwoe.svg' className={styles.img} />
                <div className={styles.div}>
                <Link href=''><span className={styles.span}>Coupes</span></Link>
                </div>
                </li>

                <li className={styles.li}>
                <img alt="title" src='https://res.cloudinary.com/dgan9aq0c/image/upload/v1669301683/noun-one-915035_bqzq7b.svg' className={styles.img} />
                <div className={styles.div}>
                <Link href=''><span className={styles.span}>Sports cars</span></Link>
                </div>
                </li>

                <li className={styles.li}>
                <img alt="title" src='https://res.cloudinary.com/dgan9aq0c/image/upload/v1669301730/noun-ccxr-915027_gcz6ud.svg' className={styles.img} />
                <div className={styles.div}>
                <Link href=''><span className={styles.span}>Convertibles</span></Link>
                </div>
                </li>

                <li className={styles.li}>
                <img alt="title" src='https://res.cloudinary.com/dgan9aq0c/image/upload/v1669301796/noun-civic-914902_wyf82q.svg' className={styles.img} />
                <div className={styles.div}>
                <Link href=''><span className={styles.span}>Saloons</span></Link>
                </div>
                </li>

                <li className={styles.li}>
                <img alt="title" src='https://res.cloudinary.com/dgan9aq0c/image/upload/v1669302870/noun-carens-914994_mtllfw.svg' className={styles.img} />
                <div className={styles.div}>
                <Link href=''><span className={styles.span}>Hatchbacks</span></Link>
                </div>
                </li>

            </ul>
        </div>
       </section>
    )
}

export default Footer;