const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA === "true";
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

if (USE_GITHUB_DATA && (!GITHUB_USERNAME || !GITHUB_TOKEN)) {
  console.error("❌ ERROR: Please set GITHUB_USERNAME and REACT_APP_GITHUB_TOKEN in .env file");
  process.exit(1);
}

if (USE_GITHUB_DATA) {
  console.log(`📦 Fetching GitHub profile for '${GITHUB_USERNAME}'...`);

  const githubQuery = JSON.stringify({
    query: `
    {
      user(login:"${GITHUB_USERNAME}") {
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers { totalCount }
                url
                id
                diskUsage
                primaryLanguage { name color }
              }
            }
          }
        }
      }
    }
    `
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Type": "application/json"
    }
  };

  const req = https.request(options, res => {
    let body = "";

    res.on("data", chunk => (body += chunk));
    res.on("end", () => {
      if (res.statusCode === 200) {
        fs.writeFileSync("./public/profile.json", body);
        console.log("✅ GitHub profile saved to public/profile.json");
      } else {
        console.error("❌ GitHub API request failed:", res.statusCode, body);
      }
    });
  });

  req.on("error", err => console.error("❌ Request error:", err));
  req.write(githubQuery);
  req.end();
}

// Medium blog fetch (optional)
if (MEDIUM_USERNAME) {
  console.log(`📰 Fetching Medium blogs for @${MEDIUM_USERNAME}...`);

  const encodedMediumUsername = encodeURIComponent(MEDIUM_USERNAME); // URL encode the username

  const mediumOptions = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${encodedMediumUsername}`, // Using the encoded username in the URL
    method: "GET"
  };

  const req = https.request(mediumOptions, res => {
    let blogData = "";

    res.on("data", chunk => (blogData += chunk));
    res.on("end", () => {
      if (res.statusCode === 200) {
        fs.writeFileSync("./public/blogs.json", blogData);
        console.log("✅ Medium blogs saved to public/blogs.json");
      } else {
        console.error("❌ Medium API failed:", res.statusCode);
      }
    });
  });

  req.on("error", err => console.error("❌ Medium fetch error:", err));
  req.end();
} else {
  console.log("ℹ️ Skipping Medium fetch (no MEDIUM_USERNAME set).");
}
