import { FC } from "react";
import { KolAbbr } from "@public-ui/react";

export const AbbrBasic: FC = () => (
  <>
    Ich bin <KolAbbr _title="Abkürzung">z.B.</KolAbbr> eine Abkürzung.
    <br />
    Ich bin{" "}
    <KolAbbr _title="Abkürzung" _tooltipAlign="right">
      z.B.
    </KolAbbr>{" "}
    eine Abkürzung (rechts).
    <br />
    Ich bin{" "}
    <KolAbbr _title="Abkürzung" _tooltipAlign="bottom">
      z.B.
    </KolAbbr>{" "}
    eine Abkürzung (unten).
    <br />
    Ich bin{" "}
    <KolAbbr _title="Abkürzung" _tooltipAlign="left">
      z.B.
    </KolAbbr>{" "}
    eine Abkürzung (links).
    <br />
    Ich bin{" "}
    <KolAbbr _title="Abkürzung" _tooltipAlign="top">
      z.B.
    </KolAbbr>{" "}
    eine Abkürzung (oben).
  </>
);
