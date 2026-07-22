import { ThemeToggle } from "@kd/design-system";

export const Light = () => <ThemeToggle theme="light" />;

export const Dark = () => (
  <div
    style={{
      padding: "1.2rem",
      borderRadius: "var(--kd-radius)",
      background: "#08090b",
    }}
    data-theme="dark"
  >
    <ThemeToggle theme="dark" />
  </div>
);
