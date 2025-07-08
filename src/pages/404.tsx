import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - 페이지를 찾을 수 없습니다</title>
        <meta
          name="description"
          content="요청하신 페이지를 찾을 수 없습니다."
        />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
