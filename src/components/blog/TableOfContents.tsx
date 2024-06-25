import { component$, useStore, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { DownArrowIcon } from '~/Icons/blog/DownArrowIcon';
import { UpArrowIcon } from '~/Icons/blog/UpArrowIcon';

export const TableOfContents = component$(({ Data }: any) => {
  const tocState = useStore({
    isFolded: true,
  });

  const toggleFold = $(() => {
    tocState.isFolded = !tocState.isFolded;
  });

  const MAX_ITEMS = 5; // Maximum number of items to show when folded

  return (
    <>
      {Data?.features.tableOfContents.isEnabled && (
        <div class="relative flex flex-col items-center gap-8 rounded-2xl bg-[#0f172a] px-16 py-16 md:w-[60%] md:gap-12 md:px-32 md:py-32">
          <h3 class="mb-4 text-start text-19 font-semibold text-gray-50 md:text-center md:text-23">
            Table of Contents
          </h3>
          {Data?.features.tableOfContents.items
            .slice(0, tocState.isFolded ? MAX_ITEMS : undefined)
            .map((item: any) => {
              return (
                <Link
                  key={item.id}
                  href={`#heading-${item.slug}`}
                  class="w-full rounded-2xl px-12 py-4 text-16 text-gray-100 hover:bg-[#1e293b] md:text-16"
                >
                  <span>{item.title}</span>
                </Link>
              );
            })}
          {Data?.features.tableOfContents.items.length > MAX_ITEMS ? (
            tocState.isFolded ? (
              <button
                onClick$={() => toggleFold()}
                class={`absolute top-[80%] mb-16 mt-4 flex w-full max-w-[90%] items-center justify-center gap-4 rounded-2xl bg-[#0f172a] bg-opacity-80 bg-gradient-to-b to-[#0f172a] px-12 py-4 text-16 text-gray-100 hover:bg-opacity-90`}
              >
                More <DownArrowIcon />
              </button>
            ) : (
              <button
                onClick$={() => toggleFold()}
                class="mt-4 flex w-full items-center justify-center gap-4 rounded-2xl bg-[#0f172a] bg-opacity-50 px-12 py-4 text-16 text-gray-100 backdrop-blur-md hover:bg-opacity-70"
              >
                Less <UpArrowIcon />
              </button>
            )
          ) : null}
        </div>
      )}
    </>
  );
});
