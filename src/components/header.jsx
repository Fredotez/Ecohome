import React from "react";

export const Header = ({ data }) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container text-center">
            <div className="intro-text intro-inner">
              <h1 className="intro-title">{data?.title || "Loading"}</h1>

              {data?.paragraph && (
                <p className="intro-subtitle">{data.paragraph}</p>
              )}

              <a
                href="#services"
                className="btn btn-custom intro-btn page-scroll"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
