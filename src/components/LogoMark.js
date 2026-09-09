export default function LogoMark({ height = 52 }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Allied Green Energy"
      style={{ height: `${height}px`, width: "auto", display: "block" }}
    />
  );
}
