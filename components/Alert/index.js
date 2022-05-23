import { useEffect } from "react";

const Alert = ({ alert }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //   }, 5000);
  // }, [alert]);

  return (
    <>
      {alert && (
        <div
          className="flex items-center top-5 right-0 w-96 mt-20 rounded font-heading fixed  bg-blue-500 text-white text-xl tracking-wide font-normal px-4 py-3"
          role="alert"
          style={{ zIndex: "1000" }}
        >
          <p>{alert}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
