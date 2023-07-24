import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { ButtonFirst } from "../button/ButtonFirst";
import { ChatBotContext, currentPageContext } from "~/routes/layout";
import { useContext } from "@builder.io/qwik";
import { $ } from "@builder.io/qwik";

export default component$(() => {
  const currentClass =
    "cursor-pointer rounded-full px-16 py-12 text-16 leading-[90%] bg-black text-white lg:px-24";
  const otherClass =
    "cursor-pointer rounded-full px-16 py-12 text-16 leading-[90%] hover:bg-backColor2 lg:px-24";

  const nav = useNavigate();
  const chatBotVisible = useContext(ChatBotContext);
  const currentPage = useContext(currentPageContext);

  const homefn = $(() => {
    nav("/");
    currentPage.home = true;
    currentPage.about = false;
    currentPage.projects = false;
    currentPage.services = false;
    currentPage.contact = false;
  });

  const aboutfn = $(() => {
    nav("/about");
    currentPage.home = false;
    currentPage.about = true;
    currentPage.projects = false;
    currentPage.services = false;
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

  const servicesfn = $(() => {
    nav("/services");
    currentPage.home = false;
    currentPage.about = false;
    currentPage.projects = false;
    currentPage.services = true;
    currentPage.contact = false;
  });

  const contactfn = $(() => {
    chatBotVisible.value = !chatBotVisible.value;
    currentPage.home = false;
    currentPage.about = false;
    currentPage.projects = false;
    currentPage.services = false;
    currentPage.contact = true;
  });

  return (
    <nav class="fixed top-0 z-30 flex w-full items-center justify-center bg-transparent backdrop-blur-3xl">
      <div class="opacity-85 flex w-full flex-row items-center justify-between bg-white px-8 py-8 md:rounded-4xl md:px-16 lg:px-32 xl:w-1280">
        <div class="cursor-pointer justify-start text-center text-19 font-medium leading-[90%] md:text-24">
          <Link href="/" onClick$={homefn}>
            Anirban Das
          </Link>
        </div>
        <ul class="hidden flex-row gap-2 text-16 lg:flex">
          <li
            class={currentPage.about ? currentClass : otherClass}
            onClick$={aboutfn}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            class={currentPage.projects ? currentClass : otherClass}
            onClick$={projectsfn}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            class={currentPage.services ? currentClass : otherClass}
            onClick$={servicesfn}
          >
            <Link href="/services">Services</Link>
          </li>
          <li>
          <button
            class={currentPage.contact ? currentClass : otherClass}
            onClick$={contactfn}
          >
            Contact
          </button>
          </li>
        </ul>
        <ButtonFirst>Hire me</ButtonFirst>
      </div>
    </nav>
  );
});
