import React from "react";
import { FaDownload } from "react-icons/fa";
import "../styles/style.scss";
const DownloadBtn = ({ handleDownload }) => {
  return (
    <div
      className='downloadBtn'
      onClick={() => {
        handleDownload();
      }}
    >
      <FaDownload className='downloadIcon' />
      <p>Download MD</p>
    </div>
  );
};

export default DownloadBtn;
