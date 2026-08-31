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
    screen.getByRole("heading", { name: "Mobile Apps" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Chari Chizu" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", {
      name: "Chari Chizu map showing a bicycle parking location near Yurakucho Station",
    }),
  ).toHaveAttribute("src", expect.stringContaining("chari-chizu-parking.jpg"));
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
  expect(
    screen.getByText(
      "Chari Chizuは、東京で合法的に駐輪できる場所を探し、駐輪禁止区域の案内を確認できるAndroidアプリです。",
    ),
  ).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute("lang", "ja");
});
