import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Heropost from "~/components/blog/Heropost";
import Posts from "~/components/blog/posts";

import { HashnodeAllPosts } from "~/api/hashnode";
import { HashnodeMorePosts } from "~/api/hashnode";

import { Skeleton } from "~/components/qwik-ui/skeleton";

export const useFetchHashnodeArticles = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  try {
    const dataApi = await HashnodeAllPosts();
    return dataApi;
  } catch (error) {
    console.log(error);
  }
});

export default component$(() => {
  return (
    // Hero Wrapper
    <div class="mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-96 xl:w-1280 ">
      {/* //Hero Heading */}
      <section class="container min-w-full">
        <div class="flex w-full flex-col items-center justify-center gap-24 md:hidden">
          <div class="mt-32 flex w-full flex-col items-center justify-center gap-24">
            <h1 class="text-center text-48 tracking-low text-black sm:text-69 md:text-80 lg:text-105 xl:text-138">
          Anirban's Blog
            </h1>
            <h2 class="text-center text-13 text-black sm:text-16 lg:text-21 xl:text-27">
              Your Gateway to the <br/>Latest in Tech Trends and Insights
            </h2>
          </div>
        </div>
      </section>

      <BlogCards />
    </div>
  );
});

const BlogCards = component$(() => {
  const hashnodedata = useFetchHashnodeArticles();

  const allPosts = useStore({
    data: hashnodedata?.value?.data?.publication?.posts?.edges,
  });

  const firstPost = allPosts.data[0];
  const secondaryPosts = allPosts.data.slice(1, 7);
  const newPosts = useStore<any>({ data: [] });

  const pageInfo = useSignal(
    hashnodedata?.value?.data.publication.posts.pageInfo.endCursor
  );
  const hasNextPage = useSignal(
    hashnodedata.value?.data.publication.posts.pageInfo.hasNextPage
  );

  const loadedMore = useSignal(false); // This will be used to check if the user has loaded more posts
  const isLoading = useSignal(false); // This is for the loading state in the load more button

  // This function is responsible for fetching the next set of posts
  const loadMorePosts = $(async () => {
    if (!hasNextPage) {
      return;
    }
    isLoading.value = true;
    const data = await HashnodeMorePosts(6, pageInfo.value.toString());
    const fetchedNewposts = data.data?.publication.posts.edges.map(
      (edge: any) => edge
    );
    newPosts.data = [...newPosts.data, ...fetchedNewposts];
    pageInfo.value = data.data.publication.posts.pageInfo.endCursor;
    hasNextPage.value = data.data.publication.posts.pageInfo.hasNextPage;
    isLoading.value = false;
  });

  // This task is responsible for loading more posts when the user clicks the load more button
  useVisibleTask$(({ track }) => {
    track(() => newPosts.data);
    if (loadedMore.value == false) {
      return;
    }
    loadMorePosts();
  });

  return (
    <section class="container flex min-w-full flex-col items-center gap-32 md:gap-64 lg:gap-96 xl:gap-128">
      {allPosts.data.length == 0 ? (
        <PageSkeleton />
      ) : (
        <div class="grid-rows-auto grid max-w-[1192px] grid-cols-1 gap-32 px-16 md:grid-cols-2 md:gap-32 lg:grid-cols-3">
          {/* Fetch the first post for the hero section  */}
          {firstPost && <Heropost items={firstPost} key={10} />}

          {/* Fetch the initial posts for after the hero section */}
          {secondaryPosts &&
            secondaryPosts.map((post: any, index: number) => (
              <Posts items={post} key={index} />
            ))}

          {/* Fetch and load the new posts when the user clicks the load more button */}
          {newPosts.data.length > 0 &&
            newPosts.data.map((post: any, index: number) => (
              <Posts items={post} key={index} />
            ))}
        </div>
      )}

      {hasNextPage.value && (
        <button
          class="sm:px-36 rounded-full text-13 bg-secondary px-18 py-9 text-center md:text-16 text-primary transition duration-300 ease-in-out hover:scale-110 active:scale-90 sm:py-12 lg:px-50 lg:py-12"
          onClick$={() => loadMorePosts()}
          disabled={isLoading.value}
        >
          {isLoading.value ? (
            <div class="spinner mr-2 h-8 w-8 animate-spin rounded-full border-t-4 border-solid border-white"></div>
          ) : (
            "Load More"
          )}
        </button>
      )}
    </section>
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

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: "Anirban Das - Blogs",
  meta: [
    {
      name: "description",
      content: "Tech news, tutorials, and more",
    },
    // Open graph
    {
      property: "og:title",
      content: "Anirban Das - Projects",
    },
    {
      property: "og:description",
      content: "Tech news, tutorials, and more",
    },
    {
      property: "og:url",
      content: "https://www.anirbandas.in/blog", // Replace with your website URL
    },
    {
      property: "og:locale",
      content: "en",
    },
    {
      property: "og:site_name",
      content: "Anirban Das - Fullstack Developer & UX Designer",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content:
        "https://cdn.sanity.io/images/izetizop/production/161ee6f9731fbc74dfcb3cc2b5808e80bf91f214-1200x630.jpg", // Replace with the actual image URL for sharing
    },
    {
      property: "og:image:width",
      content: "1200", // Replace with the actual image URL for sharing
    },
    {
      property: "og:image:height",
      content: "630", // Replace with the actual image URL for sharing
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
      content: "Anirban Das - Projects",
    },
    {
      name: "twitter:description",
      content: "Check out some of my works",
    },
    {
      name: "twitter:image",
      content:
        "https://cdn.sanity.io/images/izetizop/production/53104f57eb53f72eeeead492f157e1f755a3ab28-1200x675.jpg", // Replace with the actual image URL for sharing
    },
    {
      name: "twitter:image:alt",
      content:
        "Image of Anirban Das's personal website - Fullstack Developer & UX Designer", // Replace with the actual image URL for sharing
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://www.anirbandas.in/blog",
    },
  ],
};
