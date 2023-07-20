import { component$, Slot, $, type Signal, useContext } from "@builder.io/qwik";


import { ServiceModalContext } from "~/routes/layout";
import { ServiceModalVisibleContext } from "~/routes/layout";

interface props {
  current?: number,
}

export const LearnMoreBtn = component$<props>(({current}) => {

  const  currentModal: Signal= useContext(ServiceModalContext);
  const serviceModalVisible = useContext(ServiceModalVisibleContext);

const ModalSelect = $(() => {
  currentModal.value = current;
  serviceModalVisible.value = true;
})
  return (
    <>
      <button class="sm:px-36 rounded-full bg-secondary px-18 py-9 text-center text-16 text-primary transition duration-300 ease-in-out hover:scale-110 active:scale-90 sm:py-12 lg:px-50 lg:py-12" onClick$={ModalSelect}>
        <Slot />
      </button>
    </>
  );
});
