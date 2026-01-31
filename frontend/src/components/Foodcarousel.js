import "../style/Carousel.css"
const FoodCarousel = () => {
  return (
    <div
      id="foodCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="carousel-overlay"></div>
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            className="d-block w-100 carousel-img"
            alt="Food"
          />
          <div className="carousel-caption">
            <h2 className="fw-bold">Delicious Meals</h2>
            <p>Fresh • Hot • Tasty</p>
            <button className="btn btn-warning px-4">
              Order Now
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
            className="d-block w-100 carousel-img"
            alt="Burger"
          />
          <div className="carousel-caption">
            <h2 className="fw-bold">Juicy Burgers 🍔</h2>
            <p>Best taste in town</p>
            <button className="btn btn-warning px-4">
              Explore Menu
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="carousel-overlay"></div>
          <img
            src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
            className="d-block w-100 carousel-img"
            alt="Pizza"
          />
          <div className="carousel-caption">
            <h2 className="fw-bold">Cheesy Pizza 🍕</h2>
            <p>Made with love</p>
            <button className="btn btn-warning px-4">
              View Offers
            </button>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#foodCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#foodCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default FoodCarousel;
