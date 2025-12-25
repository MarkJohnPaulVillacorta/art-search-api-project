# art-search-api-project
A responsive web application that allows users to search artworks using the Art Institute of Chicago API, featuring favorites, dark/light mode, and interactive UI effects.

# 🎨 Art Search Web Application

## 📌 Project Overview

The **Art Search Web Application** is a responsive web-based project that allows users to search for artworks using the **Art Institute of Chicago API**.
Users can view artworks with images, add or remove favorites, switch between dark and light mode, and experience smooth UI interactions such as hover effects and animations.

This project is built using **HTML, CSS, and JavaScript** and demonstrates proper API usage, DOM manipulation, error handling, and responsive design.

---

## ✨ Features

* 🔍 Search artworks by keyword
* 🖼️ Display artwork images with title, artist, and date
* ⭐ Add and remove favorite artworks
* 💾 Favorites saved using `localStorage`
* 🌙 Dark Mode / ☀️ Light Mode toggle
* 🫧 Bubble hover animation effects
* ⏳ Loading indicator while fetching data
* ❌ Clear button to reset search and input field
* 📱 Responsive layout (3 cards per row)

---

## 🔗 API Information

**API Name:** Art Institute of Chicago API

**Base URL:**
[https://api.artic.edu/api/v1](https://api.artic.edu/api/v1)

**Endpoint Used:**
`/artworks/search`

### 📥 Required Parameters

* `q` – search keyword
* `limit` – number of results returned
* `has_image` – ensures artworks have images
* `fields` – selected artwork details

### 🔐 Authentication

❌ No API key required

---

## 📄 Sample JSON Response (Used Fields Only)

```json
{
  "data": [
    {
      "id": 27992,
      "title": "The Scream",
      "artist_display": "Edvard Munch",
      "image_id": "abc123",
      "date_display": "1895"
    }
  ]
}
```

---

## ⚙️ How the Data is Fetched (JavaScript)

* Uses `fetch()` with `async/await`
* Handles loading state and errors
* Displays results dynamically using DOM manipulation

---

## 🖥️ Display Method (DOM)

Artworks are displayed as:

* 📦 Cards
* 🖼️ Images
* 📝 Text details
* ⭐ Favorite buttons

Favorites are displayed in a separate section below the search results.

---

## ⚠️ Error Handling

The application handles:

* Empty search input
* No results found
* Failed API request
* Loading state while fetching data

---

## ✅ Input Validation

* Prevents empty searches
* Trims whitespace from input
* Clears input and results when clicking **Clear**
* Disables unnecessary actions during loading

---

## ⏳ Loading State

Displays a **“Loading…”** message while fetching data from the API.

---

## 📱 Responsive Design

* Works properly on desktop browsers
* Uses CSS Grid (3 cards per row)
* Smooth scrolling inside the container

---

## 🗂️ Project Structure

```
art-search/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📝 Code Documentation

All JavaScript functions are properly commented to explain:

* API fetching
* Rendering results
* Favorite logic
* Theme toggling
* Local storage usage

---

## 📚 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Art Institute of Chicago API

---

## 📌 Author

**Student Project – API Integration**
**Course Requirement: Elective / Integrative Programming**

---

## 🔗 API Source

Art Institute of Chicago API
[https://api.artic.edu](https://api.artic.edu)
