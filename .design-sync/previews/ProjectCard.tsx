import { ProjectCard } from "@kd/design-system";

export const Placeholder = () => (
  <div style={{ maxWidth: 380 }}>
    <ProjectCard
      client="Mistara"
      tagline="Ritual in Every Cup"
      tags={["Brand Identity", "Digital"]}
    />
  </div>
);

export const NoTags = () => (
  <div style={{ maxWidth: 380 }}>
    <ProjectCard client="Liffey Meats" tagline="Born of the Land" />
  </div>
);

export const Grid = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "1.5rem",
      maxWidth: 640,
    }}
  >
    <ProjectCard client="ASL Airlines" tagline="Activating Aviation Excellence" tags={["Motion"]} />
    <ProjectCard client="Engineers Ireland" tagline="Engineering a Superior Digital Experience" tags={["UX/UI"]} />
  </div>
);
