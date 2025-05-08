import { rest } from "msw";
import { server } from "@/test-utils/mswSetup";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { BookingProvider } from "@/context/BookingContext";
import BookingForm from "../BookingForm";

function wrapper(children) {
  return (
    <BrowserRouter>
      <BookingProvider>{children}</BookingProvider>
    </BrowserRouter>
  );
}

it("envía correo y navega a /confirmed", async () => {
  server.use(
    rest.post("https://api.emailjs.com/api/v1.0/email/send", (_, res, ctx) =>
      res(ctx.status(200))
    )
  );

  render(wrapper(<BookingForm />));

  userEvent.type(screen.getByLabelText(/Nombre/), "Pedro");
  userEvent.type(screen.getByLabelText(/Correo/), "pedro@mail.com");
  userEvent.type(screen.getByLabelText(/Fecha/), "2025‑05‑10");
  userEvent.click(
    screen.getByRole("button", { name: /Confirmar reserva/i })
  );

  await waitFor(() =>
    expect(global.location.pathname).toBe("/confirmed")
  );
});
