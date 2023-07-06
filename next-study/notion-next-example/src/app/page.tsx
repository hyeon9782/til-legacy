"use client";

import { search } from "@/service/search";
import axios from "axios";
// import { useRouter } from "next/router";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = async () => {
    console.log("클릭");
    try {
      const res = await axios.post("/api/notion");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const createPage = async () => {
    try {
      const res = await axios.post("/api/page");
      console.log(res);
      console.log(res.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const saerch = async () => {
    try {
      const res = await axios.post("/api/search");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const auth = async () => {
    const code = window.location.search.slice(1).split("&")[0].split("=")[1];
    console.log(router);
    console.log(pathname);
    console.log(code);

    const res = await axios.post("/api/auth", code);
    console.log(res);
  };
  return (
    <div>
      <button onClick={handleClick}>테스트</button>
      <button onClick={createPage}>페이지 생성</button>
      <button onClick={saerch}>검색하기</button>
      <button onClick={auth}>권한</button>
      {/* <Link href={process.env.NOTION_AUTH_URL}>Add to Notion</Link> */}
      <a href={process.env.NOTION_AUTH_URL}>Add to Notion</a>
    </div>
  );
}
