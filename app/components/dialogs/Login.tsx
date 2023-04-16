"use client";

import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Dialog from "./Dialog";
import Input from "@components/inputs/Input";
import Button from "@components/buttons/Button";
import useLoginModal from "@hooks/useLoginModal";
import useRegisterModal from "@hooks/useRegisterModal";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short" }),
});

export type Schema = z.infer<typeof schema>;

const Modal: React.FC = () => {
  const login = useLoginModal();
  const register = useRegisterModal();
  const router = useRouter();

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

    toast.success("Sign in successful! Welcome.");
    setTimeout(() => {
      login.onClose();
      router.push("/dashboard");
    }, 300);
  };

  const openSignUp = () => {
    login.onClose();
    register.onOpen();
  };

  const bodyContent = (
    <div className="flex flex-col items-center gap-y-6">
      <h4>
        Sign in to{" "}
        <span className="font-bold text-secondary-500">
          <span className="text-primary-500">Coin</span>Synch
        </span>
      </h4>
      <FormProvider {...methods}>
        <form
          className="flex flex-col items-center gap-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Input placeholder="Email" name="email" type="email" />
          <Input placeholder="Password" name="password" type="password" />

          <label className="-mt-4 flex w-full cursor-pointer justify-end text-secondary-500 hover:underline">
            <small>Forgot password?</small>
          </label>

          <Button
            type="submit"
            title="Sign in"
            className="h-12 w-full disabled:bg-primary-200"
            disabled={methods.formState.isSubmitting}
          />

          <label>
            Don’t have an account?&nbsp;
            <span
              onClick={openSignUp}
              className="cursor-pointer font-bold text-gray hover:underline"
            >
              Sign up to <span className="text-primary-500">Coin</span>
              <span className="text-secondary-500">Synch</span>
            </span>
          </label>
        </form>
      </FormProvider>
    </div>
  );

  return (
    <Dialog
      open={login.isOpen}
      onClose={login.onClose}
      bodyContent={bodyContent}
    />
  );
};

export default Modal;
