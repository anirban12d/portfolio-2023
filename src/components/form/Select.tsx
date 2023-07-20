import {
    component$,
    useSignal,
    useTask$,
    type PropFunction,
    type QwikChangeEvent,
    type QwikFocusEvent,
  } from '@builder.io/qwik';
  import clsx from 'clsx';
  import SolarAltArrowDownOutline from '~/Icons/Form/SolarAltArrowDownOutline';
  import { InputError } from './InputError';
  import { InputLabel } from './InputLabel';
  
  type SelectProps = {
    ref: PropFunction<(element: Element) => void>;
    name: string;
    value: string | string[] | null | undefined;
    onInput$: PropFunction<(event: Event, element: HTMLSelectElement) => void>;
    onChange$: PropFunction<
      (
        event: QwikChangeEvent<HTMLSelectElement>,
        element: HTMLSelectElement
      ) => void
    >;
    onBlur$: PropFunction<
      (
        event: QwikFocusEvent<HTMLSelectElement>,
        element: HTMLSelectElement
      ) => void
    >;
    options: { label: string; value: string }[];
    multiple?: boolean;
    size?: number;
    placeholder?: string;
    required?: boolean;
    class?: string;
    label?: string;
    error?: string;
  };
  
  /**
   * Select field that allows users to select predefined values. Various
   * decorations can be displayed in or around the field to communicate the
   * entry requirements.
   */
  export const Select = component$(
    ({ value, options, label, error, ...props }: SelectProps) => {
      const { name, required, multiple, placeholder } = props;
  
      // Create computed value of selected values
      const values = useSignal<string[]>();
      useTask$(({ track }) => {
        track(() => value);
        values.value = Array.isArray(value)
          ? value
          : value && typeof value === 'string'
          ? [value]
          : [];
      });
  
      return (
        <div class={clsx('mt-8 w-1/2 flex flex-col', props.class)}>
          <InputLabel name={name} label={label} required={required} />
          <div class="relative flex items-center">
            <select
              {...props}
              class={clsx(
                'rounded-2xl px-16 py-8 border-2 text-13 bg-white outline-none placeholder:text-slate-500',
                error
                  ? 'border-red-600/50 dark:border-red-400/50'
                  : 'border-slate-200 hover:border-slate-300 focus:border-black',
                multiple ? 'py-5' : 'h-20',
                placeholder && !values.value?.length && 'text-slate-500'
              )}
              id={name}
              aria-invalid={!!error}
              aria-errormessage={`${name}-error`}
            >
              <option value="" disabled hidden selected={!value}>
                {placeholder}
              </option>
              {options.map(({ label, value }) => (
                <option
                  key={value}
                  value={value}
                  selected={values.value?.includes(value)}
                >
                  {label}
                </option>
              ))}
            </select>
            {!multiple && (
              <SolarAltArrowDownOutline />
            )}
          </div>
          <InputError name={name} error={error} />
        </div>
      );
    }
  );