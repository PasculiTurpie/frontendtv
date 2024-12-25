import React, { useEffect, useRef, useState } from "react";
import "./DetailsCard.css";
import { Link, useParams } from "react-router-dom";
import api from "../utils/api";

const DetailsCard = () => {
  const { id } = useParams();
  const popup = useRef(null);

  const [itemChannel, setItemChannel] = useState({});

  useEffect(() => {
    api.getChannelById(id).then((data) => {
      setItemChannel(data);
    });
  }, []);

  const ipMulticast = itemChannel.tipoMulticast;

  const contacto = itemChannel.contacto;

  const handleBack = () => {
    window.history.back();
  };

  const handleOpenPopup = () => {
    popup.current.classList.add("popup-contacto-visible");
  };
  const handleClosePopup = () => {
    popup.current.classList.remove("popup-contacto-visible");
  };
  return (
    <>
      {
        <>
          <div className="container-datail">
            <div className="container-datail-item">
              <h1 className="container-detail-title">
                {itemChannel.nombreChannel} {"-"} {itemChannel.numeroTelsur}
              </h1>
              <button className="btn-detail-back" onClick={handleBack}>
                Volver
              </button>
              <img
                className="detail-item-image"
                src={itemChannel.urlLogo}
                alt="imagen"
              />
              <div className="container-multicast">
                {ipMulticast?.map((item) => {
                  return (
                    <>
                      <div className="item-multicast" key={item._id}>
                        <span className="item-multicast-name">
                          {item.ipMulticast?.nombreChannel}{" "}
                        </span>
                        <span className="item-multicast-origin">
                          {item.signalType?.name}
                        </span>
                        <span>
                          Multicast:{" "}
                          <span className="item-multicast-signal">
                            {item.ipMulticast?.ipMulticast}
                          </span>
                        </span>
                        <span className="item-multicast-ip">
                          {item.idEncoder?.ipEncoder === undefined ? (
                            <>
                              <span>Encoder:</span>{" "}
                              <span className="color-danger">
                                No disponible
                              </span>
                            </>
                          ) : (
                            <>
                              <span>Encoder:</span>{" "}
                              <Link
                                to={`http://${item.idEncoder?.ipEncoder}`}
                                target="_blank"
                              >
                                {item.idEncoder?.ipEncoder}
                              </Link>
                            </>
                          )}
                        </span>
                      </div>
                    </>
                  );
                })}
              </div>
              {contacto?.length > 0 && (
                <button className="btn-vermas" onClick={handleOpenPopup}>
                  Ver contactos
                </button>
              )}
            </div>
          </div>
          <div className="popup-contacto" ref={popup}>
            <div className="card-contacto">
              {(contacto?.length === 1 && (
                <h2 className="contacto-title">Contacto</h2>
              )) ||
                (contacto?.length > 1 && (
                  <h2 className="contacto-title">Contactos</h2>
                ))}
              <span className="btn-cerrar" onClick={handleClosePopup}>
                X
              </span>
              {contacto?.map((item) => {
                return (
                  <div key={item._id}>
                    <p className="item-contacto">
                      <span>{item.nombreContact.toUpperCase()}</span>
                      {"-"}
                      <span>
                        <a href={`mailto:${item.emailContact}`}>
                          {item.emailContact}
                        </a>
                      </span>
                      {"-"}
                      <span>
                        <a href="tel:+"> {item.telefonoContact}</a>
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      }
    </>
  );
};

export default DetailsCard;
