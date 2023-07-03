import { getDatabase } from "@/service/notion";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const response = await getDatabase();
  return NextResponse.json(response);
}
