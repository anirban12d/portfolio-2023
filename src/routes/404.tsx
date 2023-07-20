import { component$ } from "@builder.io/qwik";
import { HomeBtn } from "~/components/button/homeBtn";


export default component$(() => {
    return (
        <>
        <main class="min-w-screen flex items-center justify-center">
        <div class="mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-96  xl:w-1280 ">
        <section class="container min-w-full">
          <div class="flex w-full flex-col items-center justify-center gap-24 h-full md:min-h-screen">
            <div class=" mt-32 lg:mt-48">
              <h1 class="bg-gradient-to-b from-blue to-textColor bg-clip-text text-57 tracking-low text-transparent sm:text-69 md:text-105 lg:text-138">
                Opps!
              </h1>
            </div>
            <h3 class="text-center text-16 text-textColor md:text-21 lg:text-27">
              Seems like the page you are requesting isn't available
              <span class="block text-center">Let's get you back to home!</span>
            </h3>
            <HomeBtn>Home</HomeBtn>
          </div>
        </section>

        </div>
      </main>
        
        </>
    )
})