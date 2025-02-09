export function BlurredCircle() {
  return (
    <div
      className="size-[1500px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(157, 6, 32, 0.33), transparent 60%)" }}
    ></div>
  );
}
