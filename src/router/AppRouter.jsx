import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Produccion from "../pages/Produccion";
import Ventas from "../pages/Ventas";
import Ajustes from "../pages/Ajustes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/produccion" element={<Produccion/>}/>
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/ajustes" element={<Ajustes />} />
      </Routes>
    </BrowserRouter>
  );
}
