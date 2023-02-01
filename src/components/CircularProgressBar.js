import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgressBar({ percentage }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 150, margin: "auto" }}>
        <CircularProgressbar value={percentage} text={`${percentage}`} />
      </div>
    </div>
  );
}
export default CircularProgressBar;
