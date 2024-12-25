import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({
  pageNextChange,
  pagePrevChange,
  totalDocs,
  hasPrevPage,
  hasNextPage,
  pageCurrent,
  totalPages,
  dataChannel,
}) => {


  return (
    <>
      <div className="main-channel">
        <div className="data-channel">
          <button
            className="btn"
            onClick={pagePrevChange}
            disabled={!hasPrevPage}
          >
            Anterior
          </button>
          <h2>Total señales: {totalDocs}</h2>
          <h2>Página: {pageCurrent}</h2>
          <h2>Total páginas: {totalPages}</h2>
          <button
            className="btn"
            onClick={pageNextChange}
            disabled={!hasNextPage}
          >
            Siguiente
          </button>
        </div>
        <div className="container-principal-channel">
          {/* Manejo de errores si dataChannel es null o vacío */}
          {!dataChannel || dataChannel.length === 0 ? (
            <div className="no-data-message">
              <h3>No hay información disponible para mostrar.</h3>
            </div>
          ) : (
            dataChannel.map((channel) => {
              const criticalityCategory = channel.criticalityLevel
                ?.category || <span className="color-white">-</span>;
              const nombreOrigen = channel.origin?.nombreOrigen || (
                <span className="color-danger">No disponible</span>
              );
              const imageLogo =
                channel?.urlLogo ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Telsur_logo_2019.svg/1200px-Telsur_logo_2019.svg.png";

              return (
                <Link to={`/details/${channel._id}`} key={channel._id}>
                  <div className="container-channel">
                    <div className="card-header-channel">
                      <h2 className="card-title">{channel.nombreChannel.toUpperCase()}</h2>
                      <div className="card-origen">
                        <p className="card-origen-parrafo">
                          Telsur: {channel.numeroTelsur}
                        </p>
                        <p className="card-origen-parrafo">
                          Gtd: {channel.numeroGtd}
                        </p>
                      </div>
                    </div>
                    <div className="card-image">
                      <img
                        className="card-image-logo"
                        src={imageLogo}
                        alt={channel.nombreChannel}
                      />
                    </div>
                    <div className="card-info">
                      <p className="card-info-parrafo">
                        Origen: {nombreOrigen}
                      </p>
                      <p className="card-info-parrafo">
                        <span className="card-info-sev">
                          {criticalityCategory}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
