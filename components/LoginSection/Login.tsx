import { useState } from "react";
import styles from "../LoginSection/Login.module.css";

const Login = () => {
  const [clicked, setIsClicked] = useState(true);

  const classHandler = () => {
    setIsClicked(!clicked);
  };

  return (
    <div
      className={
        clicked
          ? `${styles.container}`
          : `${styles.container} ${styles.rightpanelactive}`
      }
    >
      <div className={`${styles.formcontainer} ${styles.signupcontainer}`}>
        <form className={styles.form} action="#">
          <h1 className={styles.h1}>Create Account</h1>

          <div className={styles.infield}>
            <input className={styles.input} type="text" placeholder="Name" />
            <label className={styles.label}></label>
          </div>
          <div className={styles.infield}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              name="email"
            />
            <label className={styles.label}></label>
          </div>
          <div className={styles.infield}>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <label className={styles.label}></label>
          </div>
          <button className={styles.button}>Sign Up</button>
        </form>
      </div>

      <div className={`${styles.formcontainer} ${styles.signincontainer}`}>
        <form className={styles.form} action="#">
          <h1 className={styles.h1}>Log in</h1>

          <div className={styles.infield}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              name="email"
            />
            <label className={styles.label}></label>
          </div>
          <div className={styles.infield}>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <label className={styles.label}></label>
          </div>

          <div className="flex items-center mt-2">
            <input className="h-4 w-4 rounded-sm mr-2" type="checkbox" id="rememberMe" />
            <label className="text-base" htmlFor="rememberMe">Remember me</label>
          </div>

          <button className={styles.button}>Sign In</button>
        </form>
      </div>

      <div className={styles.overlaycontainer} id="overlayCon">
        <div className={styles.overlay}>
          <div className={`${styles.overlaypanel} ${styles.overlayleft}`}>
            <h1 className={styles.h1}>Welcome Back!</h1>

            <p className={styles.p}>
              To keep connected with us please login with your personal info
            </p>
            <button className={styles.button}>Sign In</button>
          </div>

          <div className={`${styles.overlaypanel} ${styles.overlayright}`}>
            <h1 className={styles.h1}>Don't have an account?</h1>

            <p className={styles.p}>
              Enter your personal details and start journey with us
            </p>
            <button className={styles.button}>Sign Up</button>
          </div>
        </div>
        <button className={styles.overlayBtn} onClick={classHandler}></button>
      </div>
    </div>
  );
};

export default Login;
