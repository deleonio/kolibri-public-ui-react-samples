import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { defineCustomElements } from "@public-ui/components/dist/loader";
import { register } from "@public-ui/core";
import { MAPZ } from "@public-ui/themes";
import { Abbr } from "./samples/abbr";
import { Accordion } from "./samples/accordion";
import { Alert } from "./samples/alert";
import { Table } from "./samples/table";
import { Nav } from "./samples/nav";

register(MAPZ, defineCustomElements)
  .then(() => {
    const htmlDivElement = document.querySelector("div#root");
    if (htmlDivElement instanceof HTMLDivElement) {
      const root = createRoot(htmlDivElement);
      root.render(
        <StrictMode>
          <Router>
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/abbr/*" element={<Abbr />} />
              <Route path="/accordion/*" element={<Accordion />} />
              <Route path="/alert/*" element={<Alert />} />
              <Route path="/nav/*" element={<Nav />} />
              <Route path="/table/*" element={<Table />} />
            </Routes>
          </Router>
        </StrictMode>
      );
    }
  })
  .catch(console.warn);
