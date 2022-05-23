import Head from "next/head";
import Link from "next/link";
import { routes } from "../utils/Routes";
export default function Home() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="My Website" />
      </Head>
      <div className="flex h-full w-full flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-blue-600 ">
          Welcome to my website
        </h1>
        <div className="flex flex-row mt-14 ">
          <Link href={routes.login}>
            <a className="text-2xl font-bold text-blue-400">Login</a>
          </Link>
          <Link href={routes.signup}>
            <a className="text-2xl font-bold text-blue-400 ml-10">Signup</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
