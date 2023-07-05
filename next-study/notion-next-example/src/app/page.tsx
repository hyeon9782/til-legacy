"use client";

import { search } from "@/service/search";
import axios from "axios";

export default function Home() {
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
  return (
    <div>
      <button onClick={handleClick}>테스트</button>
      <button onClick={createPage}>페이지 생성</button>
      <button onClick={saerch}>검색하기</button>
    </div>
  );
}
