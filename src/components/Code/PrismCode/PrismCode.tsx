import "./style.scss";
import "./languages/typescript";
import "./plugins/line-numbers";
import React from "react";
import Prism from "prismjs";

interface Props {
  children: string;
  language: string;
}

const PrismCode = ({ children, language }: Props) => {
  const codeRef = React.createRef<HTMLPreElement>();

  React.useEffect(() => {
    if (codeRef.current) {
      Prism.highlightAll();
    }
  }, [language, children, codeRef.current]);

  return (
    <div>
      <pre className="line-numbers">
        <code className={`language-${language}`} ref={codeRef}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default PrismCode;
