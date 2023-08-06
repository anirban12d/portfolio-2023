import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/head/head';
import { QwikPartytown } from './components/partytown/partytown';



import './global.css';




export default component$(() => {


  
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <script defer type="text/partytown" src="/_vercel/insights/script.js"></script>
        <QwikPartytown forward={['dataLayer.push']}/>
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-6NQ8DHJ9ZK"
        />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
