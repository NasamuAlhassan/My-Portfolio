/**
 * The page canvas.
 *
 * Deliberately cheap: radial gradients are already soft, so no `blur()`
 * filter is used, and the drift animates `translate3d` only. Both together
 * mean these layers stay on the compositor and never repaint — the earlier
 * version blurred at 110px *and* animated scale, which forced a full
 * re-rasterisation of a viewport-sized surface on every frame.
 */
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(158deg,#FBFBF8_0%,#F2F5EF_36%,#EDF2F1_66%,#F9F8F3_100%)]" />

      <div
        className="animate-driftA absolute -left-[25vw] -top-[30vh] h-[95vh] w-[95vw] will-change-transform"
        style={{
          background: 'radial-gradient(closest-side, rgba(29,74,47,0.18), transparent 100%)',
        }}
      />
      <div
        className="animate-driftB absolute -right-[22vw] top-[5vh] h-[90vh] w-[90vw] will-change-transform"
        style={{
          background: 'radial-gradient(closest-side, rgba(79,209,139,0.2), transparent 100%)',
        }}
      />
      <div
        className="animate-driftC absolute -bottom-[28vh] left-[8vw] h-[92vh] w-[95vw] will-change-transform"
        style={{
          background: 'radial-gradient(closest-side, rgba(180,120,80,0.13), transparent 100%)',
        }}
      />

      <div className="hairline-grid absolute inset-0 opacity-50" />
    </div>
  )
}
