// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "./index.module.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>안녕 Next.js</h1>
      <h2 className={styles.h2}>안녕 Next.js2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
