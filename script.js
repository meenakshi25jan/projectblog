const articles = [
  {
    title: "Understanding API Gateways",
    content: "Learn how API gateways manage and optimize API traffic in modern applications.",
  },
  {
    title: "Generative AI in Real World",
    content: "Explore how generative AI is revolutionizing industries with creative solutions.",
  },
  {
    title: "Discriminative AI in Automobiles",
    content: "Discover how discriminative AI enhances safety and efficiency in autonomous vehicles.",
  },
  {
    title: "Top 6 Architectural Patterns",
    content: "Unveil the most effective software architecture patterns for scalable solutions.",
  },
  {
    title: "REST API Best Practices",
    content: "Master the dos and don'ts of designing robust REST APIs in Spring Boot.",
  },
];

const articleContainer = document.getElementById("articleContainer");
const searchBar = document.getElementById("searchBar");

// Function to render articles
function renderArticles(filter = "") {
  articleContainer.innerHTML = "";
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredArticles.length === 0) {
    articleContainer.innerHTML = `<p>No articles found.</p>`;
    return;
  }

  filteredArticles.forEach(article => {
    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    articleCard.innerHTML = `
      <h2 class="article-title">${article.title}</h2>
      <p class="article-content">${article.content}</p>
    `;
    articleContainer.appendChild(articleCard);
  });
}

// Initial render
renderArticles();

// Add search functionality
searchBar.addEventListener("input", (e) => {
  renderArticles(e.target.value);
});
