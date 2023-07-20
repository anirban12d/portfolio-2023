import { component$ } from "@builder.io/qwik";
import { ButtonSecond } from "~/components/button/ButtonSecond";
import { useSanityMyImages } from "../layout";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "@unpic/qwik";
import { client } from "../layout";
import type { DocumentHead } from "@builder.io/qwik-city";


type Image = {
  src: string;
  layout: string;
  width: number;
  height: number;
  alt: string;
  background: string;
  class: string;
};

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}



export default component$(() => {

  const images = useSanityMyImages()

  const image = images.value[0]

  return (
    <div class="flex flex-col gap-32 md:gap-64 lg:gap-128">
      {/* Hero Heading */}
      <section class="container min-w-full">
        {/* Hero Heading Wrapper */}
        <div class="flex w-full flex-col items-center justify-center md:min-h-screen">
          <div class="flex flex-col items-center gap-24 mt-72 md:mt-32 md:gap-48 xl:mt-64 xl:gap-56">
            <h2 class="text-center text-28 md:text-47 xl:text-61">Hi there!</h2>
            <h1 class="text-center text-33 sm:text-40 md:text-80 xl:text-105">
              I'm Anirban Das
            </h1>
            <h3 class="text-center text-13 leading-150 md:text-19 xl:text-24 xl:leading-150">
              I Create Visually Stunning and Intuitively Functional Websites.
              <br />
              Crafted to Drive Result.
            </h3>
            <ButtonSecond>Let's make it happen</ButtonSecond>
          </div>
        </div>
      </section>

      {/* About Myself */}
      <section class="container flex min-w-full flex-col gap-32 md:gap-64 lg:gap-128">
        {/* Why me */}
        <div class="flex flex-col items-center gap-32 md:gap-96 lg:gap-128">
          <h3 class="text-33 font-medium sm:text-40 md:text-61 xl:text-80">Why Me?</h3>
          <div class="flex max-w-1080 flex-col items-center gap-16 px-2 md:px-16 lg:flex-row lg:px-64">
            <div class="max-w-[350px] overflow-hidden rounded-4xl">
            <Image
                    src={urlFor(image.aboutImageMain).url()}
                    layout="constrained"
                    alt={image.aboutImageMainAlt}
                    width={900}
                    height={1600}
                    background="auto"
                    class="w-full object-cover object-center"
                  />
            </div>
            <div class="flex max-w-496 flex-col items-center gap-16 px-8 sx:px-16 sm:px-32">
              <p class="max-w-prose text-16">
                <span class="font-semibold">
                  With a focus on creating beautiful and functional websites
                </span>{" "}
                that drive results, I have the skills and expertise to help you
                achieve your online goals. Whether you're a small business just
                starting out, or a larger company looking to expand your online
                reach, I have the tools and knowledge you need to succeed.
              </p>
              <p class="max-w-prose text-16">
                <span class="font-semibold">From design to development,</span> I
                can take your website from concept to completion with ease. I
                understand that each business is unique, and I take the time to
                get to know you and your specific needs. This allows me to
                create custom solutions that are tailored to your business and
                your audience.
              </p>
              <p class="max-w-prose text-16">
                <span class="font-semibold">
                  In addition to web development,
                </span>{" "}
                I also offers business strategy and consulting services. I can
                help you identify areas for growth and improvement, and provide
                actionable advice and guidance to help you reach your goals.
                With a focus on driving results, I am the ideal partner for
                businesses of all sizes and industries.
              </p>
            </div>
          </div>
        </div>

        {/* My Story */}
        <div class="flex flex-col items-center gap-32 md:gap-96 lg:gap-128">
          <h3 class="text-33 font-medium sm:text-40 md:text-61 xl:text-80">My story</h3>

          <div class="flex flex-col items-center gap-32 md:gap-96 lg:gap-128">
            <div class="flex max-w-1080 flex-col items-center gap-16 px-2 md:px-16 lg:flex-row lg:gap-32 lg:px-64 xl:gap-64">
              <div class="max-w-[350px] overflow-hidden rounded-4xl">
              <Image
                    src={urlFor(image.aboutSecondaryImage1).url()}
                    layout="constrained"
                    alt={image.AboutImage1Alt}
                    width={960}
                    height={1280}
                    background="auto"
                    class="w-full object-cover object-center"
                  />
              </div>
              <div class="flex max-w-496 flex-col items-center gap-16 px-8 sx:px-16 sm:px-32">
                <p class="max-w-prose text-16">
                  <span class="font-semibold">
                    I'm Anirban Das - a passionate web developer from India.
                  </span>{" "}
                  I've always had a love for technology and creating things, and
                  building websites allows me to combine those two passions in
                  the best way possible.
                  <br />
                  <br /> I started my journey into the world of web development
                  at a young age, and I've been hooked ever since. I find it
                  truly fascinating how the internet connects people from all
                  over the world, and I'm always excited to learn more about how
                  it all works.
                </p>
              </div>
            </div>

            <div class="flex flex-col items-center gap-32 md:gap-96 lg:gap-128">
              <div class="flex max-w-1080 flex-col items-center gap-16 px-2 md:px-16 lg:flex-row-reverse lg:gap-32 lg:px-64 xl:gap-64">
                <div class="max-w-[350px] overflow-hidden rounded-4xl">
                <Image
                    src={urlFor(image.aboutSecondaryImage2).url()}
                    layout="constrained"
                    alt={image.AboutImage2Alt}
                    width={960}
                    height={1280}
                    background="auto"
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="flex max-w-496 flex-col items-center gap-16 px-8 sx:px-16 sm:px-32 lg:px-0 lg:pr-32">
                  <p class="max-w-prose text-16">
                    <span class="font-semibold">
                      Over the years, I've worked hard
                    </span>{" "}
                    to become proficient in a variety of programming languages
                    including HTML, CSS, JavaScript, and PHP. I love being able
                    to take an idea and turn it into a beautiful, functional
                    website that clients can be proud of.
                    <br />
                    <br />
                    One of the things I'm most proud of in my work is my
                    attention to detail. I believe that every element of a
                    website should be perfect, and I always strive to ensure
                    that everything from the layout to the colors to the text is
                    just right. I'm also a great communicator, and I believe
                    that collaboration is key to creating the best possible
                    website for my clients.
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-32 md:gap-96 lg:gap-128">
              <div class="flex max-w-1080 flex-col items-center gap-16 px-2 md:px-16 lg:flex-row lg:gap-32 lg:px-64 xl:gap-64">
                <div class="max-w-[350px] overflow-hidden rounded-4xl">
                <Image
                    src={urlFor(image.aboutSecondaryImage3).url()}
                    layout="constrained"
                    alt={image.AboutImage3Alt}
                    width={960}
                    height={1280}
                    background="auto"
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="flex max-w-496 flex-col items-center gap-16 px-8 sx:px-16 sm:px-32">
                  <p class="max-w-prose text-16">
                    <span class="font-semibold">
                      Outside of web development,
                    </span>{" "}
                    I'm also an avid photographer, a guitarist and a lover of
                    all things creative. From building drones to tinkering with
                    Raspberry Pi and Arduinos, I thrive on the excitement of DIY
                    projects - there's nothing like getting my hands dirty and
                    bringing my ideas to life. I also enjoy exploring new places
                    and trying out new recipes in the kitchen. And of course, I
                    always have a good book on hand.
                    <br />
                    <br />
                    In short, I'm someone who is truly passionate about what I
                    do. I'm always pushing myself to learn more and to create
                    the best possible websites for my clients. I'm excited to
                    see where this journey takes me next!reach, I have the tools
                    and knowledge you need to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My toolkit */}
      <section>
        <div class=" flex flex-col gap-16 px-8 sm:px-32 md:gap-32 md:px-64 xl:gap-64">
          {/* texts */}
          <div class="flex flex-col items-center gap-16 md:gap-32 xl:gap-64">
            <h3 class="text-center font-medium text-33 sm:text-40 md:text-61 xl:text-80">
              My toolkit
            </h3>
            <h6 class="text-center text-16 md:text-19 xl:text-27">
              I’m capable of working confidently with any tools necessary to
              achieve goals.
              <br />
              These are few of my favorites
            </h6>
          </div>
          {/* Graphics */}
          <div class="flex max-w-1080 flex-col gap-16 xl:gap-64">
            {/* Toolkit Grid */}
            <div class="overflow-hidden rounded-4xl border-4 border-black">
              <Image
                    src="/images/Frame.png"
                    layout="constrained"
                    alt="An Image of all the logos for the toolkits I use for making websites. Eg: next.js, react.js,  webflow, shopify etc"
                    width={1080}
                    height={768}
                    background="auto"
                    class="w-full object-cover object-center"
                  />
            </div>
            {/* Technologies */}
            <div class="flex flex-col items-center gap-16 lg:flex-row">
              <div class="flex flex-col gap-8 rounded-4xl grow border-4 border-black bg-grey px-32 py-16 md:px-64   lg:py-32">
                <h6 class="text-23 font-medium text-textColor md:text-27 lg:text-36">
                  Frontend Tools
                </h6>
                <p class="text-16 font-medium text-textColor lg:max-w-384">
                  JavaScript(ES6+), TypeScript, HTML5, React.js, Next.js, Redux,
                  Redux Toolkit, Redux, React Testing Library, Cypress, Sentry,
                  Node.js/Express, Sanity/Strapi CMS, Git/Gitlab/Github.
                  Webflow/Shopify.
                </p>
              </div>
              <div class="flex flex-col gap-8 rounded-4xl grow border-4 border-black min-h-full bg-grey py-16 pl-32 pr-64 md:px-64 lg:py-32">
                <h6 class="text-23 font-medium text-textColor md:text-27 lg:text-36">
                  Ui Libraries
                </h6>
                <p class="text-16 font-medium text-textColor lg:mb-48 lg:max-w-384">
                  CSS3/SCSS/SASS, Framer Motion, GSAP, Styled Components,
                  Bootstrap, Tailwind CSS, Material UI, Chakra UI, React
                  Storybook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});




export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: 'Anirban Das - About',
  meta: [
    {
      name: 'description',
      content: 'Find out why I love to do what I love to do',
    },
    // Open graph
    {
      property: 'og:title',
      content: 'Anirban Das - About',
    },
    {
      property: 'og:description',
      content: 'Find out why I love to do what I love to do',
    },
    {
      property: 'og:url',
      content: 'https://www.anirbandas.in/about', // Replace with your website URL
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
      content: 'website',
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
      content: 'Anirban Das - About',
    },
    {
      name: 'twitter:description',
      content: 'Find out why I love to do what I love to do',
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
      href: 'https://www.anirbandas.in/about',
    },
    // Favicon
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
};