import React from "react";
import { FaDownload } from "react-icons/fa";
import "../styles/style.scss";
const DownloadBtn = ({ handleDownload, input }) => {
  return (
    <div
      className={input && input.trim() ? "downloadBtn" : "disabled"}
      onClick={() => {
        handleDownload();
      }}
    >
      <FaDownload className='downloadIcon' />
      <p>Download .md</p>
    </div>
  );
};

export default DownloadBtn;
