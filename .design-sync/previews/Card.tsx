import { Card, Heading, Label } from "@kd/design-system";

export const Basic = () => (
  <Card style={{ maxWidth: 420 }}>
    <Label style={{ color: "var(--kd-blue)" }}>Principle 01</Label>
    <Heading role="subhead" as="h3" style={{ margin: "0.6rem 0" }}>
      Clarity is the product
    </Heading>
    <p style={{ color: "var(--kd-muted)" }}>
      Remove ambiguity before adding decoration. If an element doesn't make the
      message clearer, it doesn't ship.
    </p>
  </Card>
);

export const Lift = () => (
  <Card lift style={{ maxWidth: 420 }}>
    <Heading role="subhead" as="h3" style={{ marginBottom: "0.5rem" }}>
      Hover to lift
    </Heading>
    <p style={{ color: "var(--kd-muted)" }}>
      Linked cards raise −4px with a blue border and a soft shadow on hover.
    </p>
  </Card>
);
