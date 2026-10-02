// Target.tsx — the shooting-target graphic in the hero, drawn in SVG.
// It links her two worlds: rifle shooting and pixel-precise UI work.
// The rings are generated from an array instead of written by hand.
const rings = [150, 120, 90, 60, 30];

export default function Target() {
  return (
    <svg className="target" viewBox="0 0 320 320" aria-hidden="true">
      {rings.map((r, i) => (
        <circle
          key={r}
          className="ring"
          cx="160"
          cy="160"
          r={r}
          // CSS custom property used to stagger the animation per ring
          style={{ ["--i" as string]: i }}
        />
      ))}
      <line className="crosshair" x1="160" y1="0" x2="160" y2="320" />
      <line className="crosshair" x1="0" y1="160" x2="320" y2="160" />
      <circle className="bullseye" cx="160" cy="160" r="12" />
    </svg>
  );
}
