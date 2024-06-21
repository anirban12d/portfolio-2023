import * as qwikCity from "@builder.io/qwik-city";
import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import PhArticleIcon from "~/Icons/blog/icons";
import DotIcon from "~/Icons/blog/dot";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HashnodeFetchSinglePost } from "~/api/hashnode";
import { RxCross2 } from "react-icons/rx";

import { _MarkdownToHtml } from "~/components/blog/markdown-to-html";
import { triggerEmbed } from "~/utils/blog/renderer/services/embed";
import { useVisibleTask$ } from "@builder.io/qwik";
import { Skeleton } from "~/components/qwik-ui/skeleton";

import { DEFAULT_COVER } from "~/utils/const";

// import { triggerCustomWidgetEmbed } from "~/utils/blog/trigger-custom-widget-embed";
// import { loadIframeResizer } from "~/utils/blog/renderer/services/embed";

export const useHashnodeData = routeLoader$(async ({ params }) => {
  try {
    const dataApi = await HashnodeFetchSinglePost(params.id.toString());
    return dataApi;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
});

type Image = {
  src: string;
  layout: string;
  width: number;
  height: number;
  alt: string;
  background: string;
  class: string;
};

export default component$(() => {
  const data = useHashnodeData();
  const Data = data.value.data.publication.post;

  const attributionVisible = useSignal(true);

  const isLoading = data?.value;
  return !isLoading ? (
    <PageSkeleton />
  ) : (
    <div class="max-w-screen mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:gap-64 lg:mt-48 lg:gap-96 xl:w-1280 ">
      <PostHeroSection Data={Data} attributionVisible={attributionVisible} />
      <PostMarkdownSection Data={Data} />
    </div>
  );
});

const PageSkeleton = component$(() => {
  return (
    <div class="flex h-512 w-[80%] flex-col gap-12">
      <Skeleton class="h-[80%] w-full rounded-3xl" />
      <div class="h-[20%] space-y-8">
        <Skeleton class="h-16 w-full" />
        <Skeleton class="h-16 w-[80%]" />
        <Skeleton class="h-16 w-[60%]" />
      </div>
    </div>
  );
});

const PostHeroSection = ({ Data, attributionVisible }: any) => {
  return (
    <section class="container mx-auto min-w-full">
      <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen md:gap-32 xl:gap-48">
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
                class={`absolute right-[5%] top-[70%] flex items-center justify-end gap-2 rounded-md bg-white text-11 text-black md:right-[5%] lg:right-[5%] lg:top-[85%] ${
                  attributionVisible.value
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
                  class={`text-16 text-black ${
                    attributionVisible.value ? "ml-4" : "ml-0"
                  }`}
                  onClick$={() =>
                    (attributionVisible.value = !attributionVisible.value)
                  }
                >
                  {attributionVisible.value ? (
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                        class="w-20 h-20 md:w-32 md:h-32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="800px"
                      height="800px"
                        class="w-16 h-16 md:w-24 md:h-24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                          fill="#000000"
                        />{" "}
                      </g>
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        <div class="flex w-full flex-col items-center justify-center gap-24 md:gap-32 lg:mt-48 xl:gap-48">
          <h1 class="px-8 text-center text-28 font-semibold leading-[140%] text-black sm:text-36 md:text-48 md:leading-[120%] lg:text-57 lg:leading-[120%] xl:text-57 xl:leading-[120%]">
            {Data?.title || "No Title in this post"}
          </h1>
          {Data.subtitle && (
            <h2 class="text-center text-13 text-black sm:text-16 lg:text-21 xl:text-27">
              {Data?.subtitle || "No Sub-Title"}
            </h2>
          )}
          <div>
            <div class="flex items-center gap-6 md:gap-8">
              <div class="flex items-center justify-center gap-4">
                <div class="h-32 w-32 overflow-hidden rounded-full md:h-48 md:w-48">
                  <Image
                    src="/images/botimg.jpg"
                    layout="constrained"
                    width={200}
                    height={200}
                    alt="A lovely bath"
                    background="auto"
                    class="h-32 w-32 rounded-full md:h-64 md:w-64"
                  />
                </div>

                <h4 class="text-13 font-semibold sm:text-19 md:text-19">
                  Anirban Das
                </h4>
              </div>
              <DotIcon />

              <span class="text-13 font-light text-black sm:text-13 md:text-16">
                {new Date(Data?.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <DotIcon />

              <h5 class="flex items-center gap-6 text-13 font-light sm:text-13 md:text-16">
                <PhArticleIcon color="#000000" />
                {Data?.readTimeInMinutes} mins read
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PostMarkdownSection = component$(({ Data }: any) => {
  // const id = data.value.data.publication.id;
  const rawMarkdown = Data.content.markdown;

  // const embedEnabled = useSignal(true);

  useVisibleTask$(() => {
    (async () => {
      // await loadIframeResizer();
      // triggerCustomWidgetEmbed(id.toString());
      document.querySelectorAll("a.embed-card").forEach((node) => {
        triggerEmbed(node);
      });
    })();
  });
  return (
    <section class="container min-w-full">
      <div class="flex flex-col items-center gap-32 bg-[#020617] px-32 py-64 md:gap-64 md:rounded-4xl lg:gap-96 xl:gap-32">
        {Data?.features.tableOfContents.isEnabled && (
          <div class="flex flex-col items-center gap-8 rounded-2xl bg-[#0f172a] px-16 py-16 md:w-[60%] md:gap-12 md:px-32 md:py-32">
            <h3 class="mb-4 text-start text-19 font-semibold text-gray-50 md:text-center md:text-23">
              Table of Contents
            </h3>
            {Data?.features.tableOfContents.items.map((item: any) => {
              return (
                <qwikCity.Link
                  key={item.id}
                  href={`#heading-${item.slug}`}
                  class="w-full rounded-2xl px-12 py-4 text-16 text-gray-100 hover:bg-[#1e293b] md:text-16"
                >
                  <span>{item.title}</span>
                </qwikCity.Link>
              );
            })}
          </div>
        )}
        <_MarkdownToHtml contentMarkdown={rawMarkdown} />
      </div>
    </section>
  );
});

export const head: DocumentHead = ({ resolveValue, params }) => {
  const data = resolveValue(useHashnodeData);
  const Data = data?.data.publication.post.seo;
  const coverImageUrl = data.data.publication.post?.coverImage?.url;
  const metaDataImageUrl = data.data.publication.post?.ogMetaData?.image;
  const imageUrl = metaDataImageUrl ? metaDataImageUrl : coverImageUrl;
  return {
    title: `${Data.title} - Anirban Das's blog`,
    meta: [
      {
        name: "description",
        content: `${Data.description}`,
      },
      // Open graph
      {
        property: "og:title",
        content: `${Data.title} - Anirban Das's blog`,
      },
      {
        property: "og:description",
        content: `${Data.description}`,
      },
      {
        property: "og:url",
        content: `https://www.anirbandas.in/blog/${params.id}`,
      },
      {
        property: "og:locale",
        content: "en",
      },
      {
        property: "og:site_name",
        content: `${Data.title}`,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: `${imageUrl}`,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      // Twitter Card meta tags (for Twitter sharing)
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@anirban12d",
      },
      {
        name: "twitter:title",
        content: `${Data.title} - Anirban Das's blog`,
      },
      {
        name: "twitter:description",
        content: `${Data.description}`,
      },
      {
        name: "twitter:image",
        content: `${imageUrl}`,
      },
      {
        name: "twitter:image:alt",
        content: `${Data.title}`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://www.anirbandas.in/projects/${params.id}/`,
      },
    ],
  };
};
