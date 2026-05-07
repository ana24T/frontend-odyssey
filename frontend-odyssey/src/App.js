import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acasa from "./pagini/Acasa";
import Pisici from "./pagini/Pisici";
import Caini from "./pagini/Caini";
import Glume from "./pagini/Glume";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Acasa />} />

        <Route path="/pisici" element={<Pisici />} />

        <Route path="/caini" element={<Caini />} />

        <Route path="/glume" element={<Glume />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;