import { component$, Slot, useContext, $ } from "@builder.io/qwik";
import { FormContext } from "~/routes/layout";

export const ButtonThird = component$(() => {
  const formOpen = useContext(FormContext);

  const closeHandler = $(() => {
    formOpen.value = true;
  });
  return (
    <>
      <button
        class="rounded-full bg-secondary px-56 py-12 text-center text-16 text-primary transition duration-300 ease-in-out hover:scale-110 active:scale-90"
        onClick$={closeHandler}
      >
        <Slot />
      </button>
    </>
  );
});
