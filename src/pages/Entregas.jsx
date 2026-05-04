import Layout from "../components/Layout";

export default function Produccion() {
  return (
    <Layout>
      <h2 className="text-lg font-semibold mb-3">
        Entregas
      </h2>

      <div className="bg-white p-4 rounded-xl shadow mb-3">
        <p>Pan Hot Dog - 500 unidades</p>
        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">
          entregas
        </button>
      </div>
    </Layout>
  );
}
