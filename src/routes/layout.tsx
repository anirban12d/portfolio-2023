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
  blog: boolean;
  contact: boolean;
}

export default component$(() => {
  const loc = useLocation();

  const currentPage = useStore<Page>({
    home: false,
    about: false,
    projects: false,
    services: false,
    blog: false,
    contact: false,
  });

  useVisibleTask$(
    ({ track }) => {
      track(() => loc.url.pathname);

      const path = loc.url.pathname;
      currentPage.home = path === "/";
      currentPage.about = path === "/about/";
      currentPage.projects = path.startsWith("/projects/");
      currentPage.services = path === "/services/";
      currentPage.blog = path.startsWith("/blog/");
      currentPage.contact = path === "/contact/";
    },
    { strategy: "document-ready" }
  );

  const chatBotVisible = useSignal(false);
  const formVisible = useSignal(false);
  const currentModal = useSignal(0);
  const serviceModalVisible = useSignal(false);

  useContextProvider(currentPageContext, currentPage);
  useContextProvider(ChatBotContext, chatBotVisible);
  useContextProvider(FormContext, formVisible);
  useContextProvider(ServiceModalContext, currentModal);
  useContextProvider(ServiceModalVisibleContext, serviceModalVisible);

  return (
    <div class="relative min-h-screen min-w-full scroll-smooth">
      <Header />
      <Slot />
      <ProjectForm />
      <ChatBot />
      <ServicesModal />
      <FloatingNavbar />
      <Footer />
      <Copyright />
    </div>
  );
});
