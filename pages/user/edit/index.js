import Head from "next/head";
import Link from "next/link";
export default function Edit() {
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
          Please Edit Your profile
        </h1>
        <h1 className="text-4xl font-bold text-blue-600 ">Cristiano Ronaldo</h1>
      </div>
    </div>
  );
}
