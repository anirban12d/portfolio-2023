import type { PropsOf, QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type WrapperProps = {
  props?: QwikIntrinsicElements["div"];
  class?: any;
};

export const Skeleton = component$<WrapperProps>(({ ...props }) => {
  return (
    <div
      {...props}
      class={cn("animate-pulse rounded bg-bgColor", props.class)}
    />
  );
});
