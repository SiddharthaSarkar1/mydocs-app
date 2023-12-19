import React, { useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit card.",
      filesize: "0.9MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit card.",
      filesize: "0.9MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit card.",
      filesize: "0.9MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[3] p-5 flex gap-3 flex-wrap">
        {data.map((item, index) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
