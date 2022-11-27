import styles from "../LoginAndRegisterSection/Login.module.css";
import { useFormik } from "formik";
import { registerValidate } from "../../lib/validate";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmitRegister = async (values: any) => {
    try {
      let response = await axios.post(
        "http://localhost:3000/api/auth/register",
        values
      );
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      repassword: "",
    },
    validate: registerValidate,
    onSubmit: onSubmitRegister,
  });

  return (
    <div className={`${styles.formcontainer} ${styles.signupcontainer}`}>
      <div>{error}</div>
      <form
        className={styles.form}
        method="POST"
        onSubmit={formik.handleSubmit}
      >
        <h1 className={styles.h1}>Create Account</h1>

        <div className={styles.infield}>
          <label htmlFor="username" className={styles.label}></label>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            // name="username"
            id="username"
            {...formik.getFieldProps("username")}
          />
          {formik.errors.username && formik.touched.username ? (
            <span className={styles.error}>{formik.errors.username}</span>
          ) : (
            <></>
          )}
        </div>

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
          {formik.errors.email && formik.touched.email ? (
            <span className={styles.error}>{formik.errors.email}</span>
          ) : (
            <></>
          )}
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
          {formik.errors.password && formik.touched.password ? (
            <span className={styles.error}>{formik.errors.password}</span>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.infield}>
          <label htmlFor="repassword" className={styles.label}></label>
          <input
            className={styles.input}
            type="password"
            placeholder="Repeat Password"
            // name="repassword"
            id="repassword"
            {...formik.getFieldProps("repassword")}
          />
          {formik.errors.repassword && formik.touched.repassword ? (
            <span className={styles.error}>{formik.errors.repassword}</span>
          ) : (
            <></>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
