import { ServiceRow } from "@kd/design-system";

export const Single = () => (
  <div style={{ minWidth: 420 }}>
    <ServiceRow num="01" title="Brand Strategy" />
  </div>
);

export const List = () => (
  <div style={{ minWidth: 480, borderTop: "1px solid var(--kd-line)" }}>
    <ServiceRow num="01" title="Brand Strategy" />
    <ServiceRow num="02" title="Identity & Design Systems" />
    <ServiceRow num="03" title="Digital & Performance Marketing" />
  </div>
);
