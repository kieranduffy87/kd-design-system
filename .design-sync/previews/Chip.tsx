import { Chip } from "@kd/design-system";

export const Default = () => <Chip>Brand Identity</Chip>;

export const Active = () => <Chip active>All</Chip>;

export const FilterRow = () => (
  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
    <Chip active>All</Chip>
    <Chip>Brand Identity</Chip>
    <Chip>Digital Design</Chip>
    <Chip>Campaigns</Chip>
    <Chip>Motion</Chip>
  </div>
);
