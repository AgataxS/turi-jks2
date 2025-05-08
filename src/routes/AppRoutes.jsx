
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PackagesPage from "../pages/PackagesPage";
import PackageDetailPage from "../pages/PackageDetailPage";
import PromotionsPage from "../pages/PromotionsPage";
import PromotionDetailPage from "../pages/PromotionDetailPage";
import BookingPage from "../pages/BookingPage";
import ConfirmationPage from "../pages/ConfirmationPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* Paquetes */}
      <Route path="packages" element={<PackagesPage />} />
      <Route path="packages/:slug" element={<PackageDetailPage />} />
      {/* Promociones */}
      <Route path="promotions" element={<PromotionsPage />} />
      <Route path="promotions/:slug" element={<PromotionDetailPage />} />
      {/* Reserva directa */}
      <Route path="booking" element={<BookingPage />} />
      <Route path="confirmed" element={<ConfirmationPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
