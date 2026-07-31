import { useMemo, useState } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import FoodCard from "../components/FoodCard";
import { filterMenuItems } from "../data/menuData";
import "./Menu.css";

const Menu = () => {
  const [category, setCategory] = useState("all");
  const [diet, setDiet] = useState("all");
  const [name, setName] = useState("");

  const results = useMemo(
    () => filterMenuItems({ category, diet, name }),
    [category, diet, name]
  );

  return (
    <div className="page menu-page">
      <Header />
      <main className="container menu-main">
        <FilterBar
          category={category}
          diet={diet}
          onCategoryChange={setCategory}
          onDietChange={setDiet}
          onSearch={setName}
        />

        <div className="menu-results-heading">
          <span>{results.length} items found</span>
        </div>

        {results.length === 0 ? (
          <div className="menu-empty">
            <p>No dishes found. Try different filters.</p>
          </div>
        ) : (
          <div className="menu-grid">
            {results.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Menu;
