import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function PhTestTubeLight(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 256 256"
      {...props}
      key={key}
    >
      <path
        fill="#FFFFFF"
        d="m236.24 87.76l-60-60a6 6 0 0 0-8.48 0L38.53 157A42.77 42.77 0 1 0 99 217.47l112.24-112.23l22.66-7.55a6 6 0 0 0 2.34-9.93ZM90.53 209A30.77 30.77 0 1 1 47 165.47l29.13-29.12c8.84-3.14 22.84-4.56 41.08 5c12.28 6.41 23.13 8.66 32.27 8.71ZM206.1 94.31a6 6 0 0 0-2.34 1.45l-39.9 39.89c-8.84 3.14-22.84 4.56-41.08-5c-12.28-6.38-23.13-8.65-32.27-8.65L172 40.49l48.89 48.89Z"
      ></path>
    </svg>
  );
}
export default PhTestTubeLight;
