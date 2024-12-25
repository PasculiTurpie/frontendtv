import { Link, useSearchParams } from "react-router-dom";
import "./SearchChannel.css";
import { useEffect, useState, useMemo } from "react";
import api from "../utils/api";

const SearchChannel = () => {
  const [searchParams] = useSearchParams();
  const [dataChannel, setDataChannel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .getAllChannel()
      .then((data) => {
        console.log(data);
        setDataChannel(data || []);
      })
      .catch((error) => {
        console.error("Error fetching channels:", error);
        setDataChannel([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const queryParams = searchParams.get("keyword") || "";
  console.log("Query Params:", queryParams);

  const filteredData = useMemo(() => {
    return dataChannel.filter((item) => {
      return (
        item.numeroTelsur
          ?.toLowerCase()
          .startsWith(queryParams.toLowerCase()) ||
        item.nombreChannel.toLowerCase().includes(queryParams.toLowerCase())
      );
    });
  }, [dataChannel, queryParams]);

  console.log(filteredData);

  const loader = () => (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
if (isLoading) {
  return loader();
}
  return (
    <div className="app-container">
      {isLoading ? (
        loader()
      ) : (
        <>
          <div className="search-total">
            <span className="search-result">Resultado: {filteredData.length} items</span>
          </div>
          {filteredData?.length === 0 ? (
            <p className="search-error">No hay resultados para su búsqueda.</p>
          ) : (
            filteredData?.map((channel) => {
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
                      <h2 className="card-title">
                        {channel.nombreChannel.toUpperCase()}
                      </h2>
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
        </>
      )}
    </div>
  );
};

export default SearchChannel;
