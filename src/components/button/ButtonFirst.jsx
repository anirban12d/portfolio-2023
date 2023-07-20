import { component$, Slot, useContext, $ } from "@builder.io/qwik";
import { FormContext } from "~/routes/layout";

export const ButtonFirst = component$(() => {
  const formOpen = useContext(FormContext);

  const closeHandler = $(() => {
    formOpen.value = true;
  });

  return (
    <>
      <button
        class="rounded-full bg-black px-24 py-8 text-center text-13 text-primary transition duration-300 ease-in-out hover:scale-110 active:scale-90 md:text-16 xl:px-64 xl:py-12"
        onClick$={closeHandler}
      >
        <Slot />
      </button>
    </>
  );
});
