import { getSinglePost } from "@/sanity/lib/postQuery";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const result = await getSinglePost(slug);

  if (result?.error) {
    return NextResponse.json(result, { status: 404 });
  }

  return NextResponse.json(result, { status: 200 });
}
