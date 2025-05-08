
import { addons } from "../../data/addons";
import { useBooking } from "../../context/BookingContext";

export default function ExtrasSelector() {
  const { state, dispatch } = useBooking();
  const selected = state.extras.map((e) => e.id);

  const toggle = (addon) => {
    const exists = selected.includes(addon.id);
    const newList = exists
      ? state.extras.filter((e) => e.id !== addon.id)
      : [...state.extras, addon];

    dispatch({ type: "SET_EXTRAS", payload: newList });
  };

  return (
    <div className="mt-6">
      <h4 className="font-semibold mb-2">Extras opcionales</h4>
      <ul className="space-y-1">
        {addons.map((a) => (
          <li key={a.id} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={selected.includes(a.id)}
              onChange={() => toggle(a)}
              className="accent-primary h-4 w-4"
            />
            <span className="flex-1">{a.name}</span>
            <span className="text-slate-500">
              {a.price.toLocaleString("es-BO", {
                style: "currency",
                currency: "BOB",
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
