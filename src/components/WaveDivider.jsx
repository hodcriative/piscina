export default function WaveDivider({ fill = "#ffffff", flip = false, style = {} }) {
  return (
    <div
      aria-hidden="true"
      style={{
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : "none",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 1440 110"
        width="100%"
        height="70"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C240,90 480,0 720,26 C960,52 1200,96 1440,44 L1440,110 L0,110 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
