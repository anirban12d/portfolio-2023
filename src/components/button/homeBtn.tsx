import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const HomeBtn = component$(() => {
  return (
    <>
      <Link href="/">
        <button class="flex max-w-384 items-center justify-center rounded-3xl bg-black px-32 py-12 text-center text-16 font-semibold text-white transition duration-500 ease-in-out hover:scale-110 active:scale-90">
          <Slot />
        </button>
      </Link>
    </>
  );
});
