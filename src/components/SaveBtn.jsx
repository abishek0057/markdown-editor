import React from "react";
import { FaSave } from "react-icons/fa";
import "../styles/style.scss";
const SaveBtn = () => {
  return (
    <div className='saveBtn'>
      <FaSave className='saveIcon' />
      <p>Save changes</p>
    </div>
  );
};

export default SaveBtn;
