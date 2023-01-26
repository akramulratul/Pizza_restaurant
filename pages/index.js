import axios from "axios";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Featured from "../component/Featured";
import PizzaList from "../component/PizzaList";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Bogura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async()=>{
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props:{
      pizzaList:res.data,
    }
  }
}



// const res = await axios.get("http://localhost:3000/api/products");
// return {
//   props: {
//     pizzaList: res.data,
//     admin,
//   },
// };
//};
