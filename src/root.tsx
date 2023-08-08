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
   *
   *
   */

  interface LDImage {
    "@type": string;
    url: string;
    width: number;
    height: number;
  }

  interface LDJsonData {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    sameAs: string[];
    description: string;
    image: LDImage;
  }

  const ldJson: LDJsonData = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Anirban Das",
    url: "https://www.anirbandas.in/",
    sameAs: [
      "https://www.linkedin.com/in/anirban12d",
      "https://twitter.com/anirban12d",
      "https://www.facebook.com/princeanirban90",
      "https://github.com/anirban12d",
    ],
    description:
      "I Create Visually Stunning and Intuitively Functional Websites, Crafted to Drive Result.",
    image: {
      "@type": "ImageObject",
      url: "https://cdn.sanity.io/images/izetizop/production/e68729884184767907437ca14b0068c7ba37287f-1152x2048.jpg",
      width: 200,
      height: 200,
    },
  };

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <QwikPartytown
          forward={["dataLayer.push", "GoogleAnalyticsObject", "ga", "gtag"]}
          resolveUrl={(url, _location, type) => {
            const proxyScriptHosts = [
              'www.google-analytics.com',
              'www.googletagmanager.com',
            ];
            if (type === 'script' && !!url && proxyScriptHosts.find((proxyScriptHost) => url.host.includes(proxyScriptHost))) {
              const proxyUrl = new URL('https://my-proxy.com/api/proxy');
              proxyUrl.searchParams.append('url', url.href);
              return proxyUrl;
            }
            return url;
          }}
        />
        
        <script
          type="text/partytown"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6NQ8DHJ9ZK"
        ></script>
        <script type="text/partytown" src="./components/GTM/gtm.js"></script>
        <script
          defer
          type="text/partytown"
          src="/_vercel/insights/script.js"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={JSON.stringify(ldJson, null, 2)}
        ></script>
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
