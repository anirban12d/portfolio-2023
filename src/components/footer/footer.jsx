import { component$, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ButtonFifth } from "../button/ButtonFifth";
import { useContext } from "@builder.io/qwik";
import { ChatBotContext } from "~/routes/layout";
import { useLocation } from "@builder.io/qwik-city";

import PhTwitterLogoLight from "~/Icons/footer/PhTwitterLogoLight";
import PhFacebookLogoLight from "~/Icons/footer/PhFacebookLogoLight";
import PhGithubLogoLight from "~/Icons/footer/PhGithubLogoLight";
import PhLinkedinLogoLight from "~/Icons/footer/PhLinkedinLogoLight";
import PhInstagramLogoLight from "~/Icons/footer/PhInstagramLogoLight";
import { currentPageContext } from "~/routes/layout";

export default component$(() => {
  const loc = useLocation();

  const chatBotVisible = useContext(ChatBotContext);
  const currentPage = useContext(currentPageContext);

  const contactfn = $(() => {
    if (chatBotVisible.value === false) {
      chatBotVisible.value = !chatBotVisible.value;
      currentPage.home = false;
      currentPage.about = false;
      currentPage.projects = false;
      currentPage.services = false;
      currentPage.contact = true;
    } else {
      chatBotVisible.value = !chatBotVisible.value;
      if (loc.url.pathname == "/") {
        currentPage.home = true;
        currentPage.about = false;
        currentPage.projects = false;
        currentPage.services = false;
        currentPage.contact = false;
      } else if (loc.url.pathname == "/about/") {
        currentPage.home = false;
        currentPage.about = true;
        currentPage.projects = false;
        currentPage.services = false;
        currentPage.contact = false;
      } else if (loc.url.pathname == "/projects/") {
        currentPage.home = false;
        currentPage.about = false;
        currentPage.projects = true;
        currentPage.services = false;
        currentPage.contact = false;
      } else if (loc.url.pathname == "/services/") {
        currentPage.home = false;
        currentPage.about = false;
        currentPage.projects = false;
        currentPage.services = true;
        currentPage.contact = false;
      } else {
        currentPage.home = true;
      }
    }
  });

  return (
    <footer class="mb-64">
      <div class="m-auto flex max-w-996 flex-col items-center gap-32 px-32 py-16 md:flex-row md:justify-between md:gap-0 md:px-48 md:py-16">
        <div class="flex flex-col items-center gap-8 md:items-start md:justify-start xl:gap-16">
          <div class="flex flex-col items-center md:items-start md:justify-start xl:gap-8">
            <h4 class="text-center text-27 font-medium md:justify-start md:text-left xl:text-36">
              Anirban Das
            </h4>
            <p class="max-w-255 text-center text-12 md:justify-start md:text-left md:text-13 xl:max-w-340 xl:text-16">
              “Building high-performance websites that help your business
              succeed.”
            </p>
          </div>
          <div class="flex items-center md:justify-start">
            <ButtonFifth>Schedule a call</ButtonFifth>
          </div>
          <div class="flex items-center justify-center gap-8 md:ml-16">
            <Link
              href="https://twitter.com/Anirban12d"
              target="_blank"
              aria-label="Link to Anirban Das's Twitter profile"
            >
              <PhTwitterLogoLight />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anirban12d/"
              target="_blank"
              aria-label="Link to Anirban Das's Linkedin profile"
            >
              <PhLinkedinLogoLight />
            </Link>
            <Link
              href="https://www.instagram.com/anirban.jpg/"
              target="_blank"
              aria-label="Link to Anirban Das's Instagram profile"
            >
              <PhInstagramLogoLight />
            </Link>
            <Link
              href="https://github.com/anirban12d"
              target="_blank"
              aria-label="Link to Anirban Das's Github profile"
            >
              <PhGithubLogoLight />
            </Link>
            <Link
              href="https://www.facebook.com/prince.anirban.90"
              target="_blank"
              aria-label="Link to Anirban Das's Facebook profile"
            >
              <PhFacebookLogoLight />
            </Link>
          </div>
        </div>
        <div class="flex w-full justify-between md:w-auto md:gap-16 xl:gap-32">
          <div class="flex flex-col gap-8">
            <div>
              <h6 class="text-16 font-bold md:text-16">Quick links</h6>
            </div>
            <div>
              <ul class="flex flex-col gap-8 lg:gap-8">
                <li class="text-16 md:text-16">
                  <Link href="/" aria-label="Go back to home">
                    Home
                  </Link>
                </li>
                <li class="text-16 md:text-16">
                  <Link href="/projects" aria-label="See my projects">
                    Projects
                  </Link>
                </li>
                <li class="text-16 md:text-16">
                  <Link
                    href="/services"
                    aria-label="Find out more about my services"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col gap-8">
            <h6 class="text-16 font-bold md:text-16">Contact</h6>
            <p class="text-16 md:text-16">
              <button onClick$={contactfn}>Message</button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});
