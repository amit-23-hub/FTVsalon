// src/components/ReviewPage.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewPage.css";

// Custom Next Arrow Component
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "45%",
      }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow Component
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "45%",
      }}
      onClick={onClick}
    />
  );
}

function ReviewPage() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <h2 className="text-center text-2xl font-bold mt-10">Customers Review</h2>
      <p className="text-center text-gray-500 mb-8">What our customers say about our template</p>

      <div className="card">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className={`review-card h-[420px] text-black rounded-xl shadow-lg ${d.bgColor}`}>
              <div className="card-header h-36 flex justify-center items-center rounded-t-xl relative">
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-24 w-24 rounded-full absolute top-2 left-2 border-4 border-white"
                />
                <div className="rating-circle absolute top-2 right-2 text-white text-lg p-2 rounded-full bg-pink-500">
                  {d.rating}
                </div>
                {d.stars && (
                  <div className="star-rating absolute top-20 right-2 flex items-center bg-yellow-400 text-white px-2 py-1 rounded-full">
                    {d.stars} &#9733;
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center justify-center gap-2 p-4">
                <p className="text-lg font-bold">{d.name}</p>
                <p className="text-sm text-gray-500">{d.company}</p>
                <p className="text-center text-gray-700 font-medium">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

// Sample data with correct image paths
const data = [
  {
    name: "Ana Rhodes",
    img: "/images/John_Morgan.jpg", // Path adjusted for root directory
    review: "Amazing Template. Clean and commented code, beautiful design, and really not hard to work with.",
    company: "Google",
    rating: "66",
    stars: 4,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Morris Clarke",
    img: "/images/Ellie_Anderson.jpg",  // Path adjusted for root directory
    review: "Amazing Template. Clean and commented code, beautiful design, and really not hard to work with.",
    company: "IBM",
    rating: "66",
    bgColor: "bg-white",
  },
  {
    name: "John Doe",
    img: "/images/Nia_Adebayo.jpg",  // Path adjusted for root directory
    review: "Amazing Template. Clean and commented code, beautiful design, and really not hard to work with.",
    company: "Microsoft",
    rating: "65",
    stars: 4.5,
    bgColor: "bg-black text-white",
  },
  {
    name: "Emily Jane",
    img: "/images/Nia_Adebayo.jpg",  // Path adjusted for root directory
    review: "Amazing Template. Clean and commented code, beautiful design, and really not hard to work with.",
    company: "Apple",
    rating: "68",
    stars: 4.8,
    bgColor: "bg-pink-500 text-white",
  },
];

export default ReviewPage;
