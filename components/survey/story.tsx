import { SurveyContext } from "@components/context/survey-context";
import { imageNameMapping } from "@src/data/image-name-mapping";
import { Story as StoryType } from "@src/data/questions.types";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const WAIT_TIME = 2000;

const Story: React.FC = () => {
  const waitTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const {
    questionOrStory: story,
    goToNext,
    cleanUpCurrent,
  } = useContext(SurveyContext);
  const { title, storyId } = story as StoryType;
  const imgSource = imageNameMapping["s" + storyId.toString()];

  useEffect(() => {
    waitTimeoutRef.current = setTimeout(() => {
      cleanUpCurrent();
      transitionTimeoutRef.current = setTimeout(() => {
        goToNext();
      }, 300);
    }, WAIT_TIME);
    return () => {
      if (waitTimeoutRef.current) clearTimeout(waitTimeoutRef.current);
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);
    };
  }, [story]);

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <img style={imgStyle} src={imgSource} className="w-full h-2/3" />
      <div className="w-full h-1/3 flex flex-col justify-center items-center">
        <div className="w-full h-3/4 flex justify-center items-center gap-2">
          {title.split("\n").map((aTitle, index) => (
            <span key={index} style={textStyle}>
              {aTitle}
            </span>
          ))}
        </div>
        <div className="w-full h-1/4">
          <img src="/icons/ic_note.png" style={imgStyle} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Story;

const imgStyle: React.CSSProperties = {
  objectFit: "cover",
};

const textStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  color: "#191919",
  fontWeight: "normal",
  fontSize: "22px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.45,
  textAlign: "center",
  letterSpacing: "normal",
};
