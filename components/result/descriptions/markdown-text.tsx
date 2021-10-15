import React from "react";

interface MarkdownTextProps {
  text: string;
}

type Token = "-" | "#";

const tokens: Token[] = ["-", "#"];

const MarkdownText: React.FC<MarkdownTextProps> = ({ text }) => {
  const token = text.substring(0, 1);
  let textToRender: string;
  if (tokens.includes(token as Token)) {
    textToRender = text.substring(1);
  } else {
    textToRender = text;
  }
  switch (token) {
    case "-": // eslint-disable-line
      return <ListTitle text={textToRender} />; // eslint-disable-line
    case "#": // eslint-disable-line
      return <BoldTitle text={textToRender} />; // eslint-disable-line
    default: // eslint-disable-line
      return <DefaultText text={textToRender} />; // eslint-disable-line
  }
};

const BoldTitle: React.FC<MarkdownTextProps> = ({ text }) => {
  return (
    <li className="list-none w-9/12 my-2">
      <span style={boldTitleStyle}>&quot; {text} &quot;</span>
    </li>
  );
};

const ListTitle: React.FC<MarkdownTextProps> = ({ text }) => {
  return (
    <li className="list-none w-9/12 my-1.5">
      <span style={listTitleStyle}>{text}</span>
    </li>
  );
};

const DefaultText: React.FC<MarkdownTextProps> = ({ text }) => {
  return <span style={listTitleStyle}>{text}</span>;
};

export default MarkdownText;

const listTitleStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: "-0.32px",
  textAlign: "left",
  color: "#191919",
};

const boldTitleStyle: React.CSSProperties = {
  ...listTitleStyle,
  fontFamily: "NanumSquareB",
  fontSize: "18px",
  letterSpacing: "-0.36px",
};
