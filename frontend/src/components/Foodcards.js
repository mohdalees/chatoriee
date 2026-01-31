import React from "react";
import"../style/Card.css"

const foodData = [
  {
    name: "Cheese Pizza",
    price: "₹199",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
  },
  {
    name: "Veg Burger",
    price: "₹149",
    image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
  },
  {
    name: "Chicken Biryani",
    price: "₹249",
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
  },
  {
    name: "Pasta",
    price: "₹179",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
  },
];

const Foodcards = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Famous Foods</h2>

      <div className="row">
        {foodData.map((food, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="card h-100 shadow">
              <img
                src={food.image}
                className="card-img-top"
                alt={food.name}
                height="180"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text fw-bold text-success">
                  {food.price}
                </p>
                <button className="btn btn-warning w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foodcards;
