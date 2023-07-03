"use client";

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
  return (
    <div>
      <button onClick={handleClick}>테스트</button>
    </div>
  );
}
