import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState([]); 

  const handleMouseEnter = (index) => {
    setRating(index + 1);
  };

  const handleMouseLeave = () => {
    setRating(0);
  };

  const handleClick = (index) => {
    setReview([...review, index + 1]);
  };

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {rating > index || review.includes(index + 1) ? (
            <FaStar color="gold" />
          ) : (
            <FaRegStar color="gray" />
          )}
        </span>
      ))}
      <div>
        <ul>
          {review.map((num, index) => (
            <li key={index}>{num} stars</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StarRating;
