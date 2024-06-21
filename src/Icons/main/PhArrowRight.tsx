import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function PhArrowRight(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 256 256"
      {...props}
      key={key}
    >
      <path
        fill="#1771D1"
        d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
      ></path>
    </svg>
  );
}
export default PhArrowRight;
