import { component$ } from "@builder.io/qwik";
import clsx from "clsx";

type InputLabelProps = {
  name: string;
  label?: string;
  required?: boolean;
  margin?: "none";
};

/**
 * Input label for a form field.
 */
export const InputLabel = component$(
  ({ name, label, required, margin }: InputLabelProps) => (
    <>
      {label && (
        <label
          class={clsx(
            "inline-block text-16 font-medium",
            !margin && "lg:mb-5 mb-4"
          )}
          for={name}
        >
          {label} {required && <span class="ml-1 text-red-600">*</span>}
        </label>
      )}
    </>
  )
);
