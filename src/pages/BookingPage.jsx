import BookingForm from "../components/booking/BookingForm";

export default function BookingPage() {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Reserva tu aventura</h2>
      <BookingForm />
    </section>
  );
}
