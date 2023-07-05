import { createPage, getPage } from "@/service/page";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await getPage();
  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const response = await createPage();
  return NextResponse.json(response);
}
