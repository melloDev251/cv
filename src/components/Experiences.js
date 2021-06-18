import React from "react";

const Experiences = ({ dataExp }) => {
  //   console.log(dataExp);
  return (
    <div className="cursus mb3">
      <h2 className="h2">Expériences</h2>
      <hr style={{ marginTop: "-20px", marginBottom: "20px" }} />
      {dataExp.map((item) => (
        <div className="grid__row" key={item.id} style={{ marginLeft: "30px" }}>
          <div className="grid__item">
            <p className="grid__date"> {item.date} </p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title"> {item.title} </h3>
            <p className="grid__location"> {item.location} </p>
            <p className="text"> {item.text} </p>
            <ul className="grid__missions">
              {item.missions.map((mission) => (
                <li className="grid__mission" key={mission.id}>
                  {mission.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
