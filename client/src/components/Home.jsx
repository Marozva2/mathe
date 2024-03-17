import React from "react";
import wash from "/src/assets/images/wash.jpg";
import wash1 from "/src/assets/images/wash1.jpg";
import wash2 from "/src/assets/images/wash2.jpg";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={wash} className="d-block w-full" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Professional Laundry Services</h5>
              <p>
                We provide professional laundry services for all your needs.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={wash1} className="d-block w-full" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Quick Turnaround</h5>
              <p>
                Get your laundry done quickly and efficiently with our fast
                service.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={wash2} className="d-block w-full" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Convenient Pickup and Delivery</h5>
              <p>
                Enjoy convenient pickup and delivery options for your laundry
                items.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
