import { PillNav } from "@kd/design-system";

export const Default = () => (
  <PillNav
    links={[
      { label: "Work", href: "#", active: true },
      { label: "Services", href: "#" },
      { label: "About", href: "#" },
    ]}
    cta={{ label: "Contact", href: "#" }}
  />
);

export const LinksOnly = () => (
  <PillNav
    links={[
      { label: "Overview", href: "#" },
      { label: "Case studies", href: "#", active: true },
      { label: "Contact", href: "#" },
    ]}
  />
);
