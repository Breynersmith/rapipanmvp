import Layout from "../components/Layout"

export default function Ajustes() {
  return (
  <Layout>
    <main className="pt-16 pb-32 max-w-md mx-auto px-margin-mobile py-lg space-y-xl">
      {/* Section 1: Productos */}
      <section className="space-y-md">
        <div className="flex items-center gap-base">
          <span className="material-symbols-outlined text-primary">inventory_2</span>
          <h3 className="font-h3 text-h3">Configuración de Productos</h3>
        </div>
        <div className="space-y-sm">
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-between border border-transparent">
            <div className="space-y-1">
              <p className="font-button text-on-surface">Pan Hot Dog</p>
              <p className="text-label-caps text-secondary uppercase">10 unidades por paquete</p>
              <p className="font-body-md text-primary font-bold">Precio: $5.000</p>
            </div>
            <button className="h-[40px] px-md rounded-lg bg-secondary-fixed text-primary font-button active:scale-95 transition-transform">
              Editar
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-between border border-transparent">
            <div className="space-y-1">
              <p className="font-button text-on-surface">Pan Hamburguesa</p>
              <p className="text-label-caps text-secondary uppercase">6 unidades por paquete</p>
              <p className="font-body-md text-primary font-bold">Precio: $4.500</p>
            </div>
            <button className="h-[40px] px-md rounded-lg bg-secondary-fixed text-primary font-button active:scale-95 transition-transform">
              Editar
            </button>
          </div>

          <button className="w-full h-12 flex items-center justify-center gap-base rounded-xl border-2 border-dashed border-outline-variant text-secondary font-button hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">add</span>
            Agregar nuevo producto
          </button>
        </div>
      </section>

      {/* Section 2: Negocio */}
      <section className="space-y-md">
        <div className="flex items-center gap-base">
          <span className="material-symbols-outlined text-primary">store</span>
          <h3 className="font-h3 text-h3">Configuración de Negocio</h3>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.05)] space-y-md">
          <div className="space-y-xs">
            <label className="font-label-caps text-secondary uppercase px-1">Nombre del Negocio</label>
            <input className="w-full h-12 px-md bg-background border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none font-body-md" type="text" defaultValue="RAPIPAN Planta Central" />
          </div>
          <div className="space-y-xs">
            <label className="font-label-caps text-secondary uppercase px-1">Teléfono</label>
            <input className="w-full h-12 px-md bg-background border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none font-body-md" placeholder="+57 300 000 0000" type="tel" />
          </div>
          <div className="space-y-xs">
            <label className="font-label-caps text-secondary uppercase px-1">Dirección</label>
            <input className="w-full h-12 px-md bg-background border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none font-body-md" placeholder="Calle Principal #12-34" type="text" />
          </div>
        </div>
      </section>

      {/* Section 3: Alertas */}
      <section className="space-y-md">
        <div className="flex items-center gap-base">
          <span className="material-symbols-outlined text-primary">notifications</span>
          <h3 className="font-h3 text-h3">Alertas</h3>
        </div>
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="flex items-center justify-between p-md border-b border-surface-container">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-outline">warning</span>
              <span className="font-body-md">Alerta de stock bajo</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-secondary-fixed peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-md">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-outline">event_busy</span>
              <span className="font-body-md">Productos próximos a vencer</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-secondary-fixed peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </section>


    </main>

  </Layout >
  );
}
