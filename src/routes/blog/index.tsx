import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import Heropost from "~/components/blog/Heropost";
import Posts from "~/components/blog/posts";

import { HashnodeAllPosts } from "~/api/hashnode";

export const useHashnodeArticles = routeLoader$(async () => {
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
        {/* <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen md:gap-32 xl:gap-48"> */}
        {/*   <div class="mt-64 flex w-full flex-col items-center justify-center gap-24 md:-mt-32 md:gap-32 lg:mt-48 xl:gap-48"> */}
        {/*     <h1 class="text-center text-48 tracking-low text-black sm:text-69 md:text-80 lg:text-105 xl:text-138"> */}
        {/*       Crafting */}
        {/*     </h1> */}
        {/*     <h2 class="xl:80 text-center text-23 text-black sm:text-28 md:text-47 lg:text-61"> */}
        {/*       Exceptional Experiences */}
        {/*     </h2> */}
        {/*     <h3 class="text-center text-13 text-black sm:text-16 lg:text-21 xl:text-27"> */}
        {/*       "Bringing brands to life through bespoke website design and */}
        {/*       development." */}
        {/*     </h3> */}
        {/*   </div> */}
        {/* </div> */}
      </section>

      {/* Cards */}
      <BlogCards />
    </div>
  );
});

// type Item = {

type Item = {
  __typename: "Post";
  id: string;
  title: string;
  brief: string;
  seo: {
    __typename: "SEO";
    title: string;
    description: string;
  };
  readTimeInMinutes: number;
  tags: {
    __typename: "Tag";
    id: string;
    name: string;
    slug: string;
  }[];
  content: { __typename: "Content"; markdown: string; html: string };
  coverImage?: {
    __typename?: "PostCoverImage";
    url: string;
  } | null;
  slug: string;
  node: any;
};

const BlogCards = component$(() => {
  const hashnodedata = useHashnodeArticles();
  const posts = hashnodedata?.value?.data?.publication?.posts?.edges || [];
  return (
    <section class="container flex min-w-full flex-col items-center gap-32 md:gap-64 lg:gap-96 xl:gap-128">
      <div class="grid-rows-auto grid max-w-[1192px] grid-cols-1 gap-32 px-16 md:grid-cols-2 md:gap-32 lg:grid-cols-3">
        {posts?.map((item: Item, index: number) => {
          if (index == 0) {
            // console.log(item);
            return <Heropost items={item} key={index} />;
          } else {
            return <Posts items={item} key={index} />;
          }
        })}
      </div>
    </section>
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
