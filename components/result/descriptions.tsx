import {
  gmmCopywritings,
  kMeansCopywritings,
} from "@src/data/cluster-copywritings";
import { ClusterType } from "@src/data/cluster.types";
import React from "react";
import MarkdownText from "./descriptions/markdown-text";

const renderDescription = (
  description: string,
  index: number
): React.ReactNode => {
  return (
    <MarkdownText key={`description-${index.toString()}`} text={description} />
  );
};

interface DescriptionsProps {
  kMeansResult: string;
  gmmResult: string;
  mode: ClusterType;
}

const Descriptions: React.FC<DescriptionsProps> = ({
  kMeansResult,
  gmmResult,
  mode,
}) => {
  const resultDetail =
    mode === "k-means"
      ? kMeansCopywritings.filter(
        (copyright) => copyright.clusterLabel === kMeansResult // eslint-disable-line
      )[0] // eslint-disable-line
      : gmmCopywritings.filter(
        (copyright) => copyright.clusterLabel === gmmResult // eslint-disable-line
      )[0]; // eslint-disable-line
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="my-5 w-full justify-center items-center flex">
        <span style={titleStyle}>{resultDetail.title}</span>
      </div>
      <div className="mb-10 w-full justify-center items-center flex">
        <span style={subTitleStyle}>{resultDetail.subtitle}</span>
      </div>
      <div className="flex justify-center items-center w-full">
        <ul className="w-11/12 flex flex-col justify-start items-center">
          {resultDetail.descriptions.map(renderDescription)}
        </ul>
      </div>
    </div>
  );
};

export default Descriptions;

const titleStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  fontSize: "18px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.11,
  letterSpacing: "normal",
  textAlign: "center",
  color: "#108ccf",
};

const subTitleStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  fontSize: "22px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.11,
  letterSpacing: "normal",
  textAlign: "center",
  color: "#191919",
};
