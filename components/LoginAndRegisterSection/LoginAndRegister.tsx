import { useState } from "react";
import styles from "../LoginAndRegisterSection/Login.module.css";
import { useFormik } from "formik";
import loginValidate from "../../lib/validate";
import Register from "./Register";
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';

const Login = () => {
  const [clicked, setIsClicked] = useState(true);

  const router = useRouter();

  const classHandler = () => {
    setIsClicked(!clicked);
  };

  const onSubmitLogin = async (values: any) => {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    });

    if(status?.ok){
      router.push('/')
    }

  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: loginValidate,
    onSubmit: onSubmitLogin,
  });  

  return (
    <div
      className={
        clicked
          ? `${styles.container}`
          : `${styles.container} ${styles.rightpanelactive}`
      }
    >
  
      <Register />

      <div className={`${styles.formcontainer} ${styles.signincontainer}`}>
        <form
          className={styles.form}
          action="POST"
          onSubmit={formik.handleSubmit}
        >
          <h1 className={styles.h1}>Log in</h1>

          <div className={styles.infield}>
            <label htmlFor="email" className={styles.label}></label>
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              // name="username"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? <span className={styles.error}>{formik.errors.email}</span>: <></>}
          </div>
          <div className={styles.infield}>
            <label htmlFor="password" className={styles.label}></label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              // name="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password  && formik.touched.password ? <span className={styles.error}>{formik.errors.password}</span>: <></>}
          </div>
          <div className="flex items-center mt-2">
            <input
              className="h-4 w-4 rounded-sm mr-2"
              type="checkbox"
              id="rememberMe"
              // name="rememberMe"
              {...formik.getFieldProps("rememberMe")}
            />
            <label className="text-base" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <button type="submit" className={styles.button}>
            Sign In
          </button>
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
