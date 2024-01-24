/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "@unpic/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { useEffect, useState } from "react";

register();

function testimonials() {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const client = createClient({
    projectId: "izetizop",
    dataset: "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: "2023-07-13", // use current date (YYYY-MM-DD) to target the latest API version
  });

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    try {
      const getData = async () => {
        const dataApi = await client.fetch('*[_type == "testimonials"]');
        setData(dataApi);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <section className="my-32 flex w-full flex-col items-center gap-32 overflow-hidden bg-bgColor py-32 md:py-96 xl:gap-128 xl:py-160">
        <h3 className="text-center text-33 font-medium text-primary md:text-61 xl:text-80">
          What my clients are saying
        </h3>

        <div className=" max-w-1280 w-screen">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={80}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            mousewheel={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[
              Pagination,
              Navigation,
              EffectCards,
              Autoplay,
              Mousewheel,
            ]}
            className="max-w-80% md:max-w-542 lg:min-h-320 lg:max-w-640"
          >
            {data?.map((item) => {
              return (
                <SwiperSlide key={item._id}>
                  <div className="flex min-h-512 max-w-90% flex-col items-start justify-center gap-8 rounded-4xl border-4 border-solid border-black bg-primary px-32 py-24 md:max-h-288 md:min-h-288 md:gap-8 md:py-32 md:pl-48 md:pr-32 lg:py-64 lg:pl-64 lg:pr-32">
                    <div>
                      <p className="max-w-prose text-16 lg:text-19">
                        {item.testimony}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-8 md:gap-16">
                      <div className="h-48 w-48 overflow-hidden rounded-full md:h-64 md:w-64">
                        <Image
                          src={urlFor(item.image).url()}
                          layout="constrained"
                          width={600}
                          height={600}
                          alt="A lovely bath"
                          background="auto"
                          className="h-48 w-48 rounded-full md:h-64 md:w-64"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-between gap-2">
                        <h4 className="text-16 font-semibold sm:text-19 md:text-24">
                          {item.name}
                        </h4>
                        <h5 className="text-13 sm:text-13 md:text-16">
                          {item.profession}
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export const TestimonialReact = qwikify$(testimonials, {
  eagerness: "idle",
});
