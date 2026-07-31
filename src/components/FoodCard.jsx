import { useNavigate } from "react-router-dom";
import "./FoodCard.css";

const FoodCard = ({ item, onRemove }) => {
  const navigate = useNavigate();

  const goToDetail = () => navigate(`/menu/${item.id}`);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToDetail();
    }
  };

  return (
    <div
      className="food-card"
      role="button"
      tabIndex={0}
      onClick={goToDetail}
      onKeyDown={handleKeyDown}
    >
      <div className="food-card-media">
        <img src={item.image} alt={item.name} loading="lazy" />
        <span className={`badge ${item.isVeg ? "badge-veg" : "badge-nonveg"} food-card-diet`}>
          {item.isVeg ? "Veg" : "Non-Veg"}
        </span>
      </div>
      <div className="scallop-edge" aria-hidden="true" />
      <div className="food-card-body">
        <span className="food-card-category">{item.category}</span>
        <h3 className="food-card-name">{item.name}</h3>
        <p className="food-card-description">{item.description}</p>
        <div className="food-card-footer">
          <span className="food-card-servings">{item.servings}</span>
          {onRemove && (
            <button
              type="button"
              className="btn btn-outline food-card-remove"
              onClick={(event) => {
                event.stopPropagation();
                onRemove(item.id);
              }}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
