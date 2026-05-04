import Layout from "../components/Layout";
import { useState } from "react";

export default function Pedidos() {
         const [activeTab, setActiveTab] = useState("pedidos");
         const [filtro, setFiltro] = useState("Pendientes");



       const filtros = ["Todos", "Pendientes", "Entregados"];

       const pedidos = [
         {
           id: 1,
           cliente: "Tienda Don José",
           hora: "Hoy, 08:30 AM",
           icono: "schedule",
           estado: "Pendiente",
           estadoClase: "bg-secondary-container text-secondary",
           detalle: "200 Pan Hot Dog, 100 Pan Hamburguesa",
           detalleClase: "bg-surface-container-low",
           cardClase: "bg-white",
           pendiente: true,
         },
         {
           id: 2,
           cliente: "Supermercado El Sol",
           hora: "Ayer, 04:15 PM",
           icono: "history",
           estado: "Entregado",
           estadoClase: "bg-tertiary-container text-on-tertiary-container",
           detalle: "500 Pan Hamburguesa",
           detalleClase: "bg-surface-container-lowest opacity-75",
           cardClase: "bg-white/70 border border-outline-variant",
           pendiente: false,
         },
         {
           id: 3,
           cliente: "Restaurante Central",
           hora: "Hoy, 10:00 AM",
           icono: "schedule",
           estado: "Pendiente",
           estadoClase: "bg-secondary-container text-secondary",
           detalle: "300 Pan Hot Dog",
           detalleClase: "bg-surface-container-low",
           cardClase: "bg-white",
           pendiente: true,
         },
       ];

       const pedidosFiltrados = pedidos.filter((p) => {
         if (filtro === "Todos") return true;
         if (filtro === "Pendientes") return p.pendiente;
         if (filtro === "Entregados") return !p.pendiente;
       });

  return (
    <Layout>
      <div className="bg-background text-on-background min-h-screen pb-3">


           <main className="pt-16 px-margin-mobile">
             {/* Filter Bar */}
             <section className="mt-md py-sm sticky top-16 bg-background z-40">
               <div className="flex gap-2 overflow-x-auto no-scrollbar pb-xs">
                 {filtros.map((f) => (
                   <button
                     key={f}
                     onClick={() => setFiltro(f)}
                     className={`px-lg py-2 rounded-full font-button text-button transition-colors whitespace-nowrap ${
                       filtro === f
                         ? "bg-primary text-on-primary shadow-sm"
                         : "bg-surface-container-high text-on-surface-variant"
                     }`}
                   >
                     {f}
                   </button>
                 ))}
               </div>
             </section>

             {/* Lista de pedidos */}
             <div className="space-y-md mt-sm">
               {pedidosFiltrados.map((p) => (
                 <article
                   key={p.id}
                   className={`${p.cardClase} rounded-xl p-md flex flex-col gap-md shadow-[0_2px_8px_rgba(0,0,0,0.06)]`}
                 >
                   <div className={`flex justify-between items-start ${!p.pendiente ? "opacity-75" : ""}`}>
                     <div>
                       <h2 className="font-h3 text-h3 text-on-surface">{p.cliente}</h2>
                       <div className={`flex items-center gap-1 mt-xs ${p.pendiente ? "text-gray-500" : "text-gray-400"}`}>
                         <span className="material-symbols-outlined text-[18px]">{p.icono}</span>
                         <span className="font-body-md text-sm">{p.hora}</span>
                       </div>
                     </div>
                     <span className={`px-3 py-1 text-[12px] leading-[16px] tracking-[0.05em] font-semibold rounded-full ${p.estadoClase}`}>
                       {p.estado}
                     </span>
                   </div>

                   <div className={`${p.detalleClase} p-sm rounded-lg`}>
                     <p className="font-body-md text-on-surface-variant leading-relaxed">{p.detalle}</p>
                   </div>

                   {p.pendiente ? (
                     <div className="grid grid-cols-2 gap-sm pt-xs">
                       <button className="h-12 rounded-xl bg-secondary-fixed text-primary font-button flex items-center justify-center active:scale-95 transition-transform">
                         Ver detalle
                       </button>
                       <button className="h-12 rounded-xl bg-primary text-white font-button flex items-center justify-center active:scale-95 transition-transform">
                         Listo
                       </button>
                     </div>
                   ) : (
                     <button className="h-12 rounded-xl border border-outline text-outline font-button flex items-center justify-center active:scale-95 transition-transform">
                       Ver detalle
                     </button>
                   )}
                 </article>
               ))}
             </div>
           </main>

           {/* FAB */}
           <button className="fixed right-6 bottom-28 w-14 h-14 bg-primary-container text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform z-50">
             <span className="material-symbols-outlined text-3xl">add</span>
           </button>

           {/* BottomNavBar */}

         </div>
    </Layout>
  );
}
