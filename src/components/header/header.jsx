import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { ButtonFirst } from "../button/ButtonFirst";
import { ChatBotContext, currentPageContext } from "~/routes/layout";
import { useContext } from "@builder.io/qwik";
import { $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const currentClass =
    "cursor-pointer rounded-full px-16 py-12 text-16 leading-[90%] transition-all delay-100 bg-black text-white lg:px-24";
  const otherClass =
    "cursor-pointer rounded-full px-16 py-12 text-16 leading-[90%] transition-all delay-100 hover:bg-backColor2 lg:px-24";

  const nav = useNavigate();

  const chatBotVisible = useContext(ChatBotContext);
  const currentPage = useContext(currentPageContext);

  const loc = useLocation();

  const updateCurrentPage = $((path) => {
    currentPage.home = path === "/";
    currentPage.about = path === "/about/";
    currentPage.projects = path === "/projects/";
    currentPage.services = path === "/services/";
    currentPage.contact = path === "/contact/";
  });

  const contactfn = $(() => {
    chatBotVisible.value = !chatBotVisible.value;
    if (!chatBotVisible.value) {
      updateCurrentPage(loc.url.pathname);
    } else {
      currentPage.home = false;
      currentPage.about = false;
      currentPage.projects = false;
      currentPage.services = false;
      currentPage.contact = true;
    }
  });

  const Navlinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Services",
      link: "/services",
    },
  ];

  return (
    <nav class="fixed top-0 z-30 flex w-full items-center justify-center">
      <div class="flex w-full flex-row items-center justify-between bg-white px-8 py-8 md:rounded-4xl md:px-16 lg:px-32 xl:w-1280">
        <div class="cursor-pointer justify-start text-center text-19 font-medium leading-[90%] md:text-24">
          <Link href="/" aria-label="Go to home">
            Anirban Das
          </Link>
        </div>
        <ul class="hidden flex-row gap-2 text-16 lg:flex">
          {Navlinks.map((item, index) => (
            <li
              key={index}
              class={
                currentPage[item.name.toLowerCase()] ? currentClass : otherClass
              }
              onClick$={() => item.link && nav(item.link)}
            >
              {item.name}
            </li>
          ))}
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
