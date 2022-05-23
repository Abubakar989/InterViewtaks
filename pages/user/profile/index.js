import Head from "next/head";
import Link from "next/link";
import useProfile from "./useProfile";
import Alert from "../../../components/Alert";

export default function Profile() {
  const { formik, logout, name, message, loading } = useProfile();
  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
      <Head>
        <title>Profile</title>
        <meta name="description" content="My Website" />
      </Head>

      {message && <Alert alert={message} />}
      <div className="flex h-full w-full flex-col justify-center items-center">
        <button
          className="text-lg font-bold text-white bg-blue-600 p-2 rounded-lg mb-10"
          onClick={() => logout()}
        >
          Logout
        </button>
        <h1 className="text-4xl font-bold text-blue-600 ">Profile</h1>
        <h1 className="text-4xl font-bold text-blue-600 capitalize ">{name}</h1>
        <form
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
          className="flex flex-col mt-10"
        >
          <input
            type="text"
            placeholder="Please enter your name"
            className="  w-100 py-2 px-3 mb-2 border border-gray-400 rounded-lg"
            {...formik.getFieldProps("userName")}
          />
          {formik.touched.userName && formik.errors.userName && (
            <p className="text-sm font-light text-red-600 ">
              {formik.errors.userName}
            </p>
          )}

          <button
            className="text-lg font-bold text-white bg-blue-600 p-2 rounded-lg mt-10"
            type="submit"
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
}
