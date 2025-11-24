import { fetchGithubData } from "@lib/github-contributions";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetchGithubData(8);

  return NextResponse.json(response.data, {
    status: response.status,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}
