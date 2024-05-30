import { component$ } from "@builder.io/qwik";
// import { LearnMoreBtnWhite } from "~/components/button/LearnMoreBtnWhite";
import { client } from "../layout";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

export const useSanityProjects = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  try {
    const dataApi = await client.fetch('*[_type == "projects"]');
    return dataApi;
  } catch (error) {
    console.log(error);
  }
});

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

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
  const projectsData = useSanityProjects();
  return (
    // Hero Wrapper
    <div class="mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-96 xl:w-1280 ">
      {/* //Hero Heading */}
      <section class="container min-w-full">
        <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen md:gap-32 xl:gap-48">
          <div class="mt-64 flex w-full flex-col items-center justify-center gap-24 md:-mt-32 md:gap-32 lg:mt-48 xl:gap-48">
            <h1 class="text-center text-48 tracking-low text-black sm:text-69 md:text-80 lg:text-105 xl:text-138">
              Crafting
            </h1>
            <h2 class="xl:80 text-center text-23 text-black sm:text-28 md:text-47 lg:text-61">
              Exceptional Experiences
            </h2>
            <h3 class="text-center text-13 text-black sm:text-16 lg:text-21 xl:text-27">
              "Bringing brands to life through bespoke website design and
              development."
            </h3>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section class="container flex min-w-full flex-col items-center gap-32 md:gap-64 lg:gap-96 xl:gap-128">
        <h4 class="text-center text-28 text-black sm:text-40 md:text-61 xl:text-80">
          My recent works
        </h4>
        <div class="flex flex-col gap-32 px-16 md:gap-64">
          {projectsData.value.map((items: any) => {
            return (
              <div
                class="flex max-w-1080 flex-col items-start gap-16 rounded-4xl bg-bgColor px-16 py-16 sm:px-24 sm:py-24 md:gap-24 md:px-32 md:py-32 lg:max-h-420 lg:flex-row lg:items-center lg:gap-24 xl:gap-32 xl:px-48 xl:py-40"
                key={items._id}
              >
                <div class="w-full overflow-hidden rounded-2xl bg-white lg:w-4/5 lg:rounded-4xl">
                  {/* <img
                src="/images/testImage-project.webp"
                alt="..."
                class="w-full object-cover object-center "
              /> */}

                  <Image
                    src={urlFor(items.mainImage).url()}
                    layout="constrained"
                    alt={items.alt}
                    width={1920}
                    height={1200}
                    background="auto"
                    loading="eager"
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="flex flex-col items-start gap-8 sm:gap-16 md:gap-24 lg:max-w-416 xl:max-w-496">
                  <div class="flex flex-col gap-8 sm:gap-16 md:gap-24">
                    <h5 class="text-23 font-medium text-white sm:text-33 md:text-36">
                      {items.title}
                    </h5>
                    <p class="max-w-prose text-16 font-normal text-white md:text-16">
                      {items.description}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={"/projects/" + items.slug.current}
                      aria-label="Link to the project page"
                    >
                      <button class="sm:px-36 rounded-full bg-primary px-18 py-9 text-center text-13 font-medium text-textColor transition duration-300 ease-in-out hover:scale-110 active:scale-90 sm:py-12 md:px-32 md:text-16 lg:px-50 lg:py-12">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: "Anirban Das - Projects",
  meta: [
    {
      name: "description",
      content: "Check out some of my works",
    },
    // Open graph
    {
      property: "og:title",
      content: "Anirban Das - Projects",
    },
    {
      property: "og:description",
      content: "Check out some of my works",
    },
    {
      property: "og:url",
      content: "https://www.anirbandas.in/projects", // Replace with your website URL
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
      href: "https://www.anirbandas.in/projects",
    },
  ],
};
