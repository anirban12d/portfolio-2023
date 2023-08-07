import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/head/head";
import { QwikPartytown } from "./components/partytown/partytown";
import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  interface LDJsonData {
    '@context': string;
    '@type': string;
    name: string;
    url: string;
    sameAs: string[];
    description: string;
  }


  const ldJson: LDJsonData = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Anirban Das',
    url: 'https://www.anirbandas.in/',
    sameAs: [
      'https://www.linkedin.com/in/anirban12d',
      'https://twitter.com/anirban12d',
      'https://www.facebook.com/princeanirban90',
    ],
    description: 'I Create Visually Stunning and Intuitively Functional Websites, Crafted to Drive Result.',
  };

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <QwikPartytown forward={["dataLayer.push"]} />
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=GTM-KPRB495D"
        />
        <script
          defer
          type="text/partytown"
          src="/_vercel/insights/script.js"
        ></script>
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      </head>

      
      <body lang="en">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPRB495D"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
