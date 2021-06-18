import React from "react";

const User = () => {
  return (
    <div className="user">
      <img className="user__avatar" src="./media/images.png" alt="user-img" style={{width:'150px'}} />
      <h1 className="user__name">Mello Dev</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <i className="fas fa-map-marker-alt"></i>
          Lot VQ 134 HK Mandroseza
        </p>
        <p className="user__info">
          <i className="fas fa-headset"></i>
          <a href="tel:+2614847065"> 0344847065</a>
        </p>
        <p className="user__info">
          <i className="fas fa-envelope-open"></i>
          <a href="mailto:falmelopros@gmail.com">falmelopros@gmail.com</a>
        </p>
        <p className="user__info">
          <i className="fas fa-heart"></i>
          <a href="tel:+2614847065"> Célibataire</a>
        </p>
      </div>
    </div>
  );
};

export default User;
