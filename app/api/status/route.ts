import { NextResponse } from "next/server";
import { getOpenStatus } from "@/lib/hours";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  const status = getOpenStatus();
  return NextResponse.json(status, {
    headers: {
      "Cache-Control": "public, max-age=60, s-maxage=60",
    },
  });
}
