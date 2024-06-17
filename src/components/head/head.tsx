import { component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();

  return (
    <>
      <title>{head.title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="google-site-verification"
        content="n80i6aomrdw-57BapcWxxDkMl1-hlCRBoj-fCNQdzPM"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {head.meta.map((m) => (
        <meta {...m} key={1} />
      ))}

      {head.links.map((l) => (
        <link {...l} key={2} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} key={3} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
