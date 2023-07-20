import { component$, Slot, useContext, $ } from "@builder.io/qwik";
import { FormContext } from "~/routes/layout";

export const ButtonFifth = component$(() => {
  const formOpen = useContext(FormContext);

  const closeHandler = $(() => {
    formOpen.value = true;
  });
  return (
    <>
      <button
        class="rounded-full bg-secondary px-24 py-8 text-center text-13 text-primary transition duration-300 ease-in-out hover:scale-110 active:scale-90 xl:px-32 xl:text-16"
        onClick$={closeHandler}
      >
        <Slot />
      </button>
    </>
  );
});
