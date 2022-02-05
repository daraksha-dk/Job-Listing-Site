import React from "react";
import "./maincontent.scss";
import Card from "../Card/card";
import data from "../../data";
const maincontent = () => {
  return (
    <div className="maincontent">
      {data.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
};

export default maincontent;
