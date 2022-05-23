import Head from "next/head";
import Link from "next/link";
import Alert from "../../../components/Alert";
import useLogin from "./useLogin";
export default function Login() {
  const { formik, message, loading } = useLogin();
  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
      <Head>
        <title>Login</title>
        <meta name="description" content="my website " />
      </Head>
      <div className="flex h-full w-full flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-blue-600 ">Login page</h1>
        {message && <Alert alert={message} />}

        <form
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
          className="flex flex-col mt-10"
        >
          <input
            type="email"
            placeholder="Email"
            className="  w-100 py-2 px-3 mb-2 border border-gray-400 rounded-lg"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm font-light text-red-600 ">
              {formik.errors.email}
            </p>
          )}
          <input
            label=" Password"
            labelfor="password"
            type="password"
            placeholder="Password"
            className="  w-100 py-2 px-3 mb-2 border border-gray-400 rounded-lg"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm font-light text-red-600 ">
              {formik.errors.password}
            </p>
          )}
          <button
            className="text-lg font-bold text-white bg-blue-600 p-2 rounded-lg mt-10"
            type="submit"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
