import { addons } from "../../data/addons";
import { useBooking } from "../../context/BookingContext";

export default function ExtrasSelector() {
  const { state, dispatch } = useBooking();
  const toggle = (addon) => dispatch({ type: "TOGGLE_EXTRA", payload: addon });

  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-2">Extras opcionales</h4>
      <div className="grid gap-2">
        {addons.map((addon) => (
          <label key={addon.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={!!state.extras.find((e) => e.id === addon.id)}
              onChange={() => toggle(addon)}
            />
            <span className="flex-1">
              {addon.name} – {addon.price.toLocaleString("es-BO", {
                style: "currency",
                currency: "BOB",
              })}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}