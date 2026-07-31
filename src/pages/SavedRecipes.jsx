import { Link } from "react-router-dom";
import Header from "../components/Header";
import FoodCard from "../components/FoodCard";
import { menuItems } from "../data/menuData";
import { useSavedRecipes } from "../context/SavedRecipesContext";
import "./SavedRecipes.css";

const SavedRecipes = () => {
  const { savedIds, removeSaved } = useSavedRecipes();

  const savedItems = menuItems.filter((item) => savedIds.includes(item.id));

  return (
    <div className="page">
      <Header />
      <main className="container saved-main">
        <Link to="/" className="btn btn-ghost saved-back">
          ← Back to Menu
        </Link>

        <div className="saved-heading">
          <h1>Saved Recipes</h1>
          <p>
            {savedItems.length} {savedItems.length === 1 ? "recipe" : "recipes"} saved
          </p>
        </div>

        {savedItems.length === 0 ? (
          <div className="saved-empty">
            <p>No saved recipes yet</p>
            <Link to="/" className="btn btn-primary">
              Browse the menu
            </Link>
          </div>
        ) : (
          <div className="menu-grid">
            {savedItems.map((item) => (
              <FoodCard key={item.id} item={item} onRemove={removeSaved} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default SavedRecipes;
