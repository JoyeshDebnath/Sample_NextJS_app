import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>WelCome to my next app</h1>
      <p className={styles.text}>
        Lionel Andrés Messi, also known as Leo Messi, is an Argentine
        professional footballer who plays as a forward for Ligue 1 club Paris
        Saint-Germain and captains the Argentina national team.{" "}
      </p>

      <Link href="/ninja">
        <a className={styles.btn}>Go to Ninja Listing</a>
      </Link>
    </div>
  );
}
