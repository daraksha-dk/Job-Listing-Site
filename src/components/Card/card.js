import React from "react";
import "./card.scss";

const card = ({ data }) => {
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
            <span className="card_second">{data.contract}</span>
            <span>{data.location}</span>
          </div>
        </div>
        <div className="card_filter">
          <button className="card_tags">{data.role}</button>
          <button className="card_tags">{data.role}</button>
          <button className="card_tags">{data.role}</button>
          <button className="card_tags">{data.role}</button>
          <button className="card_tags">{data.role}</button>
        </div>
      </div>
    </div>
  );
};

export default card;
