import React from "react";

const SkillsContents = ({ title, rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i className="fas fa-star text-warning "></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i className="fas fa-star-half-alt text-warning "></i>);
    } else {
      stars.push(<i className="far fa-star text-warning "></i>);
    }
  }

  return (
    <div className="skill">
      <p className="skill__title"> {title} </p>
      <div className="skill__rating">
      {/* <div className={`circle ${rating > 0 && "circle-plain"}`}> </div>
        <div className={`circle ${rating > 1 && "circle-plain"}`}> </div>
        <div className={`circle ${rating > 2 && "circle-plain"}`}> </div>
        <div className={`circle ${rating > 3 && "circle-plain"}`}> </div>
        <div className={`circle ${rating > 4 && "circle-plain"}`}> </div> */}
        <div className="stars-rating" >{stars}</div>
      </div>
    </div>
  );
};

export default SkillsContents;
