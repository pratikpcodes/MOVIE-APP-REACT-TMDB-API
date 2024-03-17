import React from "react";

const DropDown = ({ fun, title, options }) => {
  console.log(options);
  return (
    <div className="flex mr-10  justify-end text-black  pt-16 select  ">
      <select 
        name="format"
        id="format"
        defaultValue="0"
        onChange={fun}
        className=" appearance-none px-4 py-2 rounded "
      >
        <option value="0" disabled>
          {title.toUpperCase()}
        </option>
        {options.map((option, index) => (
          <option  key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
