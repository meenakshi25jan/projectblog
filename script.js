const articles = [
  {
    title: "Understanding API Gateways",
    content: "Learn how API gateways manage and optimize API traffic in modern applications.",
  },
  {
    title: "Generative AI in Real World",
    content: "Explore how generative AI is revolutionizing industries with creative solutions.",
  },
];

const articleContainer = document.getElementById("articleContainer");
const searchBar = document.getElementById("searchBar");
const createArticleBtn = document.getElementById("createArticleBtn");
const createArticleModal = document.getElementById("createArticleModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const addArticleForm = document.getElementById("addArticleForm");
const articleTitleInput = document.getElementById("articleTitle");
const articleContentInput = document.getElementById("articleContent");

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

// Function to add a new article
function addArticle(event) {
  event.preventDefault();
  const newArticle = {
    title: articleTitleInput.value.trim(),
    content: articleContentInput.value.trim(),
  };

  if (newArticle.title && newArticle.content) {
    articles.push(newArticle);
    renderArticles(); // Re-render articles
    addArticleForm.reset(); // Clear form inputs
    toggleModal(false); // Close modal
  } else {
    alert("Both title and content are required!");
  }
}

// Function to toggle modal visibility
function toggleModal(show) {
  if (show) {
    createArticleModal.classList.remove("hidden");
    createArticleModal.classList.add("visible");
  } else {
    createArticleModal.classList.remove("visible");
    createArticleModal.classList.add("hidden");
  }
}

// Initial render
renderArticles();

// Add search functionality
searchBar.addEventListener("input", (e) => {
  renderArticles(e.target.value);
});

// Handle form submission
addArticleForm.addEventListener("submit", addArticle);

// Event listeners for modal
createArticleBtn.addEventListener("click", () => toggleModal(true));
closeModalBtn.addEventListener("click", () => toggleModal(false));
