import { component$ } from "@builder.io/qwik";
import { ButtonForth } from "../button/ButtonForth";
import PhCalendarCheckLight from "~/Icons/CTA/PhCalendarCheckLight";

export default component$(() => {
    return (
        <section class="flex flex-col items-center">
        <div class="mx-32 my-64 flex flex-col items-center gap-24 rounded-4xl bg-bgColor py-24 sm:px-64 lg:flex-row-reverse lg:py-64 xl:px-112 xl:py-93 xl:max-h-420">
          <div class="flex items-center justify-center">
            <div class="w-2/5 max-w-200 md:w-192 xl:w-200">
              <PhCalendarCheckLight/>
            </div>
          </div>
          <div class="flex flex-col items-center gap-24 lg:items-start xl:gap-32">
            <div class="flex flex-col items-center gap-16 px-4 md:gap-24 lg:items-start xl:gap-32">
              <h6 class="text-center text-28 text-primary md:text-36 lg:text-left xl:text-47">
                Let's get started
              </h6>
              <p class="max-w-633 text-center text-15 font-normal text-primary sm:text-16 lg:text-left">
                I work closely with my clients to understand their vision and
                develop a customized strategy to achieve their goals. Schedule a
                call today to discuss your project and start bringing your ideas
                to life.
              </p>
            </div>
            <div class="flex items-center">
              <ButtonForth>Schedule a call</ButtonForth>
            </div>
          </div>
        </div>
      </section>
    )
})