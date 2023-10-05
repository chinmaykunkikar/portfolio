import { fetchGithubData } from "@lib/github";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await fetchGithubData(7);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30",
  );

  return res.status(response.status).json(response.data);
}
