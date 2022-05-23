import * as Yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiRoutes, routes } from "../../../utils/Routes";
import { useRouter } from "next/router";
const useSignup = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  const formik = useFormik({
    initialValues: { userName: "", email: "", password: "" },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string()
        .required("password must be provided")
        .min(8, "password must be 8 characters"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await axios.post(`${baseUrl}${apiRoutes.signup}`, values);
        setLoading(false);
        setMessage("Successfully signed up");
        router.push(`/${routes.login}`);
      } catch (error) {
        setLoading(false);
        setMessage("Error signing up");
      }
    },
  });
  return {
    formik,
    message,
    loading,
  };
};

export default useSignup;
