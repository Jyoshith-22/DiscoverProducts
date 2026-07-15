# 🛍️ SWYM Storefront

A modern e-commerce storefront built using **React**, **Vite**, **Tailwind CSS**, and **Context API**. The application allows users to browse products, manage multiple wishlists, and merge wishlists with persistent local storage.

> Developed as part of the **Swym AI Proficiency Build Round**.

---

## 🚀 Features

### Store
- Browse products
- Search products
- Filter products by category
- Responsive product cards

### Wishlist Management
- Create multiple wishlists
- Rename wishlists
- Delete wishlists
- Add or remove products
- Add products to multiple wishlists
- Create a new wishlist directly from the save dialog

### Wishlist Merge
- Merge two or more wishlists
- Create a new merged wishlist
- Preserve product order
- Remove duplicate products
- Option to keep or remove original wishlists

### Persistence
- LocalStorage-based data persistence
- Wishlist data survives browser refresh

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Context API
- React Router
- LocalStorage

---

## 📂 Project Structure

```
src/
├── components/
├── context/
├── data/
├── hooks/
├── pages/
├── utils/
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

Go to the project directory

```bash
cd <repository-name>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## 📦 Build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## 🧪 Functionality Verified

- Product browsing
- Search
- Category filtering
- Wishlist creation
- Wishlist rename
- Wishlist deletion
- Add/remove products
- Multiple wishlists
- Wishlist merging
- Keep Originals option
- LocalStorage persistence
- Responsive layout

---

## 💡 Design Decisions

- Static product catalog for simplicity
- React Context API for centralized wishlist management
- LocalStorage for client-side persistence
- Pure utility functions for merge operations
- Modular component architecture

---

## 📌 Notes

- Product images use graceful placeholders if external image resources are unavailable.
- The application is fully functional without requiring a backend.

---

## 👨‍💻 Author

**Uddandi Jyoshith Sai**

GitHub: https://github.com/Jyoshith-22

