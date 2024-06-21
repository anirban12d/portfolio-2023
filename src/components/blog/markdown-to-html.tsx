import { markdownToHtml } from "~/utils/blog/renderer/markdownToHtml";
import { component$ } from "@builder.io/qwik";

type Props = {
  contentMarkdown: string;
};

export const _MarkdownToHtml = component$(({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);

  return (
    <div
      class="hashnode-content-style w-full max-w-[80%] overflow-hidden"
      dangerouslySetInnerHTML={content}
    />
  );
});
