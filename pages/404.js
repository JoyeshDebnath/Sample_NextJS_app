import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/"); //redirect to the home page after 5 sec
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>OOPS... </h1>
      <h2>That page could not be found!!!</h2>
      <p className="text">
        Go back to <Link href="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
