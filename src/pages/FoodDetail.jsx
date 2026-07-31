import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { getMenuItemById } from "../data/menuData";
import { useSavedRecipes } from "../context/SavedRecipesContext";
import "./FoodDetail.css";

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isSaved, toggleSaved } = useSavedRecipes();

  const item = getMenuItemById(id);

  if (!item) {
    return (
      <div className="page">
        <Header />
        <main className="container detail-notfound">
          <h2>Dish not found</h2>
          <p>We couldn't find that dish on the menu.</p>
          <Link to="/" className="btn btn-primary">
            Back to Menu
          </Link>
        </main>
      </div>
    );
  }

  const saved = isSaved(item.id);

  return (
    <div className="page">
      <Header />
      <main className="container detail-main">
        <div className="detail-actions-top">
          <button type="button" className="btn btn-ghost" onClick={() => navigate("/")}>
            ← Back to Menu
          </button>
          <Link to="/saved-recipes" className="btn btn-ghost">
            Saved Recipes
          </Link>
        </div>

        <div className="detail-card">
          <div className="detail-hero">
            <img src={item.image} alt={item.name} />
          </div>

          <div className="detail-body">
            <div className="detail-badges">
              <span className="badge" style={{ background: "var(--marigold)", color: "var(--ink-plum)" }}>
                {item.category}
              </span>
              <span className={`badge ${item.isVeg ? "badge-veg" : "badge-nonveg"}`}>
                {item.isVeg ? "Veg" : "Non-Veg"}
              </span>
            </div>

            <h1 className="detail-name">{item.name}</h1>
            <p className="detail-servings">{item.servings}</p>

            <p className="detail-description">{item.fullDescription}</p>

            <h3 className="detail-subheading">Ingredients</h3>
            <ul className="detail-ingredients">
              {item.ingredients.map((ingredient) => (
                <li key={ingredient.name}>
                  <span>{ingredient.name}</span>
                  <span className="detail-ingredient-qty">{ingredient.quantity}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`btn ${saved ? "btn-outline" : "btn-primary"} detail-save-btn`}
              onClick={() => toggleSaved(item.id)}
            >
              {saved ? "★ Saved" : "☆ Save Recipe"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FoodDetail;
