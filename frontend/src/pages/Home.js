import FoodCards from "../components/Foodcards";
import Foodcarousel from "../components/Foodcarousel";
import "../style/Home.css"
const Home = () => {
  return (
    <div className="container mt-4">
      <h2>Welcome to Chatoorie 🍔</h2>
      <p className="m-1 p-2">Order your favorite food now!<btn className="btn btn-1  me-2 m-2">Order</btn></p>
      <div>
        <Foodcarousel/>
        <FoodCards/>
      </div>
    </div>
  );
};

export default Home;