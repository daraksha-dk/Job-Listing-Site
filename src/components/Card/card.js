import React from "react";
import "./card.scss";

const card = ({ data }) => {
  const tablets = [data.role, data.level, ...data.languages];
  return (
    <div className="card">
      <div className="card_container">
        <div className="card_img">
          <img src={data.logo} alt="logo" />
        </div>
        <div className="card_info">
          <div className="card_items">
            <span>{data.company}</span>
          </div>
          <div className="card_title">{data.position}</div>
          <div className="card_list">
            <span className="card_first">{data.postedAt}</span>
            <span className="card_second">
              <li>{data.contract}</li>
            </span>
            <span>
              <li>{data.location}</li>
            </span>
          </div>
        </div>
        <div className="card_filter">
          {tablets.map((tablet, i) => {
            return (
              <button className="card_tags" key={i}>
                {tablet}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default card;
