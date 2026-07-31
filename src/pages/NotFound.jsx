import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./NotFound.css";

const NotFound = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main className="notfound-page">
      <div className="notfound-card">
        <span className="notfound-emoji" aria-hidden="true">
          🍽️
        </span>
        <h1>404 – Page Not Found</h1>
        <p>This dish isn't on today's menu.</p>
        <Link to={isAuthenticated ? "/" : "/signin"} className="btn btn-primary">
          {isAuthenticated ? "Back to Menu" : "Go to Sign In"}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
