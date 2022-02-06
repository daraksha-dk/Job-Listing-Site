import React from "react";
import "./maincontent.scss";
import Card from "../Card/card";
import data from "../../data";

const maincontent = ({ setKeywords }) => {
  return (
    <div className="maincontent">
      {data.map((item) => {
        return <Card setKeywords={setKeywords} key={item.id} data={item} />;
      })}
    </div>
  );
};

export default maincontent;
