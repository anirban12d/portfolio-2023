import { component$, Slot, useContext, $ } from "@builder.io/qwik";
import { FormContext } from "~/routes/layout";

export const ButtonForth = component$(() => {
  const formOpen = useContext(FormContext);

  const closeHandler = $(() => {
    formOpen.value = true;
  });
  return (
    <>
      <button
        class="rounded-full bg-primary px-32 py-8 text-center text-13 font-medium text-textColor transition duration-300 ease-in-out hover:scale-110 active:scale-90 md:px-60 md:py-12 md:text-16 xl:py-16"
        onClick$={closeHandler}
      >
        <Slot />
      </button>
    </>
  );
});
