import { search } from "@/service/search";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const response = await search();
  return NextResponse.json(response);
}
