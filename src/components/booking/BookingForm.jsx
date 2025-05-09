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
  email: yup
    .string()
    .email("Correo inválido")
    .required("Correo requerido"),
  date: yup.string().required("Fecha requerida"),
});

export default function BookingForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const { state, total } = useBooking();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { package: pkg, extras } = state;

    /* --- si es promo anteponemos la palabra PROMOCIÓN --- */
    const displayName = pkg?.isPromotion
      ? `PROMOCIÓN – ${pkg.title ?? pkg.name}`
      : pkg?.name ?? "Salar Tour";

    const extrasList = extras.length
      ? extras.map((e) => e.name).join(", ")
      : "Sin extras";

    const payload = {
      ...data,
      packageName: displayName,
      extras: extrasList,
      total,
    };

    if (state.method === "email") {
      await sendBookingEmail(payload);
      navigate("/confirmed");
    } else {
      const link = buildWhatsappLink({
        number: import.meta.env.VITE_WHATSAPP_NUMBER,
        packageName: `${displayName} + ${extrasList}`,
        date: data.date,
        name: data.name,
      });
      window.open(link, "_blank");
      navigate("/confirmed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6"
    >
      <h3 className="text-2xl font-serif font-bold text-primary text-center">
        {state.package?.isPromotion
          ? `PROMOCIÓN – ${state.package.title}`
          : state.package?.name ??
            t("booking.choose", "Reserva personalizada")}
      </h3>

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
          <p className="text-red-500 text-xs mt-1">
            {errors.name.message}
          </p>
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
          <p className="text-red-500 text-xs mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Fecha */}
      <div>
        <DatePicker
          label={t("booking.date", "Fecha deseada")}
          {...register("date")}
        />
        {errors.date && (
          <p className="text-red-500 text-xs mt-1">
            {errors.date.message}
          </p>
        )}
      </div>

      <ContactOptions />
      <ExtrasSelector />

      <div className="text-right font-bold text-lg text-accent">
        {t("booking.total", "Total")}:{" "}
        {total.toLocaleString("es-BO", {
          style: "currency",
          currency: "BOB",
        })}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 transition"
      >
        {isSubmitting
          ? t("booking.sending", "Enviando…")
          : t("booking.confirm", "Confirmar reserva")}
      </button>
    </form>
  );
}
