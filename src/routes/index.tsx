import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ButtonSecond } from "~/components/button/ButtonSecond";
import { ButtonThird } from "~/components/button/buttonThird";
import PhArrowRight from "~/Icons/main/PhArrowRight";
import PhDevicesLight from "~/Icons/Usp/PhDevicesLight";
import PhGearSixLight from "~/Icons/Usp/PhGearSixLight";
import PhHeadsetLight from "~/Icons/Usp/PhHeadsetLight";
import PhMagicWandLight from "~/Icons/Usp/PhMagicWandLight";
import PhPresentationChartLight from "~/Icons/Usp/PhPresentationChartLight";
import PhTestTubeLight from "~/Icons/Usp/PhTestTubeLight";
import { WorkflowReact } from "~/components/workflow/workflow-react";
import { MockupReact } from "~/components/mockup/mockup-react";
import { useNavigate } from "@builder.io/qwik-city";
import { useContext } from "@builder.io/qwik";
import { currentPageContext } from "./layout";
import { type Any} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "@unpic/qwik";
import { client } from "./layout";
import { useSanityMyImages } from "./layout";
import { inject } from '@vercel/analytics';
 


const builder = imageUrlBuilder(client);

function urlFor(source: Any) {
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

  inject();

const sanity = useSanityMyImages();

  const nav = useNavigate();

  const currentPage = useContext(currentPageContext);

  const servicesfn = $(() => {
    nav("/services");
    currentPage.home = false;
    currentPage.about = false;
    currentPage.projects = false;
    currentPage.services = true;
    currentPage.contact = false;
  });

  const projectsfn = $(() => {
    nav("/projects");
    currentPage.home = false;
    currentPage.about = false;
    currentPage.projects = true;
    currentPage.services = false;
    currentPage.contact = false;
  });

  return (
    <>
      {/* // Hero Wrapper */}
      <div class="mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-96  xl:w-1280 ">
        {/* Hero Heading */}
        <section class="container min-w-full">
          <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen">
            <div class=" mt-32 lg:mt-48">
              <h1 class="bg-gradient-to-b from-blue to-textColor bg-clip-text text-57 tracking-low text-transparent sm:text-69 md:text-105 lg:text-138">
                <span class="block text-center">Elevate</span>
                <span class="block text-center">Your Brand</span>
                <span class="block text-center">Online</span>
              </h1>
            </div>
            <h3 class="text-center text-16 text-textColor md:text-21 lg:text-27">
              I Create Visually Stunning and Intuitively Functional Websites
              <span class="block text-center">Crafted to Drive Result</span>
            </h3>
            <ButtonSecond>Let's make it happen</ButtonSecond>
          </div>
        </section>

        {/* Hero Project Showcase */}
        <MockupReact />
        <div>
          <span
            class="flex items-center justify-center gap-4 text-16 hover:cursor-pointer md:gap-8 md:text-21"
            onClick$={projectsfn}
          >
            See my projects
            <span class="inline-block">
              <PhArrowRight />
            </span>
          </span>
        </div>

        {/* USP Section */}
        <section class="flex w-full flex-col items-center">
          {/* USP Start */}
          <div class="flex flex-col items-center gap-32 px-8 md:gap-64 md:px-16 lg:gap-96 xl:gap-96">
            <h3 class="text-28 sm:text-33 md:text-61 lg:text-80">
              Everything you need
            </h3>

            {/* usp cards */}
            <div class="grid w-full grid-cols-1 gap-16 md:gap-32 lg:max-w-1080 lg:grid-cols-2">
              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-16 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhGearSixLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h6 class="text-23 md:text-27">Website Optimization</h6>
                  <p class="max-w-prose text-16">
                    Want to know how your website can perform even better? I
                    offer professional website reviews to help you identify
                    areas for improvement and optimize your site for better
                    results.
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-16 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhPresentationChartLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h6 class="text-23 md:text-27">Goal-Oriented Strategy</h6>
                  <p class="max-w-prose text-16">
                    Whether you're a small business or a large enterprise, I'll
                    work with you to develop a tailored strategy that aligns
                    with your goals and drives conversions.
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-16 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhMagicWandLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h6 class="text-23 md:text-27">User-Centric Design</h6>
                  <p class="max-w-prose text-16">
                    Your website is the digital face of your brand, and a great
                    user experience can make all the difference. I specialize in
                    creating user-centric designs that engage your audience and
                    guide them towards your desired actions.
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-16 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhDevicesLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h6 class="text-23 md:text-27">Personalized Solutions</h6>
                  <p class="max-w-prose text-16">
                    Every business has unique needs, and that's why I offer
                    customized web development solutions to help you achieve
                    your goals. Using the latest technologies and best
                    practices, I'll create a tailored solution that delivers the
                    results you need.
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-16 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhTestTubeLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h6 class="text-23 md:text-27">Stringent Quality Testing</h6>
                  <p class="max-w-prose text-16">
                    A successful website requires more than just great design
                    and functionality. It also needs to perform flawlessly
                    across all devices and platforms. That's why I offer
                    rigorous testing services to ensure your website meets the
                    highest standards of quality and performance.{" "}
                  </p>
                </div>
              </div>

              <div class="lg:max-h-336 flex flex-col items-start gap-12 rounded-4xl bg-backColor px-24 py-24 sm:py-32 md:px-32 md:py-16 lg:max-w-512 lg:py-48 xl:px-48">
                <div class="flex items-center justify-center rounded-3xl bg-bgColor p-14">
                  <PhHeadsetLight />
                </div>
                <div class="flex flex-col gap-4">
                  <h6 class="text-23 md:text-27">Continuous Support</h6>
                  <p class="max-w-prose text-16">
                    From regular maintenance and updates to ongoing optimization
                    and support, I'll work with you to ensure your website
                    continues to perform at its best. With my ongoing support
                    services, you can focus on your business while I take care
                    of your website.
                  </p>
                </div>
              </div>
            </div>
            {/* usp card end */}
            <div class="text-16 md:text-21">
              <span
                class="flex items-center justify-center gap-4 hover:cursor-pointer md:gap-8"
                onClick$={servicesfn}
              >
                Find out more about my services{" "}
                <span class="inline-block">
                  <PhArrowRight />
                </span>
              </span>
            </div>
          </div>
          {/* USP end */}
        </section>

        {/* Introduction Section */}
        <section class="flex w-full items-center">
          <div class=" mx-8 flex flex-col items-center gap-4 overflow-hidden rounded-4xl border-8 border-solid border-black text-center sm:mx-32 sm:border-8 md:mx-120 lg:flex-row-reverse lg:text-left">
          <div class="w-5/6 h-full overflow-hidden">
          <Image
            src={urlFor(sanity.value[0]?.introductionImage).url()}
            layout="constrained"
            width={386}
            height={515}
            alt={sanity.value[0]?.MainImageAlt}
            background="auto"
            class="h-full w-full mx-auto"
            />
          </div>
            
            <div class="flex max-w-prose flex-col items-center gap-16 px-16 py-32 lg:max-w-1080 lg:items-start lg:gap-32 lg:py-72 lg:pl-64">
              <h6 class="text-33 sm:text-40 md:text-47">Hi, I’m Anirban</h6>
              <p class="text-16">
                I build professional websites for your growing business, helping
                your company grow by boosting sales and increasing customer
                conversion rates, understanding your user's needs and then
                aligning them with your business goals.
              </p>
              <ButtonThird>Schedule a call</ButtonThird>
            </div>
          </div>
        </section>
        {/* Introduction section End */}

        {/* My toolkit */}
        <section class="w-full">
          <div class="flex flex-col items-center gap-8 px-32 md:gap-16 lg:gap-32 xl:gap-64">
            <h3 class="text-33 font-medium md:text-61 xl:text-80">
              My toolkit
            </h3>
            <h6 class="mt-16 text-center text-15 text-textColor sm:text-16 md:mt-32 md:text-21 xl:text-27">
              I’m capable of working confidently with any tools necessary to
              achieve goals.
              <br />
              These are few of my favorites'
            </h6>
            <div class="mt-16 flex max-w-848 flex-col items-center gap-16 rounded-4xl border-8  border-solid border-black px-32 py-24 md:mt-32 md:gap-32 md:px-64 md:py-64 lg:px-64 lg:py-72">
              <div class="flex items-center justify-around gap-8 sx:gap-10 sm:gap-32 md:gap-64">
                <Image
                    src="/images/logo/Webflow-logo.png"
                    layout="constrained"
                    alt="Webflow logo image."
                    width={50}
                    height={50}
                    background="auto"
                    class="w-50 md:w-104 xl:w-152"
                  />
                <Image
                    src="/images/logo/Shopify-logo.png"
                    layout="constrained"
                    alt="Shopify logo image."
                    width={50}
                    height={50}
                    background="auto"
                    class="w-50 md:w-104 xl:w-152"
                  />
                <Image
                    src="/images/logo/vercel-logo.png"
                    layout="constrained"
                    alt="Vercel logo image."
                    width={50}
                    height={50}
                    background="auto"
                    class="w-50 md:w-104 xl:w-152"
                  />
                <Image
                    src="/images/logo/Netlify-logo.png"
                    layout="constrained"
                    alt="Netlify logo image."
                    width={50}
                    height={50}
                    background="auto"
                    class="w-50 md:w-104 xl:w-152"
                  />
              </div>
              <div class="flex items-center justify-around gap-8 sx:gap-16 sm:gap-32 md:gap-64">
                <Image
                    src="/images/logo/Next.js-logo.png"
                    layout="constrained"
                    alt="Next.js logo image."
                    width={40}
                    height={40}
                    background="auto"
                    class="w-40 md:w-80 xl:w-100"
                  />
                <Image
                    src="/images/logo/Nuxt.js-logo.png"
                    layout="constrained"
                    alt="Nuxt.js logo image."
                    width={45}
                    height={45}
                    background="auto"
                    class="w-45 md:w-96 xl:w-120"
                  />
                <Image
                    src="/images/logo/React-logo.png"
                    layout="constrained"
                    alt="React logo image."
                    width={30}
                    height={30}
                    background="auto"
                    class="w-30 md:w-64 xl:w-60"
                  />
              </div>
              <div class="flex items-center justify-around gap-12 sx:gap-24 sm:gap-24 md:gap-48 lg:gap-56">
                <Image
                    src="/images/logo/aws-logo.png"
                    layout="constrained"
                    alt="AWS logo image."
                    width={20}
                    height={20}
                    background="auto"
                    class="w-20 md:w-40 xl:w-50"
                  />
                <Image
                    src="/images/logo/Figma-logo.png"
                    layout="constrained"
                    alt="Figma logo image."
                    width={9}
                    height={9}
                    background="auto"
                    class="w-9 md:w-18 xl:w-26"
                  />
                <Image
                    src="/images/logo/Sanity-logo.png"
                    layout="constrained"
                    alt="Sanity logo image."
                    width={18}
                    height={18}
                    background="auto"
                    class="w-18 md:w-40 xl:w-40"
                  />
              </div>
            </div>
          </div>
        </section>
        {/* My toolkit ends */}

        {/* My Workflow */}
        <WorkflowReact />
        {/* My workflow ends */}
      </div>
      {/* // Hero Wrapper end */}
    </>
  );
});


