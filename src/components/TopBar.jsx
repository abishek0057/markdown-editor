import React from "react";
import DownloadBtn from "./DownloadBtn";

const TopBar = ({ input, handleDownload }) => {
  return (
    <div className='topContainer'>
      <h2>MARKDOWN</h2>
      <div className='saveDel'>
        <DownloadBtn handleDownload={handleDownload} input={input} />
      </div>
    </div>
  );
};

export default TopBar;
