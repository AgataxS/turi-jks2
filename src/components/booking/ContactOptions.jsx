import { useBooking } from "../../context/BookingContext";

export default function ContactOptions() {
  const { state, dispatch } = useBooking();
  return (
    <div className="flex gap-4 mb-6">
      {[
        { key: "email", label: "Correo" },
        { key: "whatsapp", label: "WhatsApp" },
      ].map((opt) => (
        <button
          key={opt.key}
          type="button"
          onClick={() => dispatch({ type: "SET_METHOD", payload: opt.key })}
          className={`px-4 py-2 rounded border ${
            state.method === opt.key
              ? "bg-slate-900 text-white"
              : "bg-white dark:bg-slate-700"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
