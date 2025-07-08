import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log("router : ", router);
  const onClickButton = () => {
    router.push("/book/123");
  };
  useEffect(() => {
    router.prefetch("/book/1232324");
  }, []);

  return (
    <>
      <header>글로벌 헤더</header>
      <header>
        <Link href="/">index</Link>
        &nbsp;
        <Link href="/book/123">book/123</Link>
        &nbsp;
        <Link href="/search">search</Link>
        &nbsp;
        <Link href="/search" prefetch={false}>
          search/123
        </Link>
        <div>
          <button onClick={onClickButton}>book/123 으로 가는 버튼</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
