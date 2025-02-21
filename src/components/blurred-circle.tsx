export function BlurredCircle() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 size-[1500px] -translate-x-1/2 -translate-y-1/2 transform rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(157, 6, 32, 0.33), transparent 60%)",
      }}
    />
  );
}
