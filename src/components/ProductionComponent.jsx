import productos from "../data/productos.json";

export default function ProductionComponent() {
  return (
    <section className="grid grid-cols-2 gap-4">
      {productos.map(({ id, nombre, cantidad, unidad, unidadesPorPaquete, precio }) => {
      const totalUnidades = cantidad * unidadesPorPaquete;
      return (
         <div key={id} className="bg-surface-container-lowest p-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex flex-col items-center gap-sm text-center">
          <div className="w-12 h-12 bg-primary-fixed-dim/20 rounded-lg flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">bakery_dining</span>
          </div>
          <div>
            <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-on-surface-variant uppercase">
              {nombre}
            </p>
            <p className="font-extrabold text-h4">{cantidad} {unidad}</p>
            <p className="text-[12px] text-secondary">{totalUnidades.toLocaleString("es-CO")} Unds.</p>

          </div>
        </div>
         )})}
    </section>
  );
}


