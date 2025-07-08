import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log("id : ", id);
  return <div>북 페이지 {id}</div>;
}
