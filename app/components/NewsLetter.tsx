"use client";

import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Input from "@components/inputs/Input";
import Button from "@components/buttons/Button";

const schema = z.object({
  email: z.string().email(),
});

export type Schema = z.infer<typeof schema>;

const Newsletter: React.FC = () => {
  const { ...methods } = useForm<Schema>({
    mode: "all",
    shouldFocusError: true,
    shouldUnregister: true,
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });

    methods.reset();
    toast.success("Welcome to the newsletter.");
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          className="flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <label className="mb-1 text-left text-white">Email</label>
          <Input
            placeholder="Email"
            name="email"
            type="text"
            className="shadow-xl"
          />

          <Button
            type="submit"
            title="Subscribe"
            className="mt-6 h-12 w-full shadow-xl disabled:bg-primary-200"
            disabled={methods.formState.isSubmitting}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Newsletter;
