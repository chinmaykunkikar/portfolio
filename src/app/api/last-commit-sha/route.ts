import { NextResponse } from "next/server";

const REPO_COMMIT_INFO_URL =
  "https://api.github.com/repos/chinmaykunkikar/portfolio/commits/next";
const FIRST_COMMIT_SHA = "5b77381";

export async function GET() {
  try {
    const response = await fetch(REPO_COMMIT_INFO_URL);

    if (response.status === 200) {
      const data = await response.json();
      const latestCommitSHA = data.sha.slice(0, 7);
      return NextResponse.json({ sha: latestCommitSHA }, { status: 200 });
    }

    if (response.status === 403) {
      const ratelimitReset = parseInt(
        response.headers.get("x-ratelimit-reset") || "0",
        10,
      );
      const currentTime = Math.floor(Date.now() / 1000);

      if (ratelimitReset > currentTime) {
        const waitTime = ratelimitReset - currentTime;
        console.warn(
          `Rate limit exceeded. Please wait for ${waitTime} seconds.`,
        );
        return NextResponse.json({ sha: FIRST_COMMIT_SHA }, { status: 429 });
      }

      console.error(
        "Rate limit exceeded, but reset time has already passed.",
      );
      return NextResponse.json({ sha: FIRST_COMMIT_SHA }, { status: 429 });
    }

    console.error(
      "Unexpected response:",
      response.status,
      response.statusText,
    );
    return NextResponse.json({ sha: FIRST_COMMIT_SHA }, { status: 500 });
  } catch (error) {
    console.error("Error fetching latest commit SHA:", error);
    return NextResponse.json({ sha: FIRST_COMMIT_SHA }, { status: 500 });
  }
}
