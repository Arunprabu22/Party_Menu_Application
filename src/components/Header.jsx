import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSavedRecipes } from "../context/SavedRecipesContext";
import "./Header.css";

const Header = () => {
  const { user, isAuthenticated, signOut } = useAuth();
  const { count } = useSavedRecipes();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/signin");
  };

  return (
    <header className="app-header">
      <div className="container app-header-inner">
        <div className="app-header-left">
          <Link to={isAuthenticated ? "/" : "/signin"} className="app-header-brand">
            🎉 Party Menu
          </Link>
          {user && <span className="app-header-welcome">Welcome, {user.name}</span>}
        </div>

        <div className="app-header-right">
          <Link to="/saved-recipes" className="app-header-saved">
            Saved Recipes
            <span className="app-header-badge">{count}</span>
          </Link>
          {isAuthenticated && (
            <button type="button" className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
      <div className="garland" aria-hidden="true" />
    </header>
  );
};

export default Header;
