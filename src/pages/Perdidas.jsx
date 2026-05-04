import Layout from "../components/Layout";

export default function Produccion() {

const barras = [
    { label: "MAR", h: "40%", activo: false },
    { label: "MIE", h: "60%", activo: false },
    { label: "JUE", h: "55%", activo: false },
    { label: "VIE", h: "75%", activo: false },
    { label: "SAB", h: "45%", activo: false },
    { label: "DOM", h: "30%", activo: false },
    { label: "LUN", h: "95%", activo: true },
  ];

  const productos = [
    {
      id: 1,
      icon: "bakery_dining",
      nombre: "Pan Perro",
      categoria: "Salado",
      unidades: "30 uds",
      valor: "$24.000",
    },
    {
          id: 2,
          icon: "bakery_dining",
          nombre: "Pan Super",
          categoria: "Salado",
          unidades: "30 uds",
          valor: "$24.000",
        },
    {
      id: 3,
      icon: "breakfast_dining",
      nombre: "Pan Hamburguesa",
      categoria: "Premium",
      unidades: "20 uds",
      valor: "$18.000",
    },
     {
      id: 4,
      icon: "breakfast_dining",
      nombre: "Pan Hamburguesa premium",
      categoria: "Premium",
      unidades: "20 uds",
      valor: "$18.000",
    },

  ];


  return (
    <Layout>
      <h1 className="font-['Inter'] ml-4 mt-16 text-h2 font-semibold tracking-tight text-slate-900 dark:text-white">
                Control de pérdidas
      </h1>
      <main className="pt-6 px-4 space-y-lg">
          {/* Resumen General */}
          <div className="space-y-xs">
            <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-secondary uppercase">
              Resumen General
            </p>
            <div className="bg-error-container/40 p-6 rounded-xl border border-error/10 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-md text-on-error-container opacity-80">Pérdida de hoy</p>
                  <h2 className="font-h1 text-h1 text-error mt-1">$80.000</h2>
                </div>
                <span className="material-symbols-outlined text-error text-3xl">trending_down</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-error/10 text-error rounded-full text-[10px] leading-[16px] tracking-[0.05em] font-semibold">
                  +12% vs ayer
                </span>
                <p className="text-secondary text-[10px] leading-[16px] tracking-[0.05em] font-semibold">
                  Actualizado hace 5 min
                </p>
              </div>
            </div>
          </div>

          {/* Productos desperdiciados */}
          <div className="space-y-md">
            <div className="flex justify-between items-end">
              <h3 className="font-h3 text-h3">Productos desperdiciados</h3>
              <button className="text-primary font-button text-sm">Ver todo</button>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
              <div className="divide-y divide-outline-variant/20">
                {productos.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-md">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">{p.icon}</span>
                      </div>
                      <div>
                        <p className="font-button text-on-surface">{p.nombre}</p>
                        <p className="text-secondary text-sm">Categoría: {p.categoria}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-h3 text-error">{p.unidades}</p>
                      <p className="text-secondary text-xs">{p.valor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tendencia Semanal */}
          <div className="space-y-md">
            <h3 className="font-h3 text-h3">Tendencia Semanal</h3>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/30">
              <div className="flex items-end justify-between h-40 gap-2">
                {barras.map(({ label, h, activo }) => (
                  <div key={label} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className={`w-full rounded-t-lg transition-all ${
                        activo
                          ? "bg-primary/40 border-x border-t border-primary/20"
                          : "bg-surface-container-high"
                      }`}
                      style={{ height: h }}
                    />
                    <span
                      className={`text-[10px] leading-[16px] tracking-[0.05em] font-semibold ${
                        activo ? "text-primary font-bold" : "text-secondary"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insight */}
          <div className="space-y-md pb-8">
            <h3 className="font-h3 text-h3">Insight</h3>
            <div className="bg-primary-container text-on-primary-container p-md rounded-xl shadow-md flex gap-4 items-center">
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-white">lightbulb</span>
              </div>
              <p className="font-body-md text-sm leading-tight">
                <span className="font-bold">Análisis detectado:</span> Estás perdiendo más los días
                lunes. Considera ajustar la producción de los domingos por la tarde.
              </p>
            </div>
          </div>
        </main>
    </Layout>
  );
}
