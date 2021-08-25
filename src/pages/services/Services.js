import React, { useEffect, useState } from "react";
import "../../App.css";
import CardItem from "../../components/CardItem/CardItem";
import { helper } from "../../helpers/common";
import { api } from "./api";

function Services() {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getDataFake = async () => {
      setLoading(true);
      const data = await api.getDataApiFake();
      if (!helper.isEmptyObject(data)) {
        setServices(data);
      }
      setLoading(false);
    };
    getDataFake();
  }, []);
  console.log(services);
  if (loading || helper.isEmptyObject(services)) {
    return (
      <h1
        style={{
          textAlign: "center",
          fontSize: "300",
          textTransform: "uppercase",
        }}
      >
        loading...
      </h1>
    );
  }

  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services-cards__container">
        <div className="services-cards__wrapper">
          <ul className="services-cards__items">
            {services.map((item) => (
              <CardItem
                id={item.id}
                src={item.ImageUrl}
                text={item.title}
                label={item.name}
                path="/services"
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
