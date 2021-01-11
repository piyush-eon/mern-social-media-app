import React from "react";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <ReactLoading type={"spin"} color="#fff" />
    </div>
  );
};

export default Loader;
