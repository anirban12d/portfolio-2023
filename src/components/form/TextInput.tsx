import {
  component$,
  useSignal,
  useTask$,
  type PropFunction,
  type QwikChangeEvent,
  type QwikFocusEvent,
} from "@builder.io/qwik";
import clsx from "clsx";
import { InputError } from "./InputError";
import { InputLabel } from "./InputLabel";

type TextInputProps = {
  ref: PropFunction<(element: Element) => void>;
  type: "text" | "email" | "tel" | "password" | "url" | "number" | "date";
  name: string;
  value: string | number | undefined;
  onInput$: PropFunction<(event: Event, element: HTMLInputElement) => void>;
  onChange$: PropFunction<
    (
      event: QwikChangeEvent<HTMLInputElement>,
      element: HTMLInputElement
    ) => void
  >;
  onBlur$: PropFunction<
    (event: QwikFocusEvent<HTMLInputElement>, element: HTMLInputElement) => void
  >;
  placeholder?: string;
  required?: boolean;
  class?: string;
  label?: string;
  error?: string;
  form?: string;
};

/**
 * Text input field that users can type into. Various decorations can be
 * displayed in or around the field to communicate the entry requirements.
 */
export const TextInput = component$(
  ({ label, value, error, ...props }: TextInputProps) => {
    const { name, required } = props;
    const input = useSignal<string | number>();
    useTask$(({ track }) => {
      if (!Number.isNaN(track(() => value))) {
        input.value = value;
      }
    });
    return (
      <div class={clsx("mt-8 flex w-full flex-col", props.class)}>
        <InputLabel name={name} label={label} required={required} />
        <input
          {...props}
          class={clsx(
            "rounded-2xl border-2 bg-white px-16 py-8 text-13 outline-none placeholder:text-slate-500",
            error
              ? "border-red-600/50 dark:border-red-400/50"
              : "border-slate-200 hover:border-slate-300 focus:border-black"
          )}
          id={name}
          value={input.value}
          aria-invalid={!!error}
          aria-errormessage={`${name}-error`}
          autoComplete="on"
        />
        <InputError name={name} error={error} />
      </div>
    );
  }
);
