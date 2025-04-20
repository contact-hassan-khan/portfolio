const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA === "true";
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

// GitHub data fetching
if (USE_GITHUB_DATA) {
  if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
    console.error("❌ ERROR: Missing GitHub credentials in .env file");
    process.exit(1);
  }

  console.log(`📦 Fetching GitHub profile for '${GITHUB_USERNAME}'...`);

  const githubQuery = JSON.stringify({
    query: `
      {
        user(login: "${GITHUB_USERNAME}") {
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

  const githubOptions = {
    hostname: "api.github.com",
    path: "/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Portfolio-Builder",
      "Content-Type": "application/json",
      "Content-Length": githubQuery.length
    }
  };

  const githubReq = https.request(githubOptions, (res) => {
    let body = "";

    res.on("data", (chunk) => (body += chunk));
    res.on("end", () => {
      try {
        const parsedBody = JSON.parse(body);
        if (parsedBody.errors) {
          console.error("❌ GitHub API Error:", parsedBody.errors);
          process.exit(1);
        }
        fs.writeFileSync("./public/profile.json", body);
        console.log("✅ GitHub profile saved successfully");
      } catch (err) {
        console.error("❌ Response parsing error:", err);
        process.exit(1);
      }
    });
  });

  githubReq.on("error", (err) => {
    console.error("❌ GitHub Request Failed:", err);
    process.exit(1);
  });

  githubReq.write(githubQuery);
  githubReq.end();
}

// Medium blog fetching
if (MEDIUM_USERNAME) {
  console.log(`📰 Fetching Medium blogs for @${MEDIUM_USERNAME}...`);

  const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
  const encodedRssUrl = encodeURIComponent(rssUrl);
  
  const mediumOptions = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=${encodedRssUrl}`,
    method: "GET",
    headers: {
      "User-Agent": "Portfolio-Builder"
    }
  };

  const mediumReq = https.request(mediumOptions, (res) => {
    let data = "";

    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
      try {
        const parsedData = JSON.parse(data);
        if (parsedData.status === "error") {
          console.error(`❌ Medium Error: ${parsedData.message}`);
          return;
        }
        if (parsedData.items.length === 0) {
          console.log("ℹ️ No Medium posts found");
          return;
        }
        fs.writeFileSync("./public/blogs.json", data);
        console.log("✅ Medium blogs saved successfully");
      } catch (err) {
        console.error("❌ Medium Response Error:", err);
      }
    });
  });

  mediumReq.on("error", (err) => {
    console.error("❌ Medium Request Failed:", err);
  });

  mediumReq.end();
} else {
  console.log("ℹ️ Skipping Medium integration");
}