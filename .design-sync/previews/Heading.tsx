import { Heading, Label } from "@kd/design-system";

export const Hero = () => (
  <Heading role="hero" accent="perform.">
    A brand built to
  </Heading>
);

export const Display = () => (
  <Heading role="display" accent="perform.">
    Brands. Built to
  </Heading>
);

export const Title = () => (
  <Heading role="title" accent="Work">
    Selected
  </Heading>
);

export const Subhead = () => (
  <Heading role="subhead">Clarity is the product</Heading>
);

export const Lede = () => (
  <Heading role="lede" as="p">
    Most designers improve how you look. I improve how your business works.
  </Heading>
);

export const WithKicker = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
    <Label>02 — The Mark</Label>
    <Heading role="title" accent="chevron.">
      Two letters, one
    </Heading>
  </div>
);
