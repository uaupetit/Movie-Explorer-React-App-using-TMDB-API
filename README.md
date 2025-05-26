# 🎬 Movie Explorer – Fleet Study Case

A simple React application to browse and search movies using [The Movie Database (TMDB)](https://www.themoviedb.org/)'s public API.  
Created as part of the **Fleet Study Case** for a fullstack developer internship.

---

## 🚀 Features

- View **popular movies** from TMDB  
- **Search bar** with real-time suggestions powered by the TMDB API  
- Click on a movie to see a **detailed popup** (poster, title, release date, rating, overview)  
- **Responsive** grid layout with hover effects  
- “Load More” button to paginate through additional results  

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get a TMDB API key

You’ll need an API key from [The Movie Database](https://www.themoviedb.org/) to connect to the API.

**Steps:**

1. Go to [https://www.themoviedb.org/](https://www.themoviedb.org/) and create an account  
2. Visit your [API settings](https://www.themoviedb.org/settings/api)  
3. Apply for a Developer API key (v3 auth)  
4. Once approved, copy your API key

### 4. Configure your environment

Create a file named `.env` at the root of the project, and add your API key like this:

```env
REACT_APP_API_KEY=your_api_key_here
```

Or copy the example file:

```bash
cp .env.example .env
```

### 5. Start the development server

```bash
npm start
```

Then open your browser at: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
movie-explorer/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env.example
└── README.md
```

---

## 📦 Dependencies

- React
- Axios

---

## 🧪 Notes

This project uses the public TMDB API. For more information, visit the [official TMDB documentation](https://developers.themoviedb.org/3).

---
