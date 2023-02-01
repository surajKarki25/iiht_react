import { BarChart, Bar } from 'recharts';
import React from "react";


function MyBarChart({per}) {
  return (
    <BarChart width={500} height={300} data={per}>
      <Bar dataKey="uv" fill="#8884d8" />
      <Bar dataKey="pv" fill="#82ca9d" />
    </BarChart>
  );
}
export default MyBarChart