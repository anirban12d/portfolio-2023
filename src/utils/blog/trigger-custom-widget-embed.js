export const triggercustomwidgetembed = async (pubid) => {
  const baseurl = "https://anirbandas.in/blog";
  const frames = document.queryselectorall(".hn-embed-widget");
  if (frames.length === 0) {
    return;
  }
  frames.foreach(async (frame) => {
    try {
      const iframe = document.createelement("iframe");
      const host = window.location.hostname;
      iframe.id = `frame-${frame.id}`;
      iframe.sandbox =
        "allow-same-origin allow-forms allow-presentation allow-scripts allow-popups";
      iframe.src =
        host.indexof(".hashnode.net") !== -1 ||
        host.indexof(".app.localhost") !== -1
          ? `${baseurl}/api/pub/${pubid}/embed/${frame.id}`
          : `https://embeds.hashnode.com?p=${pubid}&w=${frame.id}`;
      iframe.width = "100%";
      frame.innerhtml = "";
      frame.appendchild(iframe);
      settimeout(() => {
        // todo:
        // eslint-disable-next-line no-undef
        iframeresize({ log: false, autoresize: true }, `#${iframe.id}`);
      }, 1000);
      frame.setattribute("class", "hn-embed-widget-expanded");
    } catch (e) {
      console.log(e);
    }
  });
};
