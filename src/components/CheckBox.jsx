import React from "react";

const CheckBox = () => {
  return (
    <>
      <input
        type="checkbox"
        class="peer relative appearance-none w-5 h-5  border rounded-full border-grey-500 cursor-pointer checked:bg-[#4EB570]"
        id="circular-checkbox"
      />
    </>
  );
};

export default CheckBox;
