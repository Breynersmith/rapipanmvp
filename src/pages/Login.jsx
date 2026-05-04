import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function LoginPage() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ login, setLogin ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true)
    localStorage.setItem("login", JSON.stringify(true));
    navigate("/inicio")
  };

  return (
    <div className="font-body-md text-on-background min-h-screen flex items-center justify-center p-margin-mobile">
      <main className="w-full max-w-[440px]">
        {/* Brand Identity */}
        <div className="mb-xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-md shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-[32px]">
              precision_manufacturing
            </span>
          </div>
          <h1 className="font-h1 text-h1 text-on-surface mb-xs">RAPIPAN</h1>
          <p className="font-body-md text-on-surface-variant max-w-[280px] mx-auto">
            Sistema de Control de Producción y Ventas
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0px_8px_32px_rgba(0,0,0,0.06)] border border-outline-variant/30 p-xl">
          <form onSubmit={handleSubmit} className="space-y-lg">
            {/* Email */}
            <div className="space-y-base">
              <label
                className="font-label-caps text-label-caps text-on-surface-variant block ml-xs"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <input
                  className="w-full h-14 pl-11 pr-md bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="usuario@rapipan.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-base">
              <div className="flex justify-between items-center px-xs">
                <label
                  className="font-label-caps text-label-caps text-on-surface-variant block"
                  htmlFor="password"
                >
                  Contraseña
                </label>

                 <a  className="font-label-caps text-label-caps text-primary hover:underline transition-all"
                  href="#"
                >
                  ¿Olvidó su clave?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <input
                  className="w-full h-14 pl-11 pr-md bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-base">
              <button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-surface-tint active:scale-[0.98] transition-all rounded-xl font-button text-button text-on-primary shadow-md shadow-primary/20 flex items-center justify-center gap-base"
              >
                <span>Ingresar</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Secondary Options */}
          <div className="mt-xl pt-lg border-t border-outline-variant/30 flex flex-col items-center gap-md">
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">language</span>
              <span className="font-label-caps text-label-caps uppercase">Región: Planta Norte</span>
            </div>
            <p className="font-label-caps text-label-caps text-outline text-center">
              Acceso para personal autorizado
            </p>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="mt-xl opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 rounded-xl overflow-hidden h-24 relative">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALDvrQ_5xfWPwan-CrfudGqadwc8mbbDWd-8YEmJCEzBlLKVmYkhsmqJPc1IXgfdzO92E5moCPCksM42t8fdSpiHOuRS02GuuJAIdJDBiTT-p-x51nHbHc_UVPD7j-bW3aLlNHYIHgOb7OlucE_yW45jzcZ_N8CgAcsi8ODoynMyPYdU_i6L1KmO3nJRh3vF58FdE5gOsnURAmntX2w6A5bfljZGZbWR0le6FHJBpi_2m9WA-U0FU9xrtVobsoOD8B7oG185AVqg"
            alt="Línea de producción industrial de panadería"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </main>
    </div>
  );
}
