import TBLargeButton from "@components/tb-large-button";
import { useRouter } from "next/router";
import React from "react";

const Restart: React.FC = () => {
  const router = useRouter();

  const startAgain = () => {
    router.push("/");
  };

  return (
    <div className="justify-center items-center flex py-10 w-full">
      <TBLargeButton onClick={startAgain} text={"테스트 다시하기"} />
    </div>
  );
};

export default Restart;
