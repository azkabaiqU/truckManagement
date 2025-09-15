import React from "react";
import { Route, Navigate } from "react-router-dom";

// Komponen untuk proteksi rute
function PrivateRoute({ element: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("auth");  // Cek apakah pengguna sudah login

  return (
    <Route
      {...rest}
      element={isAuthenticated ? Component : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;
