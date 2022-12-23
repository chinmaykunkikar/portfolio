import { type NextRequest } from "next/server";

export type CommitShaType = {
  shortSha: "string";
};

export default async function handler(req: NextRequest) {
  const commitResponse = await fetch(
    "https://api.github.com/repos/chinmaykunkikar/portfolio/commits/next"
  );

  const commit = await commitResponse.json();

  const commitSha: string = commit.sha;
  const shortSha: string = commitSha.slice(0, 7);

  return new Response(
    JSON.stringify({
      shortSha: shortSha,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    }
  );
}
