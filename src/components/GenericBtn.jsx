import React from "react";

const GenericBtn = ({ btnName, func, text }) => {
  return (
    <div className='btnContainer' onClick={() => func(text)}>
      <p>{btnName}</p>
    </div>
  );
};

export default GenericBtn;
