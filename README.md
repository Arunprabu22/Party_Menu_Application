# Party Menu Application

A responsive food discovery app built with React 19, React Router 7, and Vite 6. Users
sign in via a live authentication API, then browse, filter, and save dishes from a
curated party menu.

## Features

- **Sign In** — authenticates against `POST /api/auth/signin`; stores the token and
  user object in local storage on success.
- **Protected Menu route (`/`)** — redirects to `/signin` if no token is present.
- **Category & diet filters, name search** — filtered entirely on the client against
  static menu data (`src/data/menuData.js`).
- **Food Detail (`/menu/:id`)** — full description, ingredients, and a save/unsave toggle.
- **Saved Recipes (`/saved-recipes`)** — persisted in local storage, with remove support.
- **404 page** — routes to Menu or Sign In depending on auth state.

## Tech Stack

React 19 · React Router DOM 7 · Vite 6 · Plain CSS

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Test Credentials

| Field    | Value              |
| -------- | ------------------ |
| Email    | admin@example.com  |
| Password | admin123           |

## Local Storage Keys

| Data          | Key                         |
| ------------- | ---------------------------- |
| Auth token    | `party_menu_token`           |
| User data     | `party_menu_user`            |
| Saved recipes | `party_menu_saved_recipes`   |

## Project Structure

```
src/
  components/   FoodCard, FilterBar, Header, ProtectedRoute
  context/      AuthContext, SavedRecipesContext
  data/         menuData.js (static data + filterMenuItems/getMenuItemById)
  pages/        SignIn, Menu, FoodDetail, SavedRecipes, NotFound
  utils/        storageKeys.js
```

## Notes

- Menu data in `src/data/menuData.js` is placeholder data written to the exact schema
  specified in the assessment — swap in the real dataset and no other code changes
  are needed.
- Only the sign-in flow calls a live API; menu data is fully static and needs no API key.
