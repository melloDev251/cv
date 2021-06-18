import React from "react";

const OtherCompétences = ({ dataOth }) => {
  console.log(dataOth);
  return (
    <div className="cursus mb3">
      <h2 className="h2">Autres Compétences</h2>
      <hr style={{marginTop:"-20px", marginBottom:"20px"}} />

      {dataOth.map((item) => (
        <div className="grid__rows" key={item.id} style={{ marginLeft: "30px" }}>
          <div className="grid__title" style={{ maxWidth:"600px", marginBottom:"15px" }}>
            <i class="fas fa-check-square fa-1.5x" style={{ marginRight: "20px" }}></i>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherCompétences;
