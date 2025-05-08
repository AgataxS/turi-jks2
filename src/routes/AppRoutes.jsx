import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PackagesPage from "../pages/PackagesPage";
import PackageDetailPage from "../pages/PackageDetailPage";
import BookingPage from "../pages/BookingPage";
import ConfirmationPage from "../pages/ConfirmationPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="packages" element={<PackagesPage />} />
      <Route path="packages/:slug" element={<PackageDetailPage />} />
      <Route path="booking" element={<BookingPage />} />
      <Route path="confirmed" element={<ConfirmationPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}