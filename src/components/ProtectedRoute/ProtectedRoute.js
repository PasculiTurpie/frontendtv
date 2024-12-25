import React from "react";
import { Navigate } from "react-router-dom";

// Componente ProtectedRoute
const ProtectedRoute = ({ children, loggedin }) => {
  if (!loggedin) {
    // Redirigir si no está autenticado
    return <Navigate to="/admin" />;
  }
  // Renderizar contenido protegido si está autenticado
  return children;
};

export default ProtectedRoute;
