import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const handleCursor = (e) => {
      document.querySelector(".cursor").style.top = e.pageY + "px";
      document.querySelector(".cursor").style.left = e.pageX + "px";
    };

    window.addEventListener("mousemove", handleCursor);

    const handleHover = () => {
      document.querySelector(".cursor").classList.add("hovered");
    };

    const handleLeave = () =>{
      document.querySelector(".cursor").style.transition = ".1s ease-out";
      document.querySelector(".cursor").classList.remove("hovered")
    }

    document.querySelectorAll(".h2, .skills").forEach((h2) => {
      h2.addEventListener("mouseover", handleHover);
      h2.addEventListener("mouseleave", handleLeave);
    });
  }, []);

  return (
    <div>
      <span className="cursor"></span>
    </div>
  );
};

export default Mouse;
