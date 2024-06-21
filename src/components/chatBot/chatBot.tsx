import { component$, useSignal, useStore, $ } from "@builder.io/qwik";
import { useContext } from "@builder.io/qwik";

import PhXCircleLight from "~/Icons/ChatBot/PhXCircleLight";
import { ChatBotContext, currentPageContext } from "~/routes/layout";
import { FormContext } from "~/routes/layout";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();

  const currentPage = useContext(currentPageContext);
  const chatBotVisible = useContext(ChatBotContext);
  const formOpen = useContext(FormContext);

  const FormCloseHandler = $(() => {
    formOpen.value = true;
  });

  const outputRef = useSignal<Element>();

  const scrollToBottom = $(() => {
    outputRef.value?.scrollTo(0, outputRef.value?.scrollHeight);
  });

  scrollToBottom();

  const chats = useStore({
    hello: false,
    hire: false,
    email: false,
    help: false,
  });

  const updateCurrentPage = $(() => {
    const path = loc.url.pathname;
    currentPage.home = path === "/";
    currentPage.about = path === "/about/";
    currentPage.projects = path === "/projects/";
    currentPage.services = path === "/services/";
    currentPage.blog = path === "/blog/";
    currentPage.contact = !(
      currentPage.home ||
      currentPage.about ||
      currentPage.projects ||
      currentPage.services ||
      currentPage.blog
    );
  });

  const closeHandler = $(() => {
    chatBotVisible.value = false;
    updateCurrentPage();
  });

  const clickHello = $(() => {
    chats.hello = true;
  });

  const clickHire = $(() => {
    chats.hire = true;
  });

  const clickHireFn = $(() => {
    FormCloseHandler();
    chats.hire = true;
  });

  const clickEmail = $(() => {
    chats.email = true;
  });

  return (
    <>
      {chatBotVisible.value && (
        <div
          class={`fixed bottom-0 z-40 flex h-full  flex-col overflow-hidden rounded-3xl border-2 border-black bg-white md:right-100 md:mb-8 md:max-h-640 md:max-w-384`}
        >
          <div class="flex items-center justify-between bg-bgColor px-16 py-16">
            <div class="flex items-center gap-8 bg-bgColor">
              <div class="h-48 w-48 overflow-hidden rounded-full">
                <img
                  // eslint-disable-next-line qwik/jsx-img
                  src="/images/botimg.jpg"
                  alt="An Avatar image of Anirban Das"
                  width={48}
                  height={48}
                />
              </div>
              <div class="flex flex-col justify-center gap-2">
                <h5 class="text-19 font-medium text-white">Anibot</h5>
                <span class="text-13 font-light text-white">
                  Ask me a question
                </span>
              </div>
            </div>
            <button
              onClick$={closeHandler}
              class="flex items-center justify-center self-end rounded-3xl px-8 py-8 hover:bg-textColor"
            >
              <PhXCircleLight />
            </button>
          </div>

          {/* Chat */}
          <div
            class="flex flex-col gap-16 overflow-y-auto overscroll-auto scroll-smooth px-16 py-32"
            ref={outputRef}
          >
            <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
              Hi
            </div>

            <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
              I’m Anibot, I’m here to help you with any questions you might have
              about my work
            </div>
            <div class="w-fit self-end rounded-4xl border-2 border-black bg-white px-24 py-16 text-16 text-black">
              <button onClick$={clickHello}>Just saying Hello! 👋</button>
            </div>
            <div class="w-fit self-end rounded-4xl border-2 border-black bg-white px-24 py-16 text-16 text-black">
              <button onClick$={clickHire}>I'd like to hire you</button>
            </div>
            <div class="w-fit self-end rounded-4xl border-2 border-black bg-white px-24 py-16 text-16 text-black">
              <button onClick$={clickEmail}>Send an email</button>
            </div>

            {chats.hello && (
              <>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  Hello 👋
                </div>

                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  Thanks for saying Hi!
                </div>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  Hope you are having a great day! 🎉
                </div>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  Is there anything else I can help you with?
                </div>

                <div class="w-fit self-end rounded-4xl border-2 border-black bg-white px-24 py-16 text-16 text-black">
                  <button onClick$={clickHire}>I'd like to hire you</button>
                </div>
                <div class="w-fit self-end rounded-4xl border-2 border-black bg-white px-24 py-16 text-16 text-black">
                  <button onClick$={clickEmail}>Send an email</button>
                </div>
              </>
            )}

            {chats.hire && (
              <>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  Great!
                </div>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  I'm excited! 🎉
                </div>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  Send me a project request!
                </div>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  We'll talk further about your project
                </div>

                <div class="w-fit self-end rounded-4xl border-2 border-black bg-white px-24 py-16 text-16 text-black">
                  <button onClick$={clickHireFn}>Send a project request</button>
                </div>
                <div class="w-fit self-end rounded-4xl border-2 border-black bg-white px-24 py-16 text-16 text-black">
                  <button onClick$={clickEmail}>Send an email</button>
                </div>
              </>
            )}

            {chats.email && (
              <>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  Here you go
                </div>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  <a href="mailto: anirbandashere@gmail.com">
                    anirbandashere@gmail.com
                  </a>
                </div>
                <div class="w-fit rounded-4xl bg-bgColor px-24 py-16 text-16 font-light text-white">
                  Have a good day 🎉
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
});
