import React from "react";
import { MoonLoader } from "react-spinners";

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
      <MoonLoader color="green" speedMultiplier={0.5} />
    </div>
  );
};

export default Loader;
