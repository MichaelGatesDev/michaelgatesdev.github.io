import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";

beforeEach(() => {
  window.localStorage.clear();
  delete document.documentElement.dataset.theme;
});

test("renders the portfolio and switches languages and themes", () => {
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
  );

  expect(
    screen.getByRole("heading", {
      name: "Online game systems for console and PC.",
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Game Development" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Associate Full-stack Developer" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Communication Japanese Course")).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: "Resume" })[0]).toHaveAttribute(
    "href",
    expect.stringContaining("drive.google.com"),
  );

  fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  expect(window.localStorage.getItem("portfolio-theme")).toBe("dark");

  fireEvent.click(screen.getByRole("button", { name: "Switch to Japanese" }));

  expect(
    screen.getByRole("heading", {
      name: "コンソール・PC向けオンラインゲームシステム。",
    }),
  ).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute("lang", "ja");
});
