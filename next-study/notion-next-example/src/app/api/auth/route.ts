import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  //   console.log(req);
  console.log("----------------------Route입니다-----------------------");
  console.log(req.body);
  //   console.log(req.url.search);
  const options = {
    method: "POST",
    url: "https://api.notion.com/v1/oauth/token",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    data: {
      grant_type: '"authorization_code"',
      code: "453277f8-c022-484a-9e89-7275834b2d4d",
      redirect_url: "http://localhost:3000",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return;
}
