import { createContext, useContext, useState, useCallback } from "react";
import { SAVED_RECIPES_KEY } from "../utils/storageKeys";

const SavedRecipesContext = createContext(null);

const readSaved = () => {
  try {
    const raw = localStorage.getItem(SAVED_RECIPES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const SavedRecipesProvider = ({ children }) => {
  const [savedIds, setSavedIds] = useState(readSaved);

  const persist = useCallback((next) => {
    setSavedIds(next);
    localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(next));
  }, []);

  const isSaved = useCallback((id) => savedIds.includes(id), [savedIds]);

  const toggleSaved = useCallback(
    (id) => {
      const next = savedIds.includes(id)
        ? savedIds.filter((savedId) => savedId !== id)
        : [...savedIds, id];
      persist(next);
    },
    [savedIds, persist]
  );

  const removeSaved = useCallback(
    (id) => {
      persist(savedIds.filter((savedId) => savedId !== id));
    },
    [savedIds, persist]
  );

  const value = {
    savedIds,
    count: savedIds.length,
    isSaved,
    toggleSaved,
    removeSaved,
  };

  return (
    <SavedRecipesContext.Provider value={value}>
      {children}
    </SavedRecipesContext.Provider>
  );
};

export const useSavedRecipes = () => {
  const ctx = useContext(SavedRecipesContext);
  if (!ctx) throw new Error("useSavedRecipes must be used within SavedRecipesProvider");
  return ctx;
};
