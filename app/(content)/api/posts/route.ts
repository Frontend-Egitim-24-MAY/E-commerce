import { getAllPosts } from "@/sanity/lib/postQuery";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await getAllPosts();

  if (result?.error) {
    return NextResponse.json(result, { status: 404 });
  }

  return NextResponse.json(result, { status: 200 });
}
