
import { useBooking } from "../../context/BookingContext";

export default function ContactOptions() {
  const { state, dispatch } = useBooking();

  return (
    <div className="flex gap-4">
      {["email", "whatsapp"].map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => dispatch({ type: "SET_METHOD", payload: m })}
          className={`flex-1 py-2 rounded ${
            state.method === m
              ? "bg-primary text-white"
              : "bg-slate-200 dark:bg-slate-700"
          }`}
        >
          {m === "email" ? "Correo" : "WhatsApp"}
        </button>
      ))}
    </div>
  );
}
