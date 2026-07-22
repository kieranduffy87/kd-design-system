import { KdProvider, Heading, Label, Button } from "@kd/design-system";

const Panel = () => (
  <div style={{ padding: "2rem" }}>
    <Label style={{ color: "var(--kd-blue)" }}>KD · Design System</Label>
    <Heading role="subhead" style={{ margin: "0.6rem 0" }} accent="perform.">
      Built to
    </Heading>
    <p style={{ color: "var(--kd-muted)", marginBottom: "1.2rem", maxWidth: "38ch" }}>
      KdProvider applies the typography scope and the theme's tokens to
      everything inside it.
    </p>
    <Button>Start a project</Button>
  </div>
);

export const Light = () => (
  <KdProvider theme="light">
    <Panel />
  </KdProvider>
);

export const Dark = () => (
  <KdProvider theme="dark">
    <Panel />
  </KdProvider>
);
