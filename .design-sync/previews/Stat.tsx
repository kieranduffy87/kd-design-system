import { Stat } from "@kd/design-system";

export const Single = () => <Stat value="15" caption="years of design practice" />;

export const Band = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(140px, 1fr))",
      gap: "2rem",
      maxWidth: 640,
    }}
  >
    <Stat value="15" caption="years of design practice" />
    <Stat value="35" caption="selected case studies" />
    <Stat value="4" caption="continents of clients" />
  </div>
);
