import { getPage } from "@/service/page";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await getPage();
  return NextResponse.json(response);
}
