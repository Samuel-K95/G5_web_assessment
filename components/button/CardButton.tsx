import React from "react";
interface cardprop {
  name: string;
}
const CardButton = ({ name }: cardprop) => {
  return (
    <button className="bg-[#F5F5F5] px-8 py-2 rounded-full text-[#8E8E8E]">
      {name}
    </button>
  );
};

export default CardButton;
