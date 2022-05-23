import * as Yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiRoutes, routes } from "../../../utils/Routes";
import { useRouter } from "next/router";
const useLogin = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  const formik = useFormik({
    initialValues: { password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string()
        .required("password must be provided")
        .min(8, "password must be 8 characters"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await axios.post(`${baseUrl}${apiRoutes.sigin}`, values);
        setLoading(false);
        setMessage("Successfully logged in");
        router.push({
          pathname: `/${routes.profile}`,
          query: { name: res.data.user.userName },
        });
        localStorage.setItem("email", res.data.user.email);
      } catch (error) {
        setLoading(false);
        setMessage("Error logging in");
      }
    },
  });
  return {
    formik,
    message,
    loading,
  };
};

export default useLogin;
