import { useNavigate } from "react-router-dom"

export default function Header(){
  const navigate = useNavigate()

  const handleLogout = () => {
  navigate("/login")
}

  return(
     <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-[#F2F2F7] dark:bg-slate-950 border-b border-[#D1D1D6] dark:border-slate-800">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#007AFF] dark:text-blue-400">
            precision_manufacturing
          </span>
          <div>
            <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-widest leading-none">
              RAPIPAN
            </h1>
            <p className="text-[10px] font-['Inter'] font-semibold tracking-tight text-slate-500 uppercase">
              Control de Producción y Ventas
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-opacity active:opacity-70">
            <span className="material-symbols-outlined text-slate-500">notifications</span>
          </button>
           <button onClick={handleLogout} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-opacity active:opacity-70" title="salir">
            <span className="material-symbols-outlined text-slate-700">
              exit_to_app
            </span>
          </button>
        </div>
      </header>

  )
}
