import React from "react";
import HomeBody from "./preplan";
import Info from "./Info";
import Calculator from "./convertor";
import LanguageHelp from "./lang";
import  MAP from "./map";
import {
  BrowserRouter,
  Routes,
  Route,
} from  "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeBody/>}></Route>
    <Route path="/info" element={<Info/>}></Route>
    <Route path="/con" element={<Calculator/>}></Route>
    <Route path="/lan" element={<LanguageHelp/>}></Route>
    <Route path="/ma" element={<MAP/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
