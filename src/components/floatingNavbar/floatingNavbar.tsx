import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { useContext } from "@builder.io/qwik";
import { ChatBotContext, currentPageContext } from "~/routes/layout";
import { $ } from "@builder.io/qwik";

import PhAirplayLight from "~/Icons/FloatingNavbar/PhAirplayLight";
import PhChatsLight from "~/Icons/FloatingNavbar/PhChatsLight";
import PhHouseLight from "~/Icons/FloatingNavbar/PhHouseLight";
import PhLightbulbFilamentLight from "~/Icons/FloatingNavbar/PhLightbulbFilamentLight";
import PhUserCircleLight from "~/Icons/FloatingNavbar/PhUserCircleLight";

export default component$(() => {

  const currentClass = "flex flex-col items-center gap-2 border-b-2 border-white"
  const otherClass = "flex flex-col items-center gap-2"

  const nav = useNavigate();
  const chatBotVisible = useContext(ChatBotContext);



  const currentPage = useContext(currentPageContext)

  const homefn = $(() => {
    nav('/')
    currentPage.home = true;
    currentPage.about = false;
    currentPage.projects = false;
    currentPage.services = false;
    currentPage.contact = false;
  })


const aboutfn = $(() => {
  nav("/about")
  currentPage.home = false;
  currentPage.about = true;
  currentPage.projects = false;
  currentPage.services = false;
  currentPage.contact = false;
})

const projectsfn = $(() => {
  nav("/projects")
  currentPage.home = false;
  currentPage.about = false;
  currentPage.projects = true;
  currentPage.services = false;
  currentPage.contact = false;
})

const servicesfn = $(() => {
  nav("/services")
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
    <>
      <div class="fixed bottom-0 top-auto z-30 flex w-full min-w-full items-center justify-center lg:hidden">
        <nav class="mx-4 my-8 py-8 flex w-full transform justify-evenly rounded-4xl bg-bgColor transition-all duration-500 md:w-2/4">
           <Link href="/" onClick$={homefn}>
           <div class={currentPage.home ? currentClass : otherClass}>
            <PhHouseLight />    
            <span class="text-11 text-white">Home</span>
          </div>
          </Link>
          
          <div class={currentPage.contact ? currentClass : otherClass} onClick$={contactfn}>
            <PhChatsLight />
            <span class="text-11 text-white">Contact</span>
          </div>

          <Link
              href="/services"
              onClick$={servicesfn}
              class="text-11 text-white"
            >
              <div class={currentPage.services ? currentClass : otherClass}>
            <PhAirplayLight />
            <span class="text-11 text-white">Services</span>
          </div>
            </Link>
          

          
            <Link
              href="/projects"
              onClick$={projectsfn}
              
            >
              <div class={currentPage.projects ? currentClass : otherClass}>
            <PhLightbulbFilamentLight />
            
            <span class="text-11 text-white">Projects</span>
          </div>
              
            </Link>      


          <Link href="/about" onClick$={aboutfn}>
            <div class={currentPage.about ? currentClass : otherClass}>
              <PhUserCircleLight />
              <span class="text-11 text-white">About</span>
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
});
