import React from "react";
import "./App.css";
import Footer from "./components/Footer";

import Main from "./layout/Main";

function App() {
  return (
    <>
      <Main />

      <div className="foot">
        <Footer />
      </div>
    </>
  );
}

export default App;
