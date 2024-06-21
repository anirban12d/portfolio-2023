import { component$, Slot } from "@builder.io/qwik";

import { TestimonialReact } from "~/components/testimonials/testimonials-react";
import CallToAction from "~/components/CTA/cta";

export default component$(() => {
  return (
    <>
      <main class="min-w-screen flex items-center justify-center">
        <Slot />
      </main>
      <TestimonialReact client:idle />
      <CallToAction />
    </>
  );
});
