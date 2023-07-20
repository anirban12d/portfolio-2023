/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "@unpic/react";
import { client } from "~/routes/layout";


import "swiper/css";

function mockupProjects({dataProject}) {

    const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <>
      <section className="container min-w-full justify-center overflow-hidden">
        <div className="flex flex-col justify-center">
          <div className="relative flex overflow-hidden mx-8 md:mx-16 lg:mx-32 xl:mx-64">
            <Image
              src="/images/device-mockups/Macbook-2.svg"
              width="1008"
              height="635"
              alt=""
              background="auto"
              className="h-full w-full"
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
              className="absolute rounded-md left-0 right-0 top-10 mx-auto max-h-79% min-h-65% w-78% overflow-hidden md:top-20  lg:top-28"
            >
            <SwiperSlide
                    key={dataProject._key}
                    >
                <div className="w-full h-full">
                <Image
                        src={urlFor(dataProject.firstImage).url()}
                        layout="constrained"
                        alt={dataProject.FirstImageAlt}
                        width={2100}
                        height={1313}
                        background="auto"
                        className=" h-full w-full"
                      />
                </div>
              </SwiperSlide>
              <SwiperSlide
                    key={dataProject._key}
                    >
                <div className="w-full h-full">
                <Image
                        src={urlFor(dataProject.secondImage).url()}
                        layout="constrained"
                        alt={dataProject.SecondImageAlt}
                        width={2100}
                        height={1313}
                        background="auto"
                        className=" h-full w-full"
                      />
                </div>
              </SwiperSlide>
              <SwiperSlide
                    key={dataProject._key}
                    >
                <div className="w-full h-full">
                <Image
                        src={urlFor(dataProject.thirdImage).url()}
                        layout="constrained"
                        alt={dataProject.ThirdImageAlt}
                        width={2100}
                        height={1313}
                        background="auto"
                        className=" h-full w-full"
                      />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* Device mockup end */}
      </section>
    </>
  );
}

export const MockupReactProjects = qwikify$(mockupProjects, { eagerness: "load" });
