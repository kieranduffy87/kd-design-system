import { Tag } from "@kd/design-system";

export const Default = () => (
  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
    <Tag>UX/UI</Tag>
    <Tag>Brand Architecture</Tag>
    <Tag>Motion</Tag>
  </div>
);

export const Glass = () => (
  <div
    style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "flex-start",
      padding: "1.2rem",
      borderRadius: "var(--kd-radius)",
      background: "var(--kd-grad-placeholder)",
      minHeight: 120,
    }}
  >
    <Tag variant="glass">Brand Identity</Tag>
    <Tag variant="glass">Digital Design</Tag>
  </div>
);
