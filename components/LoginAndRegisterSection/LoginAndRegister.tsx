import { useState } from "react";
import styles from "../LoginAndRegisterSection/Login.module.css";

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
            <label htmlFor="username" className={styles.label}></label>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            />
          </div>
          <div className={styles.infield}>
            <label htmlFor="password" className={styles.label}></label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <div className={styles.infield}>
            <label htmlFor="repassword" className={styles.label}></label>
            <input
              className={styles.input}
              type="password"
              placeholder="Repeat Password"
              name="repassword"
              id="repassword"
            />
          </div>
          <button type="submit" className={styles.button}>Sign Up</button>
        </form>
      </div>

      <div className={`${styles.formcontainer} ${styles.signincontainer}`}>
        <form className={styles.form} action="#">
          <h1 className={styles.h1}>Log in</h1>

          <div className={styles.infield}>
            <label htmlFor="username" className={styles.label}></label>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            />
          </div>
          <div className={styles.infield}>
            <label htmlFor="password" className={styles.label}></label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <div className="flex items-center mt-2">
            <input
              className="h-4 w-4 rounded-sm mr-2"
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <label className="text-base" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <button type="submit" className={styles.button}>Sign In</button>
        </form>
      </div>

      <div className={styles.overlaycontainer} id="overlayCon">
        <div className={styles.overlay}>
          <div className={`${styles.overlaypanel} ${styles.overlayleft}`}>
            <h1 className={styles.h1}>Welcome, friend!</h1>

            <p className={styles.p}>
              Create an account to keep up with us and our car dealers!
            </p>
            <button className={styles.button}>Sign In</button>
          </div>

          <div className={`${styles.overlaypanel} ${styles.overlayright}`}>
            <h1 className={styles.h1}>Don't have an account?</h1>

            <p className={styles.p}>
              Click down below and start your journey with us!
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
