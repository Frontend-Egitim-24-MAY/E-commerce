import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ test: string }> }
) {
  const { test } = await params;

  return NextResponse.json({ message: test, error: null }, { status: 200 });
}
