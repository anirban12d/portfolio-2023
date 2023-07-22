/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";

function workflow() {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col items-center justify-center gap-8 overflow-hidden px-32 md:gap-16 lg:gap-32 xl:gap-64">
          <h3 className="text-33 font-medium md:text-61 xl:text-80">
            My workflow
          </h3>
          <h5 className="mt-16 text-center text-15 text-textColor sm:text-16 md:mt-32 md:text-21 xl:text-27">
            Streamlined and transparent Workflow, making your experience
            effortless.
          </h5>
          <Swiper
            direction={"vertical"}
            centeredSlides={true}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={80}
            mousewheel={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Mousewheel]}
            className=" max-w-full mt-48 max-h-420 md:max-h-400"
          >
            <SwiperSlide>
              <div className="flex max-h-640 max-w-736 items-center justify-center rounded-4xl border-2 border-black px-16 py-16 md:min-h-256 md:border-4 md:px-64 md:py-32 lg:py-32">
                <div className="flex items-center justify-center gap-16 md:gap-64">
                  <h5 className="text-48 font-medium md:text-105">1</h5>
                  <div className="flex flex-col gap-4 md:gap-16 lg:gap-24">
                    <h6 className="text-23 font-medium md:text-36">Request</h6>
                    <p className="text-16 md:text-16 lg:text-19">
                      Let's kick off our collaboration with a thrilling first
                      step: the project request! It's like a sneak peek into
                      your vision, allowing me to gauge if I'm the perfect match
                      for your project. If we hit it off, we'll dive even deeper
                      into the details with an exciting video call.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex max-h-640 max-w-736 items-center justify-center rounded-4xl border-2 border-black px-16 py-16 md:min-h-256 md:border-4 md:px-64 md:py-32 lg:py-32">
                <div className="flex items-center justify-center gap-16 md:gap-64">
                  <h5 className="text-48 md:text-105">2</h5>
                  <div className="flex flex-col gap-4 md:gap-16 lg:gap-24">
                    <h6 className="text-23 font-medium md:text-36">Call</h6>
                    <p className="text-16 md:text-16 lg:text-19">
                      It's all about getting to know each other, like going on a
                      friendly "get-together" adventure. We'll discover if we're
                      a perfect match, while unraveling your goals,
                      requirements, and visions. Along the way, we'll clear any
                      doubts, answer burning questions, and pave the path for
                      the exciting next steps.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex max-h-640 max-w-736 items-center justify-center rounded-4xl border-2 border-black px-16 py-16 md:min-h-256 md:border-4 md:px-64 md:py-32 lg:py-32">
                <div className="flex items-center justify-center gap-16 md:gap-64">
                  <h5 className="text-48 font-medium md:text-105">3</h5>
                  <div className="flex flex-col gap-4 md:gap-16 lg:gap-24">
                    <h6 className="text-23 font-medium md:text-36">Proposal</h6>
                    <p className="text-16 md:text-16 lg:text-19">
                      Once I've absorbed every detail of your project, it's time
                      to weave magic into an individual proposal, tailor-made
                      just for you. Here's the exciting part: I don't count the
                      hours, but rather offer a per-project pricing approach.
                      This means you get a crystal-clear picture of the costs
                      right from the start.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex max-h-640 max-w-736 items-center justify-center rounded-4xl border-2 border-black px-16 py-16 md:min-h-256 md:border-4 md:px-64 md:py-32 lg:py-32">
                <div className="flex items-center justify-center gap-16 md:gap-64">
                  <h5 className="text-48 font-medium md:text-105">4</h5>
                  <div className="flex flex-col gap-4 md:gap-16 lg:gap-24">
                    <h6 className="text-23 font-medium md:text-36">
                      Implementation
                    </h6>
                    <p className="text-16 md:text-16 lg:text-19">
                      All set and ready to bring your project to life! With all
                      the necessary ingredients in hand, I'll dive headfirst
                      into the implementation phase. But here's the cherry on
                      top: I value transparent communication and believe in
                      keeping you in the loop every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex max-h-640 max-w-736 items-center justify-center rounded-4xl border-2 border-black px-16 py-16 md:min-h-256 md:border-4 md:px-64 md:py-32 lg:py-32">
                <div className="flex items-center justify-center gap-16 md:gap-64">
                  <h5 className="text-48 font-medium md:text-105">5</h5>
                  <div className="flex flex-col gap-4 md:gap-16 lg:gap-24">
                    <h6 className="text-23 font-medium md:text-36">Testing</h6>
                    <p className="text-16 md:text-16 lg:text-19">
                      Before the big debut, your finalized website will undergo
                      a meticulous quality assurance process. Every nook and
                      cranny will be examined to ensure perfection in every
                      detail and the process will only stop when you are
                      satisfied with the result.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex max-h-640 max-w-736 items-center justify-center rounded-4xl border-2 border-black px-16 py-16 md:min-h-256 md:border-4 md:px-64 md:py-32 lg:py-32">
                <div className="flex items-center justify-center gap-16 md:gap-64">
                  <h5 className="text-48 font-medium md:text-105">6</h5>
                  <div className="flex flex-col gap-4 md:gap-16 lg:gap-24">
                    <h6 className="text-23 font-medium md:text-36">Launch</h6>
                    <p className="text-16 md:text-16 lg:text-19">
                      On the final day, I've got your back, taking care of
                      everything from domain names to hosting. But wait, there's
                      more! If you prefer, I can also export the code, allowing
                      your website to dazzle on any platform you desire. Let me
                      handle the technicalities while you focus on what truly
                      matters—growing your business.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex max-h-640 max-w-736 items-center justify-center rounded-4xl border-2 border-black px-16 py-16 md:min-h-256 md:border-4 md:px-64 md:py-32 lg:py-32">
                <div className="flex items-center justify-center gap-16 md:gap-64">
                  <h5 className="text-48 font-medium md:text-105">7</h5>
                  <div className="flex flex-col gap-4 md:gap-16 lg:gap-24">
                    <h6 className="text-23 font-medium md:text-36">Support</h6>
                    <p className="text-16 md:text-16 lg:text-19">
                      Our journey doesn't end there! In the long run, when
                      challenges arise, I'll be your steadfast companion, ready
                      to provide unwavering support and guidance. You can count
                      on me, Anirban, to be by your side, fixing any hiccups
                      that may come your way.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export const WorkflowReact = qwikify$(workflow, { eagerness: "visible" });
