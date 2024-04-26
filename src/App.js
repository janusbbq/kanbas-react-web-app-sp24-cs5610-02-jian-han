import React from "react";
import HelloWorld from "./Labs/a3/HelloWorld";
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Kanbas from "./Kanbas";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/Labs"} />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
