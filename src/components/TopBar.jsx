import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import SaveBtn from "./SaveBtn";
const TopBar = () => {
  return (
    <div className='topContainer'>
      <h2>MARKDOWN</h2>
      <div className='saveDel'>
        <FaTrashAlt className='trashIcon' />
        <SaveBtn />
      </div>
    </div>
  );
};

export default TopBar;
