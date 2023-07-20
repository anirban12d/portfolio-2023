import { component$, Slot, useContext, $ } from "@builder.io/qwik";

import { FormContext } from "~/routes/layout";

export const CloseBtn = component$(() => {

    const formOpen = useContext(FormContext);

    const closeHandler = $(() => {
        formOpen.value = !formOpen.value;
    })

  return (
    <>
      <button
        class="max-w-384 flex items-center justify-center rounded-3xl bg-black px-32 py-16 text-center text-16 font-semibold text-white transition duration-500 ease-in-out hover:scale-110 active:scale-90"
        onClick$={closeHandler}
      >
        <Slot />
      </button>
    </>
  );
});
