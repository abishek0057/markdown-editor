import React, { useState, useRef } from "react";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import GenericBtn from "./GenericBtn";
import markdown from "../Data/initialmsg";

const MarkComponent = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
};

const MainBody = () => {
  const [input, setInput] = useState(markdown);
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const resetText = () => {
    setInput("");
    inputRef.current.focus();
  };

  return (
    <div className='mainBody'>
      <div className='inpWarpper'>
        <div className='copy-reset'>
          <h4>MARKDOWN</h4>
          <div className='btnGroup'>
            <GenericBtn
              btnName={copied ? "Copied!" : "Copy"}
              func={copyText}
              text={input}
            />
            <GenericBtn btnName={"Clear"} func={resetText} />
          </div>
        </div>
        <textarea
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='markInput'
          ref={inputRef}
        />
      </div>
      <div className='markDownWrapper'>
        <h4>PREVIEW</h4>
        <div className='markDownOutput'>
          <ReactMarkdown
            skipHtml={true}
            children={input}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code: (props) => (
                <MarkComponent {...props} language='markdown' value={input} />
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
