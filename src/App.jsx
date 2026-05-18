import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";

export default function App() {
  return (
    <BrowserRouter basename="/dinamika-sapsan">
      <Routes>
        <Route path="/dinamika-sapsan/" element={<Home />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
