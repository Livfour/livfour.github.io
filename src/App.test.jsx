import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";

test("the homepage does not expose a CV link", () => {
  const container = document.createElement("div");
  container.innerHTML = renderToStaticMarkup(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );

  expect(container.querySelector('a[href="./cv"]')).toBeNull();
});
