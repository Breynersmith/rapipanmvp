import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: "/", icon: "dashboard", label: "Inicio" },
    { id: "/produccion",icon: "factory", label: "Producción"  },
    { id: "/ventas",   icon: "receipt_long",  label: "Ventas"     },
    { id: "/ajustes",   icon: "settings",  label: "Configuracion"     },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex justify-around items-center h-20 px-2 pb-safe">
      {tabs.map(({ id, icon, label }) => (
        <button
          key={id}
          onClick={() => navigate(id)}
          className={`flex flex-col items-center justify-center font-['Inter'] text-[10px] font-medium transition-transform duration-150 active:scale-95 rounded-xl px-3 py-1 ${
            location.pathname === id
              ? "text-blue-600 bg-blue-50"
              : "text-gray-400 hover:text-blue-500"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={location.pathname === id ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            {icon}
          </span>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
