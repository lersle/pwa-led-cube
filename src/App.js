import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// subpages
import Manual from "./pages/_manual";
import Manipulate from "./pages/_manipulate";
import Development from "./pages/_development";
import CubeHardware from "./pages/_hardware";
import Software from "./pages/_software";
import Home from './pages/_home';

import MainComp from './components/Main_comp'

// Define theme settings
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  return (
    <ThemeProvider theme={dark ? createTheme(dark) : createTheme(light)}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainComp />} >
            <Route path="/" element={<Home to="/home" replace />} />
            <Route path="/manual" element={<Manual />} />
            <Route path="/manipulate" element={<Manipulate />} />
            <Route path="/development" element={<Development />} />
            <Route path="/hardware" element={<CubeHardware />} />
            <Route path="/software" element={<Software />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
