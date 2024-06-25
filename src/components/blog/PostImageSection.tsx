import { component$, useSignal } from "@builder.io/qwik";

import { CrossIcon } from "~/Icons/blog/CrossIcon";
import { InfoIcon } from "~/Icons/blog/InfoIcon";
import { Image } from "@unpic/qwik";

import { DEFAULT_COVER } from "~/utils/const";

export const PostImageSection = component$(({ Data }: any) => {
  const attributionVisible = useSignal(true);
  return (
    <>
      {!Data.coverImage ? (
        <div class="relative mx-auto w-full">
          <Image
            src={DEFAULT_COVER}
            layout="constrained"
            alt="A placeholder Image"
            width={760}
            height={443}
            background="auto"
            loading="eager"
            class="mx-auto max-h-[640px] w-full object-cover object-center"
          />
        </div>
      ) : (
        <div class="relative mx-auto w-full">
          <Image
            src={Data.coverImage.url}
            layout="constrained"
            alt={Data.coverImage.attribution}
            width={760}
            height={443}
            background="auto"
            loading="eager"
            class="mx-auto max-h-[640px] w-full object-cover object-center"
          />
          ``
          {Data.tags && (
            <div class="absolute left-[70%] top-[4%] flex items-center justify-start gap-2 text-11 text-white md:left-[80%] lg:left-[85%] lg:top-[8%]">
              {Data.tags.map((tag: any) => (
                <span class="rounded-full bg-blue px-16 py-2" key={tag.id}>
                  {tag.name}
                </span>
              ))}
            </div>
          )}
          {Data.coverImage.attribution && (
            <div
              class={`absolute right-[5%] top-[70%] flex items-center justify-end gap-2 rounded-md bg-white text-11 text-black md:right-[5%] lg:right-[5%] lg:top-[85%] ${attributionVisible.value
                  ? "px-12 py-6 md:px-16 md:py-8"
                  : "px-6 py-6 md:px-8 md:py-8"
                }`}
            >
              {attributionVisible.value && (
                <span class="text-13 md:text-16">
                  Photo by{" "}
                  <span class="font-semibold underline">
                    <a target="_blank" href={Data.coverImage.attribution}>
                      {Data.coverImage.photographer}
                    </a>{" "}
                  </span>
                  on{" "}
                  <a
                    target="_blank"
                    href="https://unsplash.com/?utm_source=Hashnode&utm_medium=referral"
                  >
                    <span class="font-semibold underline">Unsplash</span>
                  </a>
                </span>
              )}
              <button
                class={`text-16 text-black ${attributionVisible.value ? "ml-4" : "ml-0"
                  }`}
                onClick$={() =>
                  (attributionVisible.value = !attributionVisible.value)
                }
              >
                {attributionVisible.value ? <CrossIcon /> : <InfoIcon />}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
});
