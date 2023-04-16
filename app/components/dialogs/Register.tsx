"use client";

import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BsPerson } from "react-icons/bs";

import Dialog from "./Dialog";
import Input from "@components/inputs/Input";
import Checkbox from "@components/inputs/Checkbox";
import Button from "@components/buttons/Button";
import useLoginModal from "@hooks/useLoginModal";
import useRegisterModal from "@hooks/useRegisterModal";

const schema = z
  .object({
    username: z.string().min(4, { message: "Too short " }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Too short" }),
    confirmPassword: z.string().min(8, { message: "Too short" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type Schema = z.infer<typeof schema>;

const RegisterModal: React.FC = () => {
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

    toast.success("All fine!");
    setTimeout(() => {
      register.onClose();
      router.push("/dashboard");
    }, 300);
  };

  const openSignIn = () => {
    register.onClose();
    login.onOpen();
  };

  const bodyContent = (
    <div className="flex flex-col items-center gap-y-6">
      <h4>
        Sign up to{" "}
        <span className="font-bold text-secondary-500">
          <span className="text-primary-500">Coin</span>Synch
        </span>
      </h4>
      <FormProvider {...methods}>
        <form
          className="flex flex-col items-center gap-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Input
            Icon={BsPerson}
            placeholder="Name"
            name="username"
            type="text"
          />
          <Input placeholder="Email" name="email" type="email" />
          <Input placeholder="Password" name="password" type="password" />
          <Input
            placeholder="Confirm password"
            name="confirmPassword"
            type="password"
          />

          <Checkbox
            name="terms"
            label={
              <span>
                I have read and accept the{" "}
                <span className="font-bold">Privacy Policy</span> and{" "}
                <span className="font-bold">Terms of User Sign up.</span>
              </span>
            }
          />

          <Button
            type="submit"
            title="Sign Up"
            className="h-12 w-full disabled:bg-primary-200"
            disabled={methods.formState.isSubmitting}
          />

          <label>
            Already have and account?&nbsp;
            <span
              onClick={openSignIn}
              className="cursor-pointer font-bold text-gray hover:underline"
            >
              Sign in to <span className="text-primary-500">Coin</span>
              <span className="text-secondary-500">Synch</span>
            </span>
          </label>
        </form>
      </FormProvider>
    </div>
  );

  return (
    <Dialog
      open={register.isOpen}
      onClose={register.onClose}
      bodyContent={bodyContent}
    />
  );
};

export default RegisterModal;
