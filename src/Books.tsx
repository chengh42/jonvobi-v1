import React from "react";
import {Link} from "react-router-dom";
import book from "./img/book.webp";
import "./Books.css";

const Books: React.FC = () => {
  return (
    <div className="books-page">
      <div className="books-header">
        <Link to="/" className="back-button">
          <div style={{display: "flex", alignItems: "center"}}>
            <p
              style={{
                margin: 0,
                marginRight: "8px",
                fontSize: "2rem",
              }}
            >
              ←
            </p>
            <img
              src={book}
              alt="book"
              style={{width: "100px", height: "100px"}}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Books;
