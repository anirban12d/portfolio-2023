import { component$, Slot } from "@builder.io/qwik";
import { QwikQL } from "qwikql";
import { useQuery } from "qwikql";
import { gql } from "graphql-request";

import { TestimonialReact } from "~/components/testimonials/testimonials-react";
import CallToAction from "~/components/CTA/cta";

export default component$(() => {
  return (
    <QwikQL url="https://gql.hashnode.com/">
      <main class="min-w-screen flex items-center justify-center">
        <Slot />
      </main>
      {/* <TestimonialReact client:idle /> */}
      <CallToAction />
    </QwikQL>
  );
});
