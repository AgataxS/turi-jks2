import { Suspense } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="p-10 text-center">Cargando…</div>}>
          <AppRoutes />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
