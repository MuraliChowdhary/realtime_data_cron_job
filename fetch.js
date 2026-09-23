const fs = require("fs");

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await response.json();

  const data = {
    fetchedAt: new Date().toISOString(),
    posts: posts,
  };

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  console.log(`Fetched ${posts.length} posts`);
}

fetchPosts();