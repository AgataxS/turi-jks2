import { buildWhatsappLink } from "../whatsappService";

describe("buildWhatsappLink", () => {
  it("arma correctamente la URL", () => {
    const url = buildWhatsappLink({
      number: "59167236221",
      packageName: "Full Day",
      date: "2025‑05‑01",
      name: "Ana",
    });
    expect(url).toMatch(
      /wa\.me\/59167236221.*Full%20Day.*2025-05-01.*Ana/i
    );
  });
});
