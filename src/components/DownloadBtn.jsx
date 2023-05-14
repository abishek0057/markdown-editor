import React from "react";
import { FaDownload } from "react-icons/fa";
import "../styles/style.scss";
const DownloadBtn = () => {
  return (
    <div className='saveBtn'>
      <FaDownload className='saveIcon' />
      <p>Download MD</p>
    </div>
  );
};

export default DownloadBtn;
