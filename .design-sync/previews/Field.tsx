import { Field } from "@kd/design-system";

export const Default = () => (
  <Field label="Name" placeholder="Your name" style={{ minWidth: 260 }} />
);

export const Filled = () => (
  <Field label="Email" type="email" defaultValue="hello@studio.ie" style={{ minWidth: 260 }} />
);

export const Error = () => (
  <Field
    label="Budget"
    defaultValue="—"
    error="Please choose a budget range."
    style={{ minWidth: 260 }}
  />
);

export const Multiline = () => (
  <Field
    label="Project brief"
    multiline
    rows={4}
    placeholder="Tell me about the brand, the audience, and what needs to work harder."
    style={{ minWidth: 320 }}
  />
);
