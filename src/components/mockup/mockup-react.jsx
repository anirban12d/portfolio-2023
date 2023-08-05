/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "@unpic/react";
import { client } from "~/routes/layout";

import "swiper/css";

function mockup() {
  const [data, setData] = useState([]);

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    try {
      const getData = async () => {
        const dataApi = await client.fetch('*[_type == "projects"]');
        setData(dataApi);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <section className="container min-w-full justify-center overflow-hidden">
        <div className="flex flex-col justify-center">
          <div className="relative mx-8 flex overflow-hidden md:mx-16 lg:mx-32 xl:mx-64">
            <Image
              src="/images/device-mockups/Macbook-2.svg"
              width="1008"
              height="635"
              alt=""
              background="auto"
              className="h-full w-full"
              loading="eager"
            />
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[Autoplay]}
              className="absolute left-0 right-0 top-10 mx-auto max-h-79% min-h-65% w-78% overflow-hidden rounded-md md:top-20  lg:top-28"
            >
              {data.map((item, key) => {
                return (
                  <>
                    <SwiperSlide key={key}>
                      <div className="h-full w-full">
                        <Image
                          src={urlFor(item.mainImage).url()}
                          layout="constrained"
                          alt={item.alt}
                          width={2100}
                          height={1313}
                          background="auto"
                          className=" h-full w-full"
                        />
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* Device mockup end */}
      </section>
    </>
  );
}

export const MockupReact = qwikify$(mockup, { eagerness: "load" });
