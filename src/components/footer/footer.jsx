import { component$, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ButtonFifth } from "../button/ButtonFifth";
import { useContext } from "@builder.io/qwik";
import { ChatBotContext } from "~/routes/layout";
import { useNavigate } from "@builder.io/qwik-city";

import PhTwitterLogoLight from "~/Icons/footer/PhTwitterLogoLight";
import PhFacebookLogoLight from "~/Icons/footer/PhFacebookLogoLight";
import PhGithubLogoLight from "~/Icons/footer/PhGithubLogoLight";
import PhLinkedinLogoLight from "~/Icons/footer/PhLinkedinLogoLight";
import PhInstagramLogoLight from "~/Icons/footer/PhInstagramLogoLight";
import { currentPageContext } from "~/routes/layout";




export default component$(() =>{

  const nav = useNavigate()

  const chatBotVisible = useContext(ChatBotContext);
  const currentPage = useContext(currentPageContext);

  const homefn = $(() => {
    nav('/')
    currentPage.home = true;
    currentPage.about = false;
    currentPage.projects = false;
    currentPage.services = false;
    currentPage.contact = false;
  })

  const projectsfn = $(() => {
    nav('/projects')
    currentPage.home = false;
    currentPage.about = false;
    currentPage.projects = true;
    currentPage.services = false;
    currentPage.contact = false;
  })
  

  const servicesfn = $(() => {
    nav('/services')
    currentPage.home = false;
    currentPage.about = false;
    currentPage.projects = false;
    currentPage.services = true;
    currentPage.contact = false;
  })

  const contactfn = $(() => {
    chatBotVisible.value = !chatBotVisible.value
    currentPage.home = false;
    currentPage.about = false;
    currentPage.projects = false;
    currentPage.services = false;
    currentPage.contact = true;
  })


    return (
        <footer class="mb-64">
        <div class="flex flex-col px-32 m-auto py-16 items-center gap-32 max-w-996 md:flex-row md:px-48 md:py-16 md:justify-between md:gap-0">
        <div class="flex items-center flex-col gap-8 md:justify-start md:items-start xl:gap-16">
          <div class="flex flex-col items-center md:justify-start md:items-start xl:gap-8">
            <h6 class="text-27 font-medium text-center md:text-left md:justify-start xl:text-36">Anirban Das</h6>
            <p class="text-12 text-center max-w-255 md:text-left md:justify-start md:text-13 xl:text-16 xl:max-w-340">
              “Building high-performance websites that help your business
              succeed.”
            </p>
          </div>
          <div class="flex items-center md:justify-start">
            <ButtonFifth>Schedule a call</ButtonFifth>
          </div>
          <div class="flex items-center justify-center gap-8 md:ml-16">
          <Link href="https://twitter.com/Anirban12d" target="_blank"><PhTwitterLogoLight/></Link>
          <Link href="https://www.linkedin.com/in/anirban12d/" target="_blank"><PhLinkedinLogoLight/></Link>
          <Link href="https://www.instagram.com/anirban.jpg/" target="_blank"><PhInstagramLogoLight/></Link>
          <Link href="https://github.com/anirban12d" target="_blank"><PhGithubLogoLight/></Link>
          <Link href="https://www.facebook.com/prince.anirban.90" target="_blank"><PhFacebookLogoLight/></Link>
          </div>
        </div>
        <div class="flex w-full justify-between md:gap-16 md:w-auto xl:gap-32">
          <div class="flex flex-col gap-8">
            <div>
              <h6 class="text-16 font-bold md:text-16">Quick links</h6>
            </div>
            <div>
              <ul class="flex flex-col gap-8 lg:gap-8">
                <li class="text-16 md:text-16" onClick$={homefn}>
                <Link href="/">Home</Link>
                </li>
                <li class="text-16 md:text-16" onClick$={projectsfn}>
                <Link href="/projects">Projects</Link>
                </li>
                <li class="text-16 md:text-16" onClick$={servicesfn}>
                <Link href="/services">Services</Link>
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
    )
})