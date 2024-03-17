import React from "react";

const Loader = () => {
  return (
    <div className=" grid grid-cols-6 transtion-all duration-700 bg-slate-800  flex-row">
      {new Array(18).fill(0).map((element, index) => (
        <div key={index} className="m-2  transform transition duration-300 ease-in-out hover:scale-110 p-10 object-cover bg-slate-950">
          <img
            src="src\assets\work-in-progress.png"
            className="object-cover w-40 h-40 rounded-3xl  "
          />
        </div>
      ))}
    </div>
  );
};

export default Loader;
