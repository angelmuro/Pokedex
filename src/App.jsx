import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer";
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import PokedexById from "./Pages/PokedexById";
import ProtectedRoutes from "./Pages/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexById />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
