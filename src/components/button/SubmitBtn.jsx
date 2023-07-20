import { component$, Slot } from "@builder.io/qwik";

export const SubmitBtn = component$(() => {
  return (
    <>
      <button
        type="submit"
        class="max-w-384 flex items-center justify-center rounded-3xl bg-black px-32 py-16 text-center text-16 font-semibold text-white transition duration-500 ease-in-out hover:scale-110 active:scale-90"
      >
        <Slot />
      </button>
    </>
  );
});
