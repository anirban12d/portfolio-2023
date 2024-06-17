import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";
import { PhArticleIconWhite } from "~/Icons/blog/articleIconWhite";
import { component$ } from "@builder.io/qwik";
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
  const item = items?.node;
  // console.log(item)
  return (
    <div
      class="flex flex-col items-start gap-16 overflow-hidden rounded-4xl bg-bgColor p-24 sm:p-24 md:max-w-[560px] md:gap-24 md:p-32 lg:max-h-[560] lg:items-center lg:gap-16 xl:gap-16 xl:px-32 xl:py-32"
      key={item.id}
    >
      {item?.coverImage ? (
        <div class="w-full overflow-hidden rounded-xl bg-white lg:rounded-xl">
          <Image
            src={item?.coverImage.url}
            layout="constrained"
            alt={item.coverImage.attribution}
            width={760}
            height={443}
            background="auto"
            loading="eager"
            class="h-[181px] max-h-[181px] w-full object-cover object-center"
          />
        </div>
      ) : (
        <div class="w-full overflow-hidden rounded-xl bg-white lg:rounded-xl">
          <Image
            src={DEFAULT_COVER}
            layout="constrained"
            alt="A placeholder Image"
            width={760}
            height={443}
            background="auto"
            loading="eager"
            class="h-[181px] max-h-[181px] w-full object-cover object-center"
          />
        </div>
      )}
      <div class="flex flex-col items-start gap-8  sm:gap-16 md:gap-24 lg:max-w-[100%] xl:max-w-[100%]">
        <div class="flex max-w-[100%] flex-col gap-8 sm:gap-16 md:gap-20">
          <h5 class="line-clamp-4 max-w-prose text-23 font-medium text-white sm:text-33 md:text-23 md:leading-[120%]">
            {item.title}
          </h5>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-6 md:gap-8">
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
              <div class="flex flex-col items-start justify-between gap-1 text-white md:gap-1">
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
          <Link
            href={"/blog/" + item.slug}
            aria-label="Link to the article page"
          >
            <button class="sm:px-36 rounded-full bg-primary px-18 py-9 text-center text-13 font-medium text-textColor transition duration-300 ease-in-out hover:scale-110 active:scale-90 sm:py-12 md:px-32 md:text-16 lg:px-32 lg:py-8">
              Read Article
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});
