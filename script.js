const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const results = document.getElementById("results");
const favoritesBox = document.getElementById("favorites");
const message = document.getElementById("message");
const loadMoreBtn = document.getElementById("loadMore");
const themeToggle = document.getElementById("themeToggle");

let allArtworks = [];
let visible = 6;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

/* THEME TOGGLE + ICON */
themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
};

/* SEARCH */
searchBtn.onclick = () => {
  const q = searchInput.value.trim();
  if (!q) return;
  fetchArt(q);
};

/* CLEAR (input + results) */
clearBtn.onclick = () => {
  searchInput.value = "";
  results.innerHTML = "";
  message.textContent = "";
  loadMoreBtn.style.display = "none";
};

/* FETCH */
async function fetchArt(q) {
  message.textContent = "Loading...";
  const url = `https://api.artic.edu/api/v1/artworks/search?q=${q}&limit=24&has_image=true&fields=id,title,artist_display,image_id,date_display`;
  const res = await fetch(url);
  const data = await res.json();

  allArtworks = data.data || [];
  visible = 6;
  renderResults();
  message.textContent = "";
}

/* RESULTS */
function renderResults() {
  results.innerHTML = "";
  allArtworks.slice(0, visible).forEach(art => {
    results.appendChild(createCard(art, false));
  });
  loadMoreBtn.style.display = visible < allArtworks.length ? "block" : "none";
}

loadMoreBtn.onclick = () => {
  visible += 6;
  renderResults();
};

/* FAVORITES */
function toggleFavorite(art) {
  const exists = favorites.find(f => f.id === art.id);
  favorites = exists
    ? favorites.filter(f => f.id !== art.id)
    : [...favorites, art];

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
  renderResults();
}

function renderFavorites() {
  favoritesBox.innerHTML = "";
  favorites.forEach(art => {
    favoritesBox.appendChild(createCard(art, true));
  });
}

function createCard(art, isFav) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = `https://www.artic.edu/iiif/2/${art.image_id}/full/600,/0/default.jpg`;

  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = `
    <strong>${art.title}</strong><br>
    ${art.artist_display || "Unknown"}<br>
    ${art.date_display || ""}
  `;

  const btn = document.createElement("button");
  btn.className = "favorite-btn";
  btn.textContent = isFav ? "❌ Remove Favorite" : "⭐ Add Favorite";
  btn.onclick = () => toggleFavorite(art);

  info.appendChild(btn);
  card.append(img, info);
  return card;
}

renderFavorites();
