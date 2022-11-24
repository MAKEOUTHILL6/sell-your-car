import styles from "../Footer/Footer.module.css";
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

const Footer = () => {

    return(
        <div className={styles.container}>
            <div className="flex justify-center mt-5">
                <AiFillFacebook className={styles.icon} />
                <AiFillLinkedin className={styles.icon} />
                <AiFillInstagram className={styles.icon} />
            </div>
            <div className="text-center mt-4">
                <p className="text-white text-base">Social Contacts</p>
                <p className="text-white">Terms of Use  Privacy Policy</p>
                <p className="text-white">&copy; 2022 carsell</p>
            </div>
        </div>
    )
}

export default Footer;
