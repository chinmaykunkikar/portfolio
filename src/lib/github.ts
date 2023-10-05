const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql";
const GITHUB_USERNAME = "chinmaykunkikar";
const GITHUB_USER_QUERY = `query ($username: String!, $startDate: DateTime!, $today: DateTime!) {
  user(login: $username) {
    contributionsCollection(from: $startDate, to: $today) {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export const fetchGithubData = async (lastNWeeks: number) => {
  const headers = {
    Authorization: `bearer ${process.env.GITHUB_READ_USER_TOKEN_PERSONAL}`,
  };

  const today = new Date().toISOString().split("T")[0] + "T00:00:00";

  const startDate = new Date();
  const currentDayOfWeek = startDate.getUTCDay();
  const daysToPreviousSunday = currentDayOfWeek === 0 ? 7 : currentDayOfWeek;
  startDate.setDate(
    startDate.getDate() - daysToPreviousSunday - lastNWeeks * 7,
  );
  const startDateISO = startDate.toISOString().split("T")[0] + "T00:00:00";

  const requestBody = {
    query: GITHUB_USER_QUERY,
    variables: {
      username: GITHUB_USERNAME,
      startDate: startDateISO,
      today: today,
    },
  };

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(GITHUB_USER_ENDPOINT, requestOptions);
    const status = response.status;
    const responseJson = await response.json();

    if (status > 400) {
      return { status, data: {} };
    }

    return { status, data: responseJson.data.user };
  } catch (error) {
    console.error("Error:", error);
    return { status: 500, data: {} };
  }
};
