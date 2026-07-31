import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./SignIn.css";

const SignIn = () => {
  const { isAuthenticated, signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const result = await signIn(email, password);
      if (result.success) {
        navigate("/");
      } else {
        setError(result.message);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="signin-page">
      <div className="signin-card">
        <div className="signin-brand">
          <span className="signin-icon" aria-hidden="true">
            🎉
          </span>
          <h1>Party Menu</h1>
        </div>
        <p className="signin-subtitle">Sign in to explore our delicious menu</p>

        {error && (
          <div className="signin-error" role="alert">
            {error}
          </div>
        )}

        <form className="signin-form" onSubmit={handleSubmit}>
          <label className="signin-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="signin-input"
            placeholder="admin@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label className="signin-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="signin-input"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary signin-submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
