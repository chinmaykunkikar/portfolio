# GitHub Contributions Graph - Token Setup Guide

## Problem
The GitHub contributions graph is not showing private contributions.

## Solution
You need to configure a GitHub Personal Access Token with the correct permissions.

## Step-by-Step Setup

### 1. Generate a GitHub Personal Access Token

1. Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Click **"Generate new token"** (classic)
3. Give your token a descriptive name (e.g., "Portfolio Site")
4. Select the **`read:user`** scope (this is required for accessing private contributions)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't be able to see it again)

### 2. Add Token to Your Environment

1. Create a `.env.local` file in the project root (if it doesn't exist):
   ```bash
   cp .env.example .env.local
   ```

2. Add your token to `.env.local`:
   ```env
   GITHUB_READ_USER_TOKEN_PERSONAL=ghp_your_token_here
   ```

### 3. Restart Your Development Server

```bash
npm run dev
# or
bun dev
```

## What Changed in the Code

The GraphQL query was updated to include private contributions:

```diff
contributionsCollection(
  from: $startDate, 
  to: $today,
+ includePrivateContributions: true
)
```

## Verification

After setting up the token, your contributions graph should show:
- ✅ Public contributions (as before)
- ✅ Private contributions (newly enabled)

## Troubleshooting

### Token not working?
- Make sure the token has the `read:user` scope
- Verify the token is correctly added to `.env.local`
- Restart your development server after adding the token
- Check for any whitespace in the token value

### Still not seeing private contributions?
- Verify you actually have private contributions in the selected time period
- Check the browser console for any API errors
- Verify the token hasn't expired

## Security Notes

- ⚠️ Never commit your `.env.local` file
- ⚠️ Never share your personal access token
- ⚠️ The `.env.local` file is already in `.gitignore`
- ✅ Tokens can be revoked at any time from GitHub settings

## References

- [GitHub GraphQL API - ContributionsCollection](https://docs.github.com/en/graphql/reference/objects#contributionscollection)
- [GitHub Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
