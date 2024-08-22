import {
  component$,
  useContext,
  useStore,
  $,
  useVisibleTask$,
  useSignal,
} from "@builder.io/qwik";

import { z } from "@builder.io/qwik-city";

import {
  email,
  type InitialValues,
  required,
  useForm,
  formAction$,
  zodForm$,
} from "@modular-forms/qwik";

import { TextInput } from "./TextInput";
import { SubmitBtn } from "../button/SubmitBtn";
import { CloseBtn } from "../button/closeBtn";
import { OverviewInput } from "./OverviewInput";
import PhXLight from "~/Icons/Form/PhXLight";
import { FormContext } from "~/routes/layout";
import { Select } from "./Select";
import PhCalendarCheckLight from "~/Icons/Form/PhCalenderCheckLight-Black";
import { Client, Databases, ID } from "appwrite";

const FormSchema = z.object({
  name: z.string(),
  email: z.string(),
  profession: z.string(),
  budget: z.number(),
  overview: z.string(),
  option: z.string(),
});

type ProjectForm = {
  name: string;
  email: string;
  profession: string;
  budget: number;
  overview: string;
  option?: string;
};

// Submits Form value in the server
export const useFormAction = formAction$<ProjectForm>(
  async (values, requestEv) => {
    try {
      const client = new Client()
        .setEndpoint(requestEv.env.get("APPWRITE_API_ENDPOINT")!)
        .setProject(requestEv.env.get("APPWRITE_PROJECT_ID")!);

      const databases = new Databases(client);

      await databases.createDocument(
        requestEv.env.get("APPWRITE_DATABASE_ID")!,
        requestEv.env.get("APPWRITE_COLLECTION_ID")!,
        ID.unique(),
        {
          client_name: values.name,
          client_email: values.email,
          profession: values.profession,
          budget: values.budget,
          overview: values.overview,
          currency: values.option,
        }
      );
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  },
  zodForm$(FormSchema)
);

export default component$(() => {
  const element = useSignal<Element>();
  const formOpen = useContext(FormContext);
  const isMounted = useSignal(false);
  const isSubmitted = useSignal(false);

  const FormValue = useStore<InitialValues<ProjectForm>>({
    name: "",
    email: "",
    profession: "",
    budget: undefined,
    overview: "",
    option: "",
  });

  const [ProjectForm, { Form, Field }] = useForm<ProjectForm>({
    loader: { value: FormValue },
    action: useFormAction(),
    validate: zodForm$(FormSchema),
  });

  const submitHandler = $(() => {
    isSubmitted.value = true;
  });

  useVisibleTask$(({ track, cleanup }) => {
    track(() => formOpen.value);
    const id = setTimeout(() => (isMounted.value = true), 500);
    cleanup(() => clearTimeout(id)), { strategy: "document-ready" };
  });

  const closeHandler = $(() => {
    formOpen.value = !formOpen.value;
  });

  return (
    <>
      {formOpen.value && (
        <div class="fixed top-0 z-50 flex max-h-screen min-h-full min-w-full items-center justify-center overflow-y-auto overscroll-y-auto  bg-modal">
          {isMounted.value && (
            <div
              class="relative mb-4 mt-4 min-h-80% max-w-90% overflow-y-auto rounded-3xl bg-white px-32 py-32 lg:min-w-384"
              ref={element}
              id="form-div"
            >
              <button
                class="absolute right-10 top-0 p-16"
                onClick$={closeHandler}
              >
                <PhXLight />
              </button>
              {!isSubmitted.value ? (
                <Form
                  class=" flex h-full w-full flex-col justify-center gap-16"
                  onSubmit$={submitHandler}
                >
                  <Field
                    name="name"
                    validate={[required("Please enter your full name.")]}
                  >
                    {(field, props) => (
                      <TextInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        type="text"
                        label="Full name"
                        placeholder="Anirban Das"
                        required
                      />
                    )}
                  </Field>

                  <Field
                    name="email"
                    validate={[
                      required("Please enter your email."),
                      email("The email address is badly formatted."),
                    ]}
                  >
                    {(field, props) => (
                      <TextInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        type="email"
                        label="Email"
                        placeholder="anirbandashere@gmail.com"
                        required
                      />
                    )}
                  </Field>

                  <Field
                    name="profession"
                    validate={[required("Tell me about your profession.")]}
                  >
                    {(field, props) => (
                      <TextInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        type="text"
                        label="Role or Profession"
                        placeholder="Developer"
                        required
                      />
                    )}
                  </Field>

                  <div class="flex flex-col gap-4 md:flex-row">
                    <Field
                      name="budget"
                      type="number"
                      validate={[required("Please enter an amount.")]}
                    >
                      {(field, props) => (
                        <TextInput
                          {...props}
                          value={field.value}
                          error={field.error}
                          type="number"
                          label="Budget"
                          placeholder="$"
                          required
                        />
                      )}
                    </Field>

                    <Field
                      name="option"
                      validate={[required("Please choose a currency.")]}
                    >
                      {(field, props) => (
                        <Select
                          {...props}
                          value={field.value}
                          options={[
                            { label: "Dollars($)", value: "dollars" },
                            { label: "Rupees(₹)", value: "rupees" },
                            { label: "Pound(£)", value: "pounds" },
                            { label: "Euro(€)", value: "euros" },
                          ]}
                          error={field.error}
                          label="Currency"
                          placeholder="Select from the options."
                          required
                        />
                      )}
                    </Field>
                  </div>

                  <Field
                    name="overview"
                    validate={[
                      required("Tell me about the website you have in mind."),
                    ]}
                  >
                    {(field, props) => (
                      <OverviewInput
                        {...props}
                        value={field.value}
                        error={field.error}
                        type="text"
                        label="Project Description"
                        placeholder="Tell me more about the website you have in mind. Also tell me about your goals and timeline."
                        required
                      />
                    )}
                  </Field>
                  <SubmitBtn>
                    {ProjectForm.submitting ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="mr-2 h-32 w-32 animate-spin fill-blue  text-white"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Send a project request"
                    )}
                  </SubmitBtn>
                </Form>
              ) : (
                <div class="flex w-full flex-col items-center justify-center gap-16 py-32">
                  <PhCalendarCheckLight />
                  <h2 class="text-center text-21 md:text-33">
                    Thank you for sending the project request
                  </h2>
                  <p class="text-center text-16">
                    I will get back to you as soon as possible
                  </p>
                  <p class="text-center text-11">
                    You can also email me at{" "}
                    <a
                      href="mailto: anirbandashere@gmail.com"
                      class=" underline decoration-indigo-500"
                    >
                      anirbandashere@gmail.com
                    </a>
                  </p>
                  <CloseBtn>Close</CloseBtn>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
});
