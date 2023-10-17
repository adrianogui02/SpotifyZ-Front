import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { PrimeReactProvider } from 'primereact/api';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
        

function App() {
  return (
    <div className="app">
       <PrimeReactProvider>
          <Home />
       </PrimeReactProvider>
    </div>
  );
}

export default App;
