import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Website from "./pages/Website";
import Design from "./pages/Design";
import Media from "./pages/Media";
import Seo from "./pages/Seo";

import "./globals.css";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/website" element={<Website />} />
          <Route path="/design" element={<Design />} />
          <Route path="/media" element={<Media />} />
          <Route path="/seo" element={<Seo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
