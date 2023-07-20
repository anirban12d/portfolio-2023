import { component$, Slot } from "@builder.io/qwik";

export const LearnMoreBtnWhite = component$(() => {
  return (
    <>
      <button class="sm:px-36 rounded-full bg-primary px-18 py-9 text-center text-13 font-medium text-textColor transition duration-300 ease-in-out hover:scale-110 active:scale-90 sm:py-12 md:px-32 md:text-16 lg:px-50 lg:py-12">
        <Slot />
      </button>
    </>
  );
});
