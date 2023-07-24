import { component$ } from "@builder.io/qwik";
import { MockupReactProjects } from "~/components/mockup/mockup-react-projects";
import PhArrowBendRightUpLight from "~/Icons/projectsPage/PhArrowBendRightUpLight";
import { client } from "~/routes/layout";
import { routeLoader$ } from "@builder.io/qwik-city";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "@unpic/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const useProjectData = routeLoader$(async ({ params }) => {
  // This code runs only on the server, after every navigation
  const slug = params.id;
  const slugString = slug.toString();
  try {
    const url = `*[slug.current ==  "${slugString}"]`;
    const dataApi = await client.fetch(url);
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
  const data = useProjectData();

  const projectData = data.value[0];

  return (
    <>
      <div class="mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-96 xl:w-1280 ">
        <section class="container min-w-full">
          <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen md:gap-32 xl:gap-48">
            <div class="mt-64 flex w-full flex-col items-center justify-center gap-24 md:gap-32 lg:mt-48 xl:gap-48">
              <h1 class="text-center text-48 tracking-low text-black sm:text-69 md:text-80 lg:text-105 xl:text-138">
                {projectData.title}
              </h1>
            </div>
          </div>
        </section>

        <MockupReactProjects dataProject={projectData} />

        <section class="container flex min-w-full items-center ">
          <div class="flex w-1280 flex-col items-center gap-32 bg-bgColor py-64 md:gap-64 md:rounded-4xl lg:gap-96 xl:gap-128">
            <div class="min-h-80 flex w-60% max-w-996 flex-col items-center justify-around gap-32 rounded-4xl bg-white px-32 py-32 md:w-90% md:flex-row">
              <div class="flex flex-col items-center gap-4 md:gap-8">
                <h6 class="text-19 font-medium">Industry</h6>
                <span class="text-16">
                  {projectData?.industry ? projectData.industry : "N/A"}
                </span>
              </div>

              <div class="flex flex-col items-center gap-4 md:gap-8">
                <h6 class="text-19 font-medium">Location</h6>
                <span class="text-16">
                  {projectData.location ? projectData.location : "N/A"}
                </span>
              </div>

              <div class="flex flex-col items-center gap-4 md:gap-8">
                <h6 class="text-19 font-medium">Website</h6>
                {projectData?.projectUrl ? (
                  <span class="flex items-center text-blue underline">
                    <a
                      href={
                        projectData?.projectUrl ? projectData.projectUrl : ""
                      }
                      target="_blank"
                    >
                      click me
                    </a>
                    <PhArrowBendRightUpLight />
                  </span>
                ) : (
                  "N/A"
                )}
              </div>
            </div>

            {projectData?.overview && (
              <div class="flex flex-col items-center gap-32 bg-bgColor md:gap-64">
                <h3 class="px-32 text-center text-28 text-white sm:text-40 md:text-61 xl:text-80">
                  Project overview
                </h3>

                <div class="px-16 md:px-32 lg:px-64 xl:px-160">
                  {projectData?.overview.map((item: any) => {
                    if (item.children !== undefined) {
                      return (
                        <>
                          <p class="text-white lg:text-19" key={item._key}>
                            {item.children.map((text: any) => {
                              return text.text;
                            })}
                          </p>
                          <br />
                        </>
                      );
                    }
                    return (
                      <>
                        <Image
                          key={item._key}
                          src={urlFor(item.asset).url()}
                          layout="constrained"
                          alt={item.alt}
                          width={1920}
                          height={1200}
                          background="auto"
                          class="w-full rounded-xl object-cover object-center"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}

            {projectData?.roles && (
              <div class="flex flex-col items-center gap-32 bg-bgColor md:gap-64">
                <h3 class="px-32 text-center text-28 text-white sm:text-40 md:text-61 xl:text-80">
                  Roles and Responsibilities
                </h3>

                <div class="px-16 md:px-32 lg:px-64 xl:px-160">
                  {projectData?.roles.map((item: any) => {
                    if (item.children !== undefined) {
                      return (
                        <>
                          <p class="text-white lg:text-19" key={item._key}>
                            {item.children.map((text: any) => {
                              return text.text;
                            })}
                          </p>
                          <br />
                        </>
                      );
                    }
                    return (
                      <>
                        <Image
                          key={item._key}
                          src={urlFor(item.asset).url()}
                          layout="constrained"
                          alt={item.alt}
                          width={1920}
                          height={1200}
                          background="auto"
                          class="w-full rounded-xl object-cover object-center"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}

            {projectData?.skills && (
              <div class="flex flex-col items-center gap-32 bg-bgColor md:gap-64">
                <h3 class="px-32 text-center text-28 text-white sm:text-40 md:text-61 xl:text-80">
                  Technical Skills
                </h3>

                <div class="px-16 md:px-32 lg:px-64 xl:px-160">
                  {projectData?.skills.map((item: any) => {
                    if (item.children !== undefined) {
                      return (
                        <>
                          <p class="text-white lg:text-19" key={item._key}>
                            {item.children.map((text: any) => {
                              return text.text;
                            })}
                          </p>
                          <br />
                        </>
                      );
                    }
                    return (
                      <>
                        <Image
                          key={item._key}
                          src={urlFor(item.asset).url()}
                          layout="constrained"
                          alt={item.alt}
                          width={1920}
                          height={1200}
                          background="auto"
                          class="w-full rounded-xl object-cover object-center"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}

            {projectData?.challenges && (
              <div class="flex flex-col items-center gap-32 bg-bgColor md:gap-64">
                <h3 class="px-32 text-center text-28 text-white sm:text-40 md:text-61 xl:text-80">
                  Challenges and Solutions
                </h3>

                <div class="px-16 md:px-32 lg:px-64 xl:px-160">
                  {projectData?.challenges.map((item: any) => {
                    if (item.children !== undefined) {
                      return (
                        <>
                          <p class="text-white lg:text-19" key={item._key}>
                            {item.children.map((text: any) => {
                              return text.text;
                            })}
                          </p>
                          <br />
                        </>
                      );
                    }
                    return (
                      <>
                        <Image
                          key={item._key}
                          src={urlFor(item.asset).url()}
                          layout="constrained"
                          alt={item.alt}
                          width={1920}
                          height={1200}
                          background="auto"
                          class="w-full rounded-xl object-cover object-center"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}

            {projectData?.implementation && (
              <div class="flex flex-col items-center gap-32 bg-bgColor md:gap-64">
                <h3 class="px-32 text-center text-28 text-white sm:text-40 md:text-61 xl:text-80">
                  Project Implementation
                </h3>

                <div class="px-16 md:px-32 lg:px-64 xl:px-160">
                  {projectData?.implementation.map((item: any) => {
                    if (item.children !== undefined) {
                      return (
                        <>
                          <p class="text-white lg:text-19" key={item._key}>
                            {item.children.map((text: any) => {
                              return text.text;
                            })}
                          </p>
                          <br />
                        </>
                      );
                    }
                    return (
                      <>
                        <Image
                          key={item._key}
                          src={urlFor(item.asset).url()}
                          layout="constrained"
                          alt={item.alt}
                          width={1920}
                          height={1200}
                          background="auto"
                          class="w-full rounded-xl object-cover object-center"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}
            {projectData?.result && (
              <div class="flex flex-col items-center gap-32 bg-bgColor md:gap-64">
                <h3 class="px-32 text-center text-28 text-white sm:text-40 md:text-61 xl:text-80">
                  Results and Impact
                </h3>

                <div class="px-16 md:px-32 lg:px-64 xl:px-160">
                  {projectData?.result.map((item: any) => {
                    if (item.children !== undefined) {
                      return (
                        <>
                          <p class="text-white lg:text-19" key={item._key}>
                            {item.children.map((text: any) => {
                              return text.text;
                            })}
                          </p>
                          <br />
                        </>
                      );
                    }
                    return (
                      <>
                        <Image
                          key={item._key}
                          src={urlFor(item.asset).url()}
                          layout="constrained"
                          alt={item.alt}
                          width={1920}
                          height={1200}
                          background="auto"
                          class="w-full rounded-xl object-cover object-center"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}
            {projectData?.frontendTools && (
              <div class="flex flex-col items-center gap-32 bg-bgColor md:gap-64">
                <h3 class="px-32 text-center text-28 text-white sm:text-40 md:text-61 xl:text-80">
                  Tools used
                </h3>

                <div class="flex flex-col items-center gap-16 lg:flex-row">
                  <div class="flex flex-col gap-8 self-stretch rounded-4xl border-4 border-black bg-grey py-16 pl-32 pr-64 md:px-64 lg:py-32">
                    <h6 class="text-23 font-medium text-textColor md:text-27 lg:text-36">
                      Frontend Tools
                    </h6>
                    <p class="max-w-prose text-16 font-medium text-textColor lg:max-w-384">
                      {projectData.frontendTools}
                    </p>
                  </div>
                  <div class="flex flex-col gap-8 self-stretch rounded-4xl border-4 border-black bg-grey py-16 pl-32 pr-64 md:px-64 lg:py-32">
                    <h6 class="max-w-prose text-23 font-medium text-textColor md:text-27 lg:text-36">
                      Ui Libraries
                    </h6>
                    <p class="text-16 font-medium text-textColor lg:max-w-384">
                      {projectData.uiTools}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue, params }) => {
  const data = resolveValue(useProjectData);
  const projectData = data[0];
  return {
    title: `Project - ${projectData.title}`,
    meta: [
      {
        name: "description",
        content: `${projectData.description}`,
      },
      // Open graph
      {
        property: "og:title",
        content: `Anirban Das - Project - ${projectData.title}`,
      },
      {
        property: "og:description",
        content: `${projectData.description}`,
      },
      {
        property: "og:url",
        content: `https://www.anirbandas.in/projects/${params.id}`, // Replace with your website URL
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
        content: `${urlFor(projectData.mainImage.asset).url()}`, // Replace with the actual image URL for sharing
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
        content: `Anirban Das - Projects - ${projectData.title}`,
      },
      {
        name: "twitter:description",
        content: `${projectData.description}`,
      },
      {
        name: "twitter:image",
        content: `${urlFor(projectData.mainImage.asset).url()}`, // Replace with the actual image URL for sharing
      },
      {
        name: "twitter:image:alt",
        content: `Image of Anirban Das's project ${projectData.title}'s homepage`,
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
