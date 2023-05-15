import React, { useState } from "react";
import TopBar from "./TopBar";
import MainBody from "./MainBody";
import markdown from "../Data/initialmsg";

const App = () => {
  const [input, setInput] = useState(markdown);

  const handleDownload = () => {
    const fileData = new Blob([input], { type: "text/markdown" });
    const fileUrl = URL.createObjectURL(fileData);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Markdown.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <TopBar handleDownload={handleDownload} input={input} />
      <MainBody input={input} setInput={setInput} />
    </div>
  );
};

export default App;

