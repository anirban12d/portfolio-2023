import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function PhInstagramLogoLight(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 256 256"
      {...props}
      key={key}
    >
      <path
        fill="#000000"
        d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46Zm0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34Zm48-136H80a54.06 54.06 0 0 0-54 54v96a54.06 54.06 0 0 0 54 54h96a54.06 54.06 0 0 0 54-54V80a54.06 54.06 0 0 0-54-54Zm42 150a42 42 0 0 1-42 42H80a42 42 0 0 1-42-42V80a42 42 0 0 1 42-42h96a42 42 0 0 1 42 42ZM190 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z"
      ></path>
    </svg>
  );
}
export default PhInstagramLogoLight;
