import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl, apiRoutes, routes } from "../../../utils/Routes";

const useProfile = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      router.push(`/${routes.login}`);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("email");
    router.push(`/${routes.login}`);
  };
  const formik = useFormik({
    initialValues: { userName: "" },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await axios.post(`${baseUrl}${apiRoutes.edit}`, {
          ...values,
          email: localStorage.getItem("email"),
        });
        setLoading(false);
        setMessage("Successfully updated");
        router.push(`/${routes.profile}`);
      } catch (error) {
        setLoading(false);
        setMessage("Error updating");
      }
    },
  });
  return {
    formik,
    logout,
    name: router.query.name,
    message,
    loading,
  };
};

export default useProfile;
