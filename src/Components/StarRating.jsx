import React, { useState } from 'react'
import {AiFillStar } from "react-icons/ai"
const StarRating = ({initialRating }) => {

    // const [rating, setRating] = useState(initialRating);

    
    return (
        <div className="star-rating">
           {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span key={index}>
            <AiFillStar color={index <= initialRating ? 'yellow' : 'grey'} />
          </span>
        );
      })}
        </div>
      );
      
}

export default StarRating