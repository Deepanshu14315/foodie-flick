import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Pages/Error";
import ProtectedRoute from "./Components/ProtectedRoute";
import Success from "./Pages/Success";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
