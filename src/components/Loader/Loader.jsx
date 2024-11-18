import React from "react";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <FadeLoader color="green" speedMultiplier={0.5} />
    </div>
  );
};

export default Loader;
