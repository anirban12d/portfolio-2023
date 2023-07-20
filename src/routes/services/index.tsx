import { component$ } from "@builder.io/qwik";

import { LearnMoreBtn } from "~/components/button/LearnMoreBtn";

import { QCollaborative, QGoalOriented, QPersonalized, QQualityTesting, QSEO, QSupport, QUserCentric, QWebOptimization } from "~/integrations/react/lottie";

import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    // Hero Wrapper
    <div class="mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-96 xl:w-1280 ">
      {/* //Hero Heading */}
      <section class="container min-w-full">
        <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen md:gap-32 xl:gap-48">
          <div class="flex w-full flex-col items-center justify-center gap-24 mt-64 md:gap-32 xl:gap-48 lg:mt-48">
          <h1 class="text-center text-48 tracking-low text-black sm:text-69 md:text-80 lg:text-105 xl:text-138">
          Bridging
          </h1>
          <h2 class="xl:80 text-center text-23 text-black sm:text-28 md:text-47 lg:text-61">
            creativity and functionality
          </h2>
          <h3 class="text-center text-13 text-black sm:text-16 lg:text-21 xl:text-27">
            "Creating seamless digital experiences that drive results."
          </h3>
          </div>
          
        </div>
      </section>
      {/* Hero Heading Ends */}

      {/* Cards */}
      <section class="container flex min-w-full flex-col gap-32">
        <h3 class="text-center text-28 text-black sm:text-40 md:text-61 xl:text-80">
          Everything you need
        </h3>
        <div class="flex flex-col items-center gap-32 md:gap-64">

          {/* card 1 */}
          <div class="flex flex-col items-center gap-16 px-16 py-16 md:flex-row-reverse md:justify-around md:gap-32 md:px-64 xl:max-w-1080">
            <div class="flex w-2/5 lg:w-1/3 items-center">
              <QWebOptimization />
            </div>
            <div class="flex flex-col gap-8 md:max-w-396 md:gap-16 lg:max-w-442">
              <h6 class="text-23 text-textColor sm:text-28 md:text-27 lg:text-36">
                Website Optimization
              </h6>
              <p class="text-16 text-textColor">
                Want to know how your website can perform even better? I offer
                professional website reviews to help you identify areas for
                improvement and optimize your site for better results.
              </p>
              <div>
                <LearnMoreBtn current={0}>Learn more</LearnMoreBtn>
              </div>
            </div>
          </div>

          {/* card 2 */}

          <div class="flex flex-col items-center gap-16 px-16 py-16 md:flex-row md:justify-around md:gap-32 md:px-64 xl:max-w-1080">
            <div class="flex w-2/5 lg:w-1/3 items-center">
              <QUserCentric/>
            </div>
            <div class="flex flex-col gap-8 md:max-w-396 md:gap-16 lg:max-w-442">
              <h6 class="text-23 text-textColor sm:text-28 md:text-27 lg:text-36">
                User-Centric Design
              </h6>
              <p class="text-16 text-textColor">
                Your website is the digital face of your brand, and a great user
                experience can make all the difference. I specialize in creating
                user-centric designs that engage your audience and guide them
                towards your desired actions.
              </p>
              <div>
                <LearnMoreBtn current={1}>Learn more</LearnMoreBtn>
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div class="flex flex-col items-center gap-16 px-16 py-16 md:flex-row-reverse md:justify-around md:gap-32 md:px-64 xl:max-w-1080">
            <div class="flex w-2/5 lg:w-1/3 items-center">
              <QGoalOriented/>
            </div>
            <div class="flex flex-col gap-8 md:max-w-396 md:gap-16 lg:max-w-442">
              <h6 class="text-23 text-textColor sm:text-28 md:text-27 lg:text-36">
                Goal-Oriented Strategy
              </h6>
              <p class="text-16 text-textColor">
                Whether you're a small business or a large enterprise, I'll work
                with you to develop a tailored strategy that aligns with your
                goals and drives conversions. I'll help you take your online
                presence to the next level.
              </p>
              <div>
                <LearnMoreBtn current={2}>Learn more</LearnMoreBtn>
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div class="flex flex-col items-center gap-16 px-16 py-16 md:flex-row md:justify-around md:gap-32 md:px-64 xl:max-w-1080">
            <div class="flex w-2/5 lg:w-1/3 items-center">
              <QPersonalized/>
            </div>
            <div class="flex flex-col gap-8 md:max-w-396 md:gap-16 lg:max-w-442">
              <h6 class="text-23 text-textColor sm:text-28 md:text-27 lg:text-36">
                Personalized Solutions
              </h6>
              <p class="text-16 text-textColor">
                Every business has unique needs, and that's why I offer
                customized web development solutions to help you achieve your
                goals. I'll create a tailored solution using the latest
                technologies and best practices.
              </p>
              <div>
                <LearnMoreBtn current={3}>Learn more</LearnMoreBtn>
              </div>
            </div>
          </div>

          {/* card 5 */}

          <div class="flex flex-col items-center gap-16 px-16 py-16 md:flex-row-reverse md:justify-around md:gap-32
         md:px-64 xl:max-w-1080">
            <div class="flex w-2/5 items-center">
              <QQualityTesting/>
            </div>
            <div class="flex flex-col gap-8 md:max-w-396 md:gap-16 lg:max-w-442">
              <h6 class="text-23 text-textColor sm:text-28 md:text-27 lg:text-36">
                Stringent Quality Testing
              </h6>
              <p class="text-16 text-textColor">
                A successful website requires more than just great design and
                functionality. I provide meticulous testing services to ensure
                your website excels in design, functionality, and performance on
                all devices.
              </p>
              <div>
                <LearnMoreBtn current={4}>Learn more</LearnMoreBtn>
              </div>
            </div>
          </div>

          {/* card 6 */}

          <div class="flex flex-col items-center gap-16 px-16 py-16 md:flex-row md:justify-around md:gap-32 md:px-64 xl:max-w-1080">
            <div class="flex w-2/5 lg:w-1/3 items-center">
              <QSupport />
            </div>
            <div class="flex flex-col gap-8 md:max-w-396 md:gap-16 lg:max-w-442">
              <h6 class="text-23 text-textColor sm:text-28 md:text-27 lg:text-36">
                Continuous Support
              </h6>
              <p class="text-16 text-textColor">
                My website support services cover everything from routine
                maintenance to continuous optimization, allowing you to focus on
                your business while I ensure your website performs at its best.
              </p>
              <div>
                <LearnMoreBtn current={5}>Learn more</LearnMoreBtn>
              </div>
            </div>
          </div>

          {/* card 7 */}

          <div class="flex flex-col items-center gap-16 px-16 py-16 md:flex-row-reverse md:justify-around md:gap-32 md:px-64 xl:max-w-1080">
            <div class="flex w-2/5 lg:w-1/3 items-center">
              <QSEO />
            </div>
            <div class="flex flex-col gap-8 md:max-w-396 md:gap-16 lg:max-w-442">
              <h6 class="text-23 text-textColor sm:text-28 md:text-27 lg:text-36">
                SEO-Strategy
              </h6>
              <p class="text-16 text-textColor">
                Boost your website's traffic and leads with my SEO services. I
                focus on keyword research and on-page optimization to improve
                your search engine ranking on Google and other platforms.
              </p>
              <div>
                <LearnMoreBtn current={6}>Learn more</LearnMoreBtn>
              </div>
            </div>
          </div>

          {/* card 8 */}

          <div class="flex flex-col items-center gap-16 px-16 py-16 md:flex-row md:justify-around md:gap-32 md:px-64 xl:max-w-1080">
            <div class="flex w-2/5 lg:w-1/3 items-center">
              <QCollaborative/>
            </div>
            <div class="flex flex-col gap-8 md:max-w-396 md:gap-16 lg:max-w-442">
              <h6 class="text-23 text-textColor sm:text-28 md:text-27 lg:text-36">
                Collaborative approach
              </h6>
              <p class="text-16 text-textColor">
                I can work flexibly with other teams and designers to turn your
                vision into a stunning website that represents your brand and
                engages your audience. Let's work together to create something
                great!
              </p>
              <div>
                <LearnMoreBtn current={7}>Learn more</LearnMoreBtn>
              </div>
            </div>
          </div>
        </div>
        {/* Card ends */}
      </section>
    </div>
  );
});


export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: 'Anirban Das - Services',
  meta: [
    {
      name: 'description',
      content: 'Find out what you need for your website to shine',
    },
    // Open graph
    {
      property: 'og:title',
      content: 'Anirban Das - Services',
    },
    {
      property: 'og:description',
      content: 'Find out what you need for your website to shine',
    },
    {
      property: 'og:url',
      content: 'https://www.anirbandas.in/services', // Replace with your website URL
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
      content: 'Anirban Das - Services',
    },
    {
      name: 'twitter:description',
      content: 'Find out what you need for your website to shine',
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
      href: 'https://www.anirbandas.in/services',
    },
    // Favicon
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
};