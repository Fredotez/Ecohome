import React from "react";

//<h3>{d.name}</h3>
export const Services = ({ data }) => {
  return (
    <section id="services" className="services">
      <div className="container text-center">
        <div className="section-title compact">
          <h2>Our Services</h2>
          <p>
            Eco-home Services provides a full range of seasonal home and
            business solutions—landscaping and moving support during warmer
            months, and dependable snow removal and handyman work in the winter.
            Quality, reliability, and year-round care you can count on.
          </p>
        </div>

        <div className="services-grid">
          {data ? (
            data.map((item, i) => (
              <div key={`${item.name}-${i}`} className="service-card">
                <div className="service-icon-wrap">
                  <i className={item.icon}></i>
                </div>

                <h3 className="service-title">{item.name}</h3>

                <p className="service-text">{item.text}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};
