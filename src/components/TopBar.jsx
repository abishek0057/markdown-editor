import React from "react";
import DownloadBtn from "./DownloadBtn";
import { FaGithub } from "react-icons/fa";

const TopBar = ({ input, handleDownload }) => {
  return (
    <div className='topContainer'>
      <h2>MARKDOWN</h2>
      <div className='saveDel'>
        <DownloadBtn handleDownload={handleDownload} input={input} />
        <a
          className='gitIcon'
          href='https://github.com/abishek0057'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
