import React from "react";

const Button = (index, deleteTasks) => {

  return (
    <>
      <button className="group-hover/task:visible px-3 py-1 rounded-lg text-white invisible bg-[#4EB570]" onClick={deleteTasks}>X</button>
    </>
  );
};

export default Button;
