import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function PhMagnifyingGlassLight(
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
        d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48ZM38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74Z"
      ></path>
    </svg>
  );
}
export default PhMagnifyingGlassLight;
