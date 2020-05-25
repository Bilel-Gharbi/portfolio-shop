import React, { useEffect } from "react";
import { animation } from "../utils/main";

const Background = () => {
  useEffect(() => {
    //execute animation function
    animation();
  }, []);
  return (
    <div className="header">
      <canvas></canvas>
      <canvas></canvas>
    </div>
  );
};

export default Background;
