import "./App.css";
import { Pricing } from "./PricingComp/Pricing";
import LazyLoadingEx from "./LazyLoading/LazyLoadingEx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyFunComp } from "./LazyLoading/LazyFunComp";
import Infinite from "./LazyLoading/infiniteLoader/infinite";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pricing />} />
          {/* <Route path="/lazyloading" element={<LazyLoadingEx />} /> */}
          {/* <Route path="/lazyloadingcomp" element={<LazyFunComp />} /> */}
          <Route path="/infinite" element={<Infinite />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
