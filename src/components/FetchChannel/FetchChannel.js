import React, { useEffect, useState } from "react";
import "./FetchChannel.css";
import api from "../utils/api";
import Card from "../Card/Card";


const FetchChannel = () => {
  const [dataChannel, setDataChannel] = useState([]);
  const [dataRadios, setDataRadios] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [totalDocs, setTotalDocs] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [limit, setLimit] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("page");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });



  const fetchData = () => {
    setIsLoading(true); // Mostrar loader al inicio
    setError(null); // Reiniciar error
    api
      .getChannel(limit, page)
      .then((data) => {
        setPageCurrent(data.page);
        setDataChannel(data.docs);
        setTotalPage(data.limit);
        setTotalDocs(data.totalDocs);
        setHasNextPage(data.hasNextPage);
        setHasPrevPage(data.hasPrevPage);
        setTotalPages(data.totalPages);
        setIsLoading(false); // Ocultar loader al finalizar
      })
      .catch((err) => {
        setError(err.message); // Guardar mensaje de error
        setIsLoading(false); // Ocultar loader incluso si hay error
      });
  };


  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const loader = () => (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );

  const errorComponent = () => (
    <div className="error-message">
      <p>Ocurrió un error al cargar los datos: {error}</p>
      <button className="btn" onClick={fetchData}>
        Reintentar
      </button>
    </div>
  );

  const pageNextChange = () => {
    if (hasNextPage) {
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        localStorage.setItem("page", newPage);
        return newPage;
      });
    }
  };

  const pagePrevChange = () => {
    if (hasPrevPage) {
      setPage((prevPage) => {
        const newPage = prevPage - 1;
        localStorage.setItem("page", newPage);
        return newPage;
      });
    }
  };

  const selectLimit = (e) => {
    setLimit(parseInt(e.target.value));
  };

  if (isLoading) {
    return loader();
  }

  if (error) {
    return errorComponent();
  }

  return (
    <>
      <Card
        pageNextChange={pageNextChange}
        pagePrevChange={pagePrevChange}
        selectLimit={selectLimit}
        totalDocs={totalDocs}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
        pageCurrent={pageCurrent}
        totalPages={totalPages}
        dataChannel={dataChannel}
      />
    </>
  );
};

export default FetchChannel;
