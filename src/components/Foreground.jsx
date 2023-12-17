import React from "react";
import Card from "./Card";

const Foreground = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[3]">
        <Card />
      </div>
    </>
  );
};

export default Foreground;
