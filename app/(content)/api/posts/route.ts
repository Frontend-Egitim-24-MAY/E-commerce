import { getAllPosts } from "@/sanity/lib/postQuery";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const result = await getAllPosts();
  return NextResponse.json(result);
}
