import {
  component$,
  useSignal,
  useTask$,
  type PropFunction,
  type QwikChangeEvent,
  type QwikFocusEvent,
} from '@builder.io/qwik';
import clsx from 'clsx';
import { InputError } from './InputError';
import { InputLabel } from './InputLabel';

type TextInputProps = {
  ref: PropFunction<(element: Element) => void>;
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
  name: string;
  value: string | number | undefined;
  onInput$: PropFunction<(event: Event, element: HTMLTextAreaElement) => void>;
  onChange$: PropFunction<
    (
      event: QwikChangeEvent<HTMLTextAreaElement>,
      element: HTMLTextAreaElement
    ) => void
  >;
  onBlur$: PropFunction<
    (event: QwikFocusEvent<HTMLTextAreaElement>, element: HTMLTextAreaElement) => void
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
export const OverviewInput = component$(
  ({ label, value, error, ...props }: TextInputProps) => {
    const { name, required } = props;
    const input = useSignal<string | number>();
    useTask$(({ track }) => {
      if (!Number.isNaN(track(() => value))) {
        input.value = value;
      }
    });
    return (
      <div class={clsx('mt-8 w-full flex flex-col', props.class)}>
        <InputLabel name={name} label={label} required={required} />
        <textarea 
          ref={props.ref}
          name={name}
          value={input.value}
          onInput$={props.onInput$}
          onChange$={props.onChange$}
          onBlur$={props.onBlur$}
          placeholder={props.placeholder}
          required={props.required}


          class={clsx(
            'min-h-96 rounded-2xl px-16 py-8 border-2 text-13 bg-white outline-none placeholder:text-slate-500',
            error
              ? 'border-red-600/50 dark:border-red-400/50'
              : 'border-slate-200 hover:border-slate-300 focus:border-black'
          )}
          id={name}
          aria-invalid={!!error}
          aria-errormessage={`${name}-error`}
        /> 
        <InputError name={name} error={error} />
      </div>
    );
  }
);