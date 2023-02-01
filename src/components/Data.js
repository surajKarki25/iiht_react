import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
const baseURL = "https://localhost:44358/api/Air";
export default function Data({ setAverage }) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios
      .get(baseURL)
      .then()
      .then()
      .then((response) => {
        console.log(response);
        let average = 0;
        response.data.forEach((element) => {
          average =
            average +
            (Number(element.o2level) +
              Number(element.colevel) +
              Number(element.nlevel) +
              Number(element.clevel)) /
              4;
        });
        setAverage(Math.floor(average / response.data.length));
        setPost(response.data);
      })
      .catch((err) => {
        console.log("error" + err);
      });
  }, []);
  // useEffect(()=>{
  //     setTimeout(() => {
  //         axios.get(baseURL).then().then().then(response=>{console.log(response)
  //             setPost(response.data)}).catch(err=>{console.log("error"+err)});
  //     }, 10000);
  // },[]);
  if (!post) return null;

  return (
    <div>
      <table className="table" style={{ color: "black" }}>
        <thead>
          <tr>
            <th scope="col">Flore/Air</th>
            <th scope="col">O2</th>
            <th scope="col">Co</th>
            <th scope="col">N</th>
            <th scope="col">C</th>
          </tr>
        </thead>
        <tbody>
          {post?.map((data, i) => {
            return (
              <tr key={data.id}>
                <th scope="row">{data.floreNo}</th>
                <td key={i + 1}>{data.o2level}</td>
                <td key={i + 2}>{data.colevel}</td>
                <td key={i + 3}>{data.nlevel}</td>
                <td key={i + 4}>{data.clevel}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    
    </div>
  );
}
