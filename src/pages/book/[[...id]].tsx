import { useRouter } from "next/router";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchOneBook from "@/pages/lib/fetch-one-book";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const { id } = context.params;
  // console.log("id : ", id);
  const bookId = Array.isArray(context.params?.id)
    ? parseInt(context.params.id[0])
    : parseInt(context.params?.id || "1");
  const bookData = await fetchOneBook(bookId);
  console.log("bookData : ", bookData);
  return {
    props: { bookData },
  };
};

export default function Page({
  bookData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log("id : ", id);
  return <div>북 페이지 {bookData.title}</div>;
}
