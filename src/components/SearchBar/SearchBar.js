import React from "react";
import "./SearchBar.scss";
import { ReactComponent as XIcon } from "../../assets/images/x.svg";

const SearchBar = ({ keywords, onClose, onClearItem }) => {
  return (
    <div className="SearchBar">
      <div className="SearchBar_keywords">
        {keywords.map((keyword, i) => {
          return (
            <>
              <span key={i} className="keyword">
                {keyword}
              </span>
              <button
                className="SearchBar_clear"
                onClick={() => onClearItem(keyword)}
              >
                <XIcon className="SearchBar_icon" />
              </button>
            </>
          );
        })}
      </div>
      <div>
        <button className="SearchBar_close" onClick={onClose}>
          Clear
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
