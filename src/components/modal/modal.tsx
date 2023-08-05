import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        class="bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block rounded-lg text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
        type="button"
      >
        Toggle modal
      </button>

      <div
        id="defaultModal"
        aria-hidden="true"
        class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
      >
        <div class="max-w-2xl relative max-h-full w-full">
          <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div class="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                class="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="space-y-6 p-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div class="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                I accept
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="focus:ring-blue-300 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
