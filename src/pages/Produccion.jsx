import { useState } from "react";
import Layout from "../components/Layout";


export default function Produccion() {
  return (
    <Layout >
    <h1 className="mt-16 text-h3 ml-6">PRODUCCION DE HOY</h1>
      <main className="pt-6 pb-24 px-margin-mobile max-w-lg mx-auto">
        {/* Resumen de planta */}
        <section className="mb-lg">
          <div className="bg-primary p-lg rounded-xl shadow-sm text-on-primary relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-primary-container/80 mb-xs">
                Resumen de Planta
              </p>
              <h2 className="font-h1 text-on-primary-container">
                Total producción: 1,300 panes
              </h2>
              <div className="flex items-center gap-2 mt-sm">
                <span className="material-symbols-outlined text-sm">inventory_2</span>
                <span className="font-body-md">3 lotes activos</span>
              </div>
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">factory</span>
            </div>
          </div>
        </section>

        {/* Lotes de producción */}
        <section className="space-y-md">
          <h3 className="font-h3 text-on-surface px-xs">Lotes de Producción</h3>

          {/* Lote: En proceso */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30">
            <div className="flex justify-between items-start mb-sm">
              <div>
                <h4 className="font-h3 text-on-surface">Pan Hot Dog</h4>
                <p className="text-on-surface-variant font-body-md mt-xs">Cantidad: 500 unidades</p>
              </div>
              <span className="px-sm py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                En proceso
              </span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-2 mb-lg">
              <div className="bg-amber-500 h-2 rounded-full w-[65%]" />
            </div>
            <button className="w-full h-12 bg-primary text-on-primary font-button rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              Marcar como completado
            </button>
          </div>

          {/* Lote: Pendiente */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30">
            <div className="flex justify-between items-start mb-lg">
              <div>
                <h4 className="font-h3 text-on-surface">Pan Hamburguesa</h4>
                <p className="text-on-surface-variant font-body-md mt-xs">Cantidad: 800 unidades</p>
              </div>
              <span className="px-sm py-1 bg-secondary-container text-secondary rounded-full text-xs font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Pendiente
              </span>
            </div>
            <button className="w-full h-12 bg-primary text-on-primary font-button rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_arrow</span>
              Iniciar producción
            </button>
          </div>

          {/* Lote: Completado */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 opacity-70">
            <div className="flex justify-between items-start mb-lg">
              <div>
                <h4 className="font-h3 text-on-surface">Pan de Molde</h4>
                <p className="text-on-surface-variant font-body-md mt-xs">Cantidad: 200 unidades</p>
              </div>
              <span className="px-sm py-1 bg-tertiary-fixed-dim/30 text-tertiary-container rounded-full text-xs font-bold flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                Completado
              </span>
            </div>
            <div className="w-full h-12 bg-surface-container-highest text-on-surface-variant font-button rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
              <span className="material-symbols-outlined">task_alt</span>
              Producción Finalizada
            </div>
          </div>
        </section>


              {/* FAB */}
              <button className="fixed right-6 bottom-24 w-14 h-14 bg-primary-container text-on-primary-container rounded-2xl shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40">
                <span className="material-symbols-outlined text-3xl">add</span>
              </button>
      </main>

   </Layout >
  );
}
