import React from "react";
import DownloadBtn from "./DownloadBtn";

const handleDownload = () => console.log("hello");
const TopBar = () => {
  return (
    <div className='topContainer'>
      <h2>MARKDOWN</h2>
      <div className='saveDel'>
        <DownloadBtn handleDownload={handleDownload} />
      </div>
    </div>
  );
};

export default TopBar;
