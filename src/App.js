import Application from "./Application";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Application />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
