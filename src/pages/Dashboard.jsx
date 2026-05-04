import { useState } from "react";
import Layout from "../components/Layout"
import ProductionComponent from "../components/ProductionComponent"

export default function Dashboard() {

  return (
  <Layout >
    <div className="bg-background text-on-surface">
       <main className="pt-16 pb-24 px-margin-mobile max-w-5xl mx-auto space-y-lg">

        <section className="space-y-xs">
          <h2 className="font-h2 text-h2 text-on-background">¡Buenos días!</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Aquí tienes el resumen de hoy en la planta.
          </p>
        </section>

        {/* Tarjeta destacada: Ganancia */}
        <section>
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-surface-container-high relative overflow-hidden">
            <div className="flex justify-between items-start mb-base">
              <div>
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                  Ganancia de hoy
                </p>
                <h3 className="text-h1 font-h1 text-tertiary mt-xs">$1.200.000</h3>
              </div>
              <div className="bg-tertiary-fixed-dim/20 p-sm rounded-lg text-tertiary">
                <span className="material-symbols-outlined">payments</span>
              </div>
            </div>
            <div className="flex items-center gap-base">
              <span className="material-symbols-outlined text-tertiary text-sm">trending_up</span>
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-tertiary">
                +12.5% vs ayer
              </span>
            </div>


            {/* Elemento decorativo */}
            <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">monetization_on</span>
            </div>
          </div>
        </section>

     {/* Produccion de Hoy*/}

     <div className="flex items-center justify-between">
            <h3 className="font-h3 text-h3 flex items-center gap-sm">
              Produccion de hoy
            </h3>
            <button className="text-primary font-button text-[14px]">Ver todo</button>
          </div>

     <ProductionComponent />


        {/* Tarjetas pequeñas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-md">

          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-md">
            <div className="w-12 h-12 bg-secondary-container/50 rounded-lg flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>

            <div>
              <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
                Ventas del día
              </p>
              <div className=" my-4 py-2">
              <p className="font-h3 text-h3">150 Paquetes</p>
              <p className="font-h3 text-h4 uppercase text-primary">perro</p>
              </div>
               <div className="my-4 py-2">
              <p className="font-h3 text-h3">80 Paquetes</p>
              <p className="font-h3 text-h4 uppercase text-primary">super</p>
              </div>
              <div className="my-4 py-2">
              <p className="font-h3 text-h3">120 Paquetes</p>
              <p className="font-h3 text-h4 uppercase text-primary">Hamburguesa Normal</p>
              </div>
              
              <div className="my-4 py-2">
              <p className="font-h3 text-h3">100 Paquetes</p>
              <p className="font-h3 text-h4 uppercase text-primary">Hamburguesa Premium</p>
              </div>
          </div>
          </div>
        </section>


        {/* Rendimiento Semanal */}
        <section className="space-y-md">
          <h3 className="font-h3 text-h3">Rendimiento Semanal</h3>
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="h-48 w-full flex items-end justify-between gap-base px-2">
              {/* Barras del gráfico */}
              {[
                { label: "Lun", h: "h-3/4", color: "bg-primary-container" },
                { label: "Mar", h: "h-4/5", color: "bg-primary-container" },
                { label: "Mie", h: "h-2/3", color: "bg-primary-container" },
                { label: "Jue", h: "h-full", color: "bg-primary-container" },
                { label: "Vie", h: "h-5/6", color: "bg-primary-container" },
                { label: "Sab", h: "h-1/2", color: "bg-tertiary-container" },
                { label: "Dom", h: "h-1/4", color: "bg-tertiary-container" },
              ].map(({ label, h, color }) => (
                <div key={label} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-surface-container-high rounded-t-lg relative h-32">
                    <div className={`absolute bottom-0 w-full ${color} rounded-t-lg ${h}`} />
                  </div>
                  <span className="text-[10px] mt-xs text-on-surface-variant uppercase font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            {/* Leyenda */}
            <div className="mt-lg pt-md border-t border-surface-container-high flex justify-center gap-xl">
              <div className="flex items-center gap-base">
                <div className="w-3 h-3 bg-primary-container rounded-full" />
                <span className="text-[12px] font-medium">Producción</span>
              </div>
              <div className="flex items-center gap-base">
                <div className="w-3 h-3 bg-tertiary-container rounded-full" />
                <span className="text-[12px] font-medium">Ventas</span>
              </div>
            </div>
          </div>
        </section>
      </main>


      {/* FAB */}
      <button className="fixed bottom-24 right-4 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>

  </Layout >
  );
}
