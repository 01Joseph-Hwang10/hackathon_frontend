import React from "react";
import { useRouter } from "next/router";
import { AppDispatch } from "@redux/store";
import { resetState } from "@slices/score";
import { connect, ConnectedProps } from "react-redux";
import { imageNameMapping } from "@src/data/image-name-mapping";
import { Colors } from "@src/constants";
import HomeIconText from "@components/icon_texts/home-icon-text";
import TBLargeButton from "@components/tb-large-button";
import Head from "next/head";
import Link from "next/link";

type HomeReduxProps = ConnectedProps<typeof connector>;

interface HomeProps extends HomeReduxProps {}

const Home: React.FC<HomeProps> = ({ resetState: ResetState }) => {
  const router = useRouter();
  const startSurvey = () => {
    ResetState();
    router.push("/survey");
  };
  return (
    <div
      className="justify-between flex items-center flex-col h-screen w-screen"
      style={rootStyle}
    >
      <Head>
        <title>여행성향 테스트 - 홈 | 트립빌더</title>
      </Head>
      <div
        id="imageWrapper"
        className="bg-cover bg-center flex justify-center items-center w-full h-1/6"
        style={imageWrapperStyle}
      >
        <img src={imageNameMapping["logo1"]} style={{ width: "80px" }} />
      </div>
      <div
        id="subject"
        className="flex flex-col justify-center items-center w-full h-2/6"
      >
        <img src="/icons/ic_airplane.png" />
        <div className="w-7/12">
          <HomeIconText />
        </div>
      </div>
      <div
        id="interactions"
        className="flex flex-col space-y-5 justify-center items-center w-full h-2/6"
      >
        <TBLargeButton
          onClick={startSurvey}
          text={"여행 한 번 떠나볼까?"}
          numChoices={0}
        />
        <div className="justify-center items-center flex flex-col space-y-1">
          <span style={subTextStyle}>인스타그램 공유 이벤트 진행 중!</span>
          <Link href="https://www.instagram.com/teamtripbuilder/">
            <span
              style={{
                ...subTextStyle,
                textDecoration: "underline",
                color: "lightskyblue",
              }}
            >
              @teamtripbuilder
            </span>
          </Link>
        </div>
      </div>
      <div
        id="infos"
        className="flex justify-center items-end w-full h-1/6 pb-8"
      >
        <span style={infoTextStyle}>
          이 페이지에는 네이버에서 제공한 나눔글꼴이 적용되어 있습니다.
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  resetState: () => dispatch(resetState()),
});

const connector = connect(null, mapDispatchToProps);

export default connector(Home);

const imageWrapperStyle: React.CSSProperties = {
  backgroundImage: `url(${imageNameMapping["home"]})`,
};

const rootStyle: React.CSSProperties = {
  backgroundColor: Colors.primary,
};

const infoTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareL",
  color: "#707070",
  fontWeight: "normal",
  fontSize: "12px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2,
  textAlign: "center",
  letterSpacing: "normal",
};

const subTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  color: "#707070",
  fontWeight: "normal",
  fontSize: "14px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.43,
  textAlign: "center",
  letterSpacing: "normal",
};
