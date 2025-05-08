// src/components/booking/BookingForm.jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";
import { sendBookingEmail } from "../../services/emailService";
import { buildWhatsappLink } from "../../services/whatsappService";
import { DatePicker } from "./DatePicker";
import ExtrasSelector from "./ExtrasSelector";
import ContactOptions from "./ContactOptions";
import { useTranslation } from "react-i18next";

const schema = yup.object({
  name: yup.string().required("Nombre requerido"),
  email: yup.string().email("Correo inválido").required("Correo requerido"),
  date: yup.string().required("Fecha requerida"),
});

export default function BookingForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const { state, total, dispatch } = useBooking();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      packageName: state.package?.name || "Salar Tour",
      isPromo: state.package?.promo || false,
      extras: state.extras.map((e) => e.name).join(", ") || "Sin extras",
      total,
    };

    if (state.method === "email") {
      await sendBookingEmail(payload);
      navigate("/confirmed");
    } else {
      const link = buildWhatsappLink({
        number: import.meta.env.VITE_WHATSAPP_NUMBER,
        packageName: `${
          payload.isPromo ? "PROMO · " : ""
        }${payload.packageName}`,
        date: data.date,
        name: data.name,
        total,
      });
      window.open(link, "_blank");
      navigate("/confirmed");
    }

    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Cabecera */}
      <div>
        <h3 className="text-lg font-bold text-primary">
          {state.package ? state.package.name : "Reserva personalizada"}
        </h3>
        {state.package?.promo && (
          <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2 py-[2px] rounded-full mt-1">
            PROMOCIÓN
          </span>
        )}
      </div>

      {/* Nombre */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {t("booking.name", "Nombre")}
        </label>
        <input
          {...register("name")}
          className="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-primary/40 outline-none"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Correo */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {t("booking.email", "Correo electrónico")}
        </label>
        <input
          {...register("email")}
          className="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-primary/40 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Fecha */}
      <div>
        <DatePicker label={t("booking.date", "Fecha deseada")} {...register("date")} />
        {errors.date && (
          <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
        )}
      </div>

      {/* Método */}
      <ContactOptions />

      {/* Extras */}
      <ExtrasSelector />

      {/* Total */}
      <div className="text-right font-bold text-lg text-accent">
        {t("booking.total", "Total")}:{" "}
        {total.toLocaleString("es-BO", { style: "currency", currency: "BOB" })}
      </div>

      {/* Botón */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 transition"
      >
        {isSubmitting ? "Enviando…" : t("booking.confirm", "Confirmar reserva")}
      </button>
    </form>
  );
}
