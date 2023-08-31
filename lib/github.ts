export async function getLatestCommitSHA() {
  const apiUrl =
    "https://api.github.com/repos/chinmaykunkikar/portfolio/commits/next";
  let response;

  try {
    response = await fetch(apiUrl);
  } catch (error) {
    console.error("Error fetching commit:", error);
    return null;
  }

  if (response.status === 200) {
    const data = await response.json();
    return data.sha.slice(0, 7);
  } else if (response.status === 403) {
    const ratelimitReset = parseInt(
      response.headers.get("x-ratelimit-reset") || "0",
      10,
    );
    const currentTime = Math.floor(Date.now() / 1000);

    if (ratelimitReset > currentTime) {
      const waitTime = ratelimitReset - currentTime;
      console.warn(`Rate limit exceeded. Please wait for ${waitTime} seconds.`);
      return null;
    } else {
      console.error("Rate limit exceeded, but reset time has already passed.");
      return null;
    }
  } else {
    console.error("Unexpected response:", response.status, response.statusText);
    return null;
  }
}
