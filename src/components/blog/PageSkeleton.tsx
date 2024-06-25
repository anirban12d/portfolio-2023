import { component$ } from "@builder.io/qwik";
import { Skeleton } from "../qwik-ui/skeleton";

export const PageSkeleton = component$(() => {
  return (
    <div class="flex h-512 w-[80%] flex-col gap-12">
      <Skeleton class="h-[80%] w-full rounded-3xl" />
      <div class="h-[20%] space-y-8">
        <Skeleton class="h-16 w-full" />
        <Skeleton class="h-16 w-[80%]" />
        <Skeleton class="h-16 w-[60%]" />
      </div>
    </div>
  );
});
