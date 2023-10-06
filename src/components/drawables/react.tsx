export default function ReactLogo(props: JSX.IntrinsicElements["svg"]) {
  // From official documentation
  // Logo: github.com/reactjs/react.dev/blob/3cd1723658f0628aa3c68badd3e32dde96fe404c/src/components/Logo.tsx
  // Color: github.com/reactjs/react.dev/blob/3cd1723658f0628aa3c68badd3e32dde96fe404c/colors.js#L45
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="0" cy="0" r="2" fill="#149ECA" />
      <g stroke="#149ECA" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
  );
}
