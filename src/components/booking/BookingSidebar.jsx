
import { useEffect } from "react";
import { useBooking } from "../../context/BookingContext";
import BookingForm from "./BookingForm";


export default function BookingSidebar({ pack }) {
  const { dispatch } = useBooking();

  useEffect(() => {
    dispatch({ type: "SET_PACKAGE", payload: pack });
    dispatch({ type: "SET_EXTRAS", payload: [] });
  }, [pack?.id, dispatch]);           
  return (
    <aside className="mt-10 lg:mt-0 lg:sticky lg:top-24">
      <div className="rounded-3xl bg-white shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        <BookingForm />
      </div>
    </aside>
  );
}
