import {
  component$,
  type Signal,
  Slot,
  useContextProvider,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { createContextId } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useVisibleTask$ } from "@builder.io/qwik";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";

import { TestimonialReact } from "~/components/testimonials/testimonials-react";

import CallToAction from "~/components/CTA/cta";
import Copyright from "~/components/copyright/copyright";
import FloatingNavbar from "~/components/floatingNavbar/floatingNavbar";
import ChatBot from "~/components/chatBot/chatBot";
import ProjectForm from "~/components/form/ProjectForm";
import ServicesModal from "~/components/ServicesModal/servicesModal";

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "izetizop",
  // zop
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-07-13", // use current date (YYYY-MM-DD) to target the latest API version
});

export const useSanityMyImages = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  try {
    const dataApi = await client.fetch('*[_type == "myImages"]');
    return dataApi;
  } catch (error) {
    console.log(error);
  }
});

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const ChatBotContext = createContextId<Signal<boolean>>(
  "docs.ChatBot-context"
);
export const currentPageContext = createContextId<Page>(
  "docs.Current-page-context"
);
export const FormContext =
  createContextId<Signal<boolean>>("docs.Form-context");

export const ServiceModalContext = createContextId<Signal<number>>(
  "docs.service-modal-context"
);

export const ServiceModalVisibleContext = createContextId<Signal<boolean>>(
  "docs.service-modal-visible-context"
);

export interface Page {
  home: boolean;
  about: boolean;
  projects: boolean;
  services: boolean;
  contact: boolean;
}

export default component$(() => {
  const loc = useLocation();

  const currentPage = useStore({
    home: true,
    about: false,
    projects: false,
    services: false,
    contact: false,
  });

  useVisibleTask$(
    ({ track }) => {
      track(() => {
        loc.url.pathname;
      });
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
    },
    { strategy: "document-ready" }
  );

  const chatBotVisible = useSignal(false);
  const FormVisible = useSignal(false);
  const currentModal = useSignal(0);
  const serviceModalVisible = useSignal(false);

  useContextProvider(currentPageContext, currentPage);
  useContextProvider(ChatBotContext, chatBotVisible);
  useContextProvider(FormContext, FormVisible);
  useContextProvider(ServiceModalContext, currentModal);
  useContextProvider(ServiceModalVisibleContext, serviceModalVisible);

  return (
    <div class="relative min-h-screen min-w-full scroll-smooth">
      <Header />
      <main class="min-w-screen flex items-center justify-center">
        <Slot />
      </main>
      <ProjectForm />
      <ChatBot />
      <ServicesModal />
      <TestimonialReact client:idle />
      <CallToAction />
      <FloatingNavbar />
      <Footer />
      <Copyright />
    </div>
  );
});
