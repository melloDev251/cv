import React from "react";

const User = () => {
  return (
    <div className="user">
      <img
        className="user__avatar"
        src="./media/image.png"
        alt="user-img"
        style={{ width: "150px" }}
      />
      <h1 className="user__name">Melino Prosper BOTOVIANANTENAINA</h1>
      <p className="user__profession">Développeur React/NodeJS</p>
      <div className="user__infos">
        <p className="user__info">
          <i className="fas fa-map-marker-alt"></i>
          Mandroseza - Tana 101
        </p>
        <p className="user__info">
          <i className="fas fa-headset"></i>
          <a href="tel:+2614847065"> 034 48 470 65</a>
        </p>
        <p className="user__info">
          <i className="fas fa-envelope-open"></i>
          <a href="mailto:mellodev251@gmail.com">mellodev251@gmail.com</a>
        </p>
        <p className="user__info">
          <i className="fas fa-heart"></i>
          Célibataire, 23 ans
        </p>
      </div>
    </div>
  );
};

export default User;