export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: 'Anirban Das - Fullstack Developer & UX Designer',
  meta: [
    {
      name: 'description',
      content: 'I Create Visually Stunning and Intuitively Functional Websites Crafted to Drive Result',
    },
    // Open graph
    {
      property: 'og:title',
      content: 'Anirban Das - Fullstack Developer & UX Designer',
    },
    {
      property: 'og:locale',
      content: 'en',
    },
    {
      property: 'og:site_name',
      content: 'Anirban Das - Fullstack Developer & UX Designer',
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:description',
      content: 'I Create Visually Stunning and Intuitively Functional Websites Crafted to Drive Result',
    },
    {
      property: 'og:image',
      content: 'https://cdn.sanity.io/images/izetizop/production/161ee6f9731fbc74dfcb3cc2b5808e80bf91f214-1200x630.jpg', // Replace with the actual image URL for sharing
    },
    {
      property: 'og:image:width',
      content: '1200', // Replace with the actual image URL for sharing
    },
    {
      property: 'og:image:height',
      content: '630', // Replace with the actual image URL for sharing
    },
    {
      property: 'og:url',
      content: 'https://www.anirbandas.in', // Replace with your website URL
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // Twitter Card meta tags (for Twitter sharing)
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@anirban12d',
    },
    {
      name: 'twitter:title',
      content: 'Anirban Das - Fullstack Developer & UX Designer',
    },
    {
      name: 'twitter:description',
      content: 'I Create Visually Stunning and Intuitively Functional Websites Crafted to Drive Result',
    },
    {
      name: 'twitter:image',
      content: 'https://cdn.sanity.io/images/izetizop/production/53104f57eb53f72eeeead492f157e1f755a3ab28-1200x675.jpg', // Replace with the actual image URL for sharing
    },
    {
      name: 'twitter:image:alt',
      content: 'Image of Anirban Das\'s personal website - Fullstack Developer & UX Designer', // Replace with the actual image URL for sharing
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://www.anirbandas.in',
    },
    // Favicon
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
};