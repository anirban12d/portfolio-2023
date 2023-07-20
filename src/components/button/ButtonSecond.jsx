import { component$, Slot, useContext, $ } from "@builder.io/qwik";
import { FormContext } from "~/routes/layout";

export const ButtonSecond = component$(() => {
  const formOpen = useContext(FormContext);

  const closeHandler = $(() => {
    formOpen.value = true;
  });

  return (
    <>
      <button
        class="rounded-full bg-secondary px-32 py-12 text-center text-13 text-primary transition duration-300 ease-in-out hover:scale-110 active:scale-90 md:text-16 lg:px-40 lg:py-16"
        onClick$={closeHandler}
      >
        <Slot />
      </button>
    </>
  );
});
