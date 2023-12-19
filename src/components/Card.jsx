import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Card = ({ data }) => {
  return (
    <div className="relative flex-shrink-0 w-60 h-80 bg-zinc-600/40 rounded-[45px] text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".8em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{ data.tag.tagTitle }</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
