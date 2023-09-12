import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const REPO_COMMIT_INFO_URL =
    "https://api.github.com/repos/chinmaykunkikar/portfolio/commits/next";
  const FIRST_COMMIT_SHA = "5b77381";

  const response = await fetch(REPO_COMMIT_INFO_URL);

  if (response.status === 200) {
    const data = await response.json();
    const latestCommitSHA = data.sha.slice(0, 7);
    return res.status(200).json({ sha: latestCommitSHA });
  } else if (response.status === 403) {
    const ratelimitReset = parseInt(
      response.headers.get("x-ratelimit-reset") || "0",
      10,
    );
    const currentTime = Math.floor(Date.now() / 1000);
    if (ratelimitReset > currentTime) {
      const waitTime = ratelimitReset - currentTime;
      console.warn(`Rate limit exceeded. Please wait for ${waitTime} seconds.`);
      return res.status(429).json({ sha: FIRST_COMMIT_SHA });
    } else {
      console.error("Rate limit exceeded, but reset time has already passed.");
      return res.status(429).json({ sha: FIRST_COMMIT_SHA });
    }
  } else {
    console.error("Unexpected response:", response.status, response.statusText);
    return res.status(500).json({ sha: FIRST_COMMIT_SHA });
  }
}
