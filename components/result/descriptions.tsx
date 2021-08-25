import { gmmCopyrights, kMeansCopyrights } from "@src/data/cluster-copyrights";
import { ClusterType } from "@src/data/cluster.types";
import React from "react";

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
      ? kMeansCopyrights.filter(
        (copyright) => copyright.clusterLabel === kMeansResult // eslint-disable-line
      )[0] // eslint-disable-line
      : gmmCopyrights.filter(
        (copyright) => copyright.clusterLabel === gmmResult // eslint-disable-line
      )[0]; // eslint-disable-line
  const regex = /(".*")/.exec(resultDetail.title);
  const title = regex[1];
  const subtitle = resultDetail.title.replace(title, "");
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="my-5 w-full justify-center items-center flex">
        <span style={titleStyle}>{title}</span>
      </div>
      <div className="mb-10 w-full justify-center items-center flex">
        <span style={subTitleStyle}>{subtitle}</span>
      </div>
      <div className="flex justify-center items-center w-full">
        <ul className="w-11/12 flex flex-col justify-start items-center">
          {resultDetail.descriptions.map((description, index) => {
            return (
              <li key={index} className="list-disc w-9/12">
                <span style={listTitleStyle}>{description}</span>
              </li>
            );
          })}
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

const listTitleStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: "normal",
  textAlign: "left",
  color: "#191919",
};
