import { useState } from "react";
import Layout from "../components/Layout";
import ventas from "../data/ventas.json";

export default function Dashboard() {
  const [filtro, setFiltro] = useState("todas");

  const totalVentas = ventas.length;
  const pendientes = ventas.filter(v => v.estado === "pendiente").length;
  const ingresos = ventas
    .filter(v => v.estado === "entregado")
    .reduce((acc, v) => acc + v.total, 0);

  const ventasFiltradas = filtro === "todas"
    ? ventas
    : ventas.filter(v => v.estado === filtro);

  return (
    <Layout>
       <main className="px-margin-mobile pt-16 space-y-lg pb-32">
          {/* Header Text */}
          <section className="space-y-xs">
            <p className="text-label-caps font-label-caps text-primary uppercase">Hoy</p>
            <h1 className="text-h1 font-h1 text-on-surface">Ventas del día</h1>
            <p className="text-body-md font-body-md text-outline">Control de ventas y entregas</p>
          </section>

          {/* Summary Bento Grid */}
          <section className="grid grid-cols-2 gap-md">
            <div className="col-span-2 bg-white rounded-xl p-md shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-surface-container flex items-center justify-between">
              <div>
                <p className="text-label-caps font-label-caps text-outline uppercase">Ventas hoy</p>
                <p className="text-h2 font-h2 text-on-surface">{totalVentas}</p>
              </div>
              <div className="bg-primary-fixed p-sm rounded-lg text-primary">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-md shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-surface-container">
              <p className="text-label-caps font-label-caps text-outline uppercase">Ingresos</p>
              <p className="text-h3 font-h3 text-tertiary-container">${ingresos.toLocaleString("es-CO")}</p>
            </div>
            <div className="bg-white rounded-xl p-md shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-surface-container">
              <p className="text-label-caps font-label-caps text-outline uppercase">Pendientes</p>
              <p className="text-h3 font-h3 text-error">{pendientes}</p>
            </div>
          </section>

          {/* Filtros */}
          <section className="flex gap-sm overflow-x-auto pb-xs scrollbar-hide">
            {[
              { id: "todas",     label: "Todas"      },
              { id: "pendiente", label: "Pendientes" },
              { id: "entregado", label: "Entregadas" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setFiltro(id)}
                className={`px-lg py-sm rounded-full text-button font-button whitespace-nowrap active:scale-95 transition-transform ${
                  filtro === id
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-white border border-outline-variant text-on-surface-variant"
                }`}
              >
                {label}
              </button>
            ))}
          </section>

          {/* Lista de ventas */}
          <section className="space-y-md">
            {ventasFiltradas.map((venta) => (
              <article key={venta.id} className="bg-white rounded-xl p-md shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-surface-container-high space-y-md relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div className="space-y-xs">
                    <h3 className="text-h3 font-h3 text-on-surface">{venta.cliente}</h3>
                    <p className="text-label-caps font-label-caps text-outline">{venta.hora}</p>
                  </div>
                  <span className={`text-[11px] font-bold px-sm py-xs rounded-full uppercase tracking-wider ${
                    venta.estado === "pendiente"
                      ? "bg-error-container text-on-error-container"
                      : "bg-tertiary-fixed text-on-tertiary-fixed"
                  }`}>
                    {venta.estado}
                  </span>
                </div>

                <div className="bg-surface-container-low rounded-lg p-sm space-y-xs">
                  {venta.productos.map((p, i) => (
                    <div key={i} className="flex items-center gap-sm">
                      <span className="material-symbols-outlined text-[18px] text-primary">bakery_dining</span>
                      <p className="text-body-md font-body-md text-on-surface-variant">{p.cantidad} paquetes {p.nombre}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-sm">
                  <p className="text-label-caps font-label-caps text-outline">Total</p>
                  <p className="text-h3 font-h3 text-on-surface">${venta.total.toLocaleString("es-CO")}</p>
                </div>

                {venta.estado === "pendiente" ? (
                  <button className="w-full bg-primary h-12 rounded-xl text-white font-button text-button active:scale-[0.98] transition-transform shadow-md flex items-center justify-center gap-base">
                    Marcar como entregado
                  </button>
                ) : (
                  <div className="flex items-center justify-center gap-xs py-sm text-tertiary font-button text-button">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>Entregado {venta.horaEntrega}</span>
                  </div>
                )}
              </article>
            ))}
          </section>

                  {/* FAB */}
                  <button className="fixed bottom-24 right-4 bg-primary-container text-on-primary-container shadow-xl h-14 px-6 rounded-full flex items-center gap-base active:scale-95 transition-transform z-40 border border-white/20">
                    <span className="material-symbols-outlined">add</span>
                    <span className="font-button text-button">Nueva venta</span>
                  </button>

        </main>
    </Layout>
  );
}
