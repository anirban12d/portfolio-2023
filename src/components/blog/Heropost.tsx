import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";
import { PhArticleIconWhite } from "~/Icons/blog/articleIconWhite";
import { DEFAULT_COVER } from "~/utils/const";

type Tag = {
  id: string;
  name: string;
  slug: string;
};

type SEO = {
  title: string | null;
  description: string;
};

type Content = {
  markdown: string;
  html: string;
};

type CoverImage = {
  url: string;
  attribution: string;
};

type Node = {
  id: string;
  title: string;
  brief: string;
  seo: SEO;
  readTimeInMinutes: number;
  tags: Tag[];
  content: Content;
  coverImage: CoverImage;
  slug: Slug;
};

type Slug = {
  slug: string;
};

type Items = {
  node: Node;
};

type Props = {
  items: Items;
};

export default component$(({ items }: Props) => {
  const item = items.node;
  return (
    <div key={item.id} class="col-span-1 md:col-span-2 lg:col-span-3">
      <div class="flex max-w-1080 flex-col items-start gap-16 rounded-3xl bg-bgColor p-20 sm:p-20 sm:py-24 md:gap-24 md:rounded-4xl md:px-48 md:py-48 lg:max-h-420 lg:flex-row lg:items-center lg:gap-24 xl:gap-32 xl:px-56 xl:py-96">
        {item?.coverImage ? (
          <div class="w-full overflow-hidden rounded-2xl bg-white lg:w-4/5 lg:rounded-4xl">
            <a
              href={"/blog/" + item.slug}
              aria-label="Link to the project page"
            >
              <Image
                src={item.coverImage.url}
                layout="constrained"
                alt={item.coverImage.attribution}
                width={1920}
                height={1200}
                background="auto"
                loading="eager"
                class="h-[181px] max-h-[181px] w-full object-cover object-center md:h-[360px] md:max-h-[360px]"
              />
            </a>
          </div>
        ) : (
          <div class="w-full overflow-hidden rounded-2xl bg-white lg:w-4/5 lg:rounded-4xl">
            <a
              href={"/blog/" + item.slug}
              aria-label="Link to the project page"
            >
              <Image
                src={DEFAULT_COVER}
                layout="constrained"
                alt="A placeholder Image"
                width={1920}
                height={1200}
                background="auto"
                loading="eager"
                class="h-[181px] max-h-[181px] w-full object-cover object-center md:h-[360px] md:max-h-[360px]"
              />
            </a>
          </div>
        )}
        <div class="flex flex-col items-start gap-8 sm:gap-16 md:gap-24 lg:max-w-416 xl:max-w-496">
          <div class="flex flex-col gap-8 sm:gap-16 md:gap-24">
            <h5 class="line-clamp-3 text-23 font-medium text-white hover:cursor-pointer hover:underline sm:text-33 md:text-27">
              <a
                href={"/blog/" + item.slug}
                aria-label="Link to the project page"
              >
                {item.title}
              </a>
            </h5>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-6 md:gap-16">
                <div class="h-32 w-32 overflow-hidden rounded-full md:h-48 md:w-48">
                  <Image
                    src="/images/botimg.jpg"
                    layout="constrained"
                    width={400}
                    height={400}
                    alt="A lovely bath"
                    background="auto"
                    class="h-32 w-32 rounded-full object-cover md:h-64 md:w-64"
                  />
                </div>
                <div class="flex flex-col items-start justify-between gap-1 text-white md:gap-2">
                  <h4 class="text-13 font-semibold sm:text-19 md:text-16">
                    Anirban Das
                  </h4>
                  <h5 class="flex items-center gap-6 text-13 font-light sm:text-13 md:text-13">
                    <PhArticleIconWhite />
                    {item.readTimeInMinutes} mins read
                  </h5>
                </div>
              </div>
              <div class="flex items-center justify-start gap-2 text-11 text-white">
                {item.tags.map((tag) => (
                  <span class="rounded-full bg-blue px-16 py-2" key={tag.id}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
            <p class="line-clamp-5 max-w-prose text-16 font-normal text-white md:text-16">
              {item.brief}
            </p>
          </div>
          <div>
            <a
              href={"/blog/" + item.slug}
              aria-label="Link to the project page"
            >
              <button class="sm:px-36 rounded-xl bg-primary px-18 py-9 text-center text-13 font-medium text-textColor transition duration-300 ease-in-out hover:scale-110 active:scale-90 sm:py-12 md:rounded-full md:px-32 md:text-16 lg:px-50 lg:py-12">
                Read Article
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
