"use client";

import { useForm, FormProvider } from "react-hook-form";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Dialog from "./Dialog";

import Input from "@components/inputs/Input";
import Select from "@components/inputs/Select";
import Button from "@components/buttons/Button";

import useTradeModal from "@hooks/useTradeModal";
import useTradeStore from "@hooks/useTrade";

const schema = z.object({
  type: z.object({
    label: z.string(),
    value: z.number(),
  }),
  quantity: z
    .string()
    .min(1)
    .refine((p) => parseInt(p) > -1, {
      message: "Please use a valid positive number",
    }),
});

export type Schema = z.infer<typeof schema>;

const Modal: React.FC = () => {
  const modal = useTradeModal();
  const trade = useTradeStore();

  const { crypto, value } = trade.activeCrypto;

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

    trade.transfer(data);
    toast.success("Thank you for trading");
    modal.onClose();
  };

  const openSignUp = () => {};

  const bodyContent = (
    <div className="flex w-full flex-col items-center gap-y-6">
      <h4 className="font-bold">Transfer Crypto</h4>
      <div className="flex w-full flex-row justify-evenly border-t border-t-secondary-200 pt-4">
        <small className="flex items-center text-secondary-400">
          You are transfering
        </small>
        <div className="flex flex-row items-center">
          <Image
            className="mr-2 h-4 w-4"
            width={32}
            height={32}
            alt={`${crypto?.name} Logo`}
            src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${crypto?.id_icon?.replaceAll(
              "-",
              ""
            )}.png`}
          />
          <p className="ml-4">{crypto?.name}</p>{" "}
          <p className="ml-2 text-secondary-500">{crypto?.asset_id}</p>
        </div>
      </div>
      <FormProvider {...methods}>
        <form
          className="flex w-full flex-col items-center gap-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Select
            displayValue={(v) => v.label}
            valueKey="value"
            labelKey="label"
            placeholder="Select transfer"
            data={[
              { label: "Transfer In", value: 1 },
              { label: "Transfer Out", value: 0 },
            ]}
            name="type"
          >
            {(data: any, selected: any, active: any) => (
              <div className="flex flex-row items-center">{data.label}</div>
            )}
          </Select>
          <Input
            placeholder={`0,00 (max ${value})`}
            name="quantity"
            type="number"
          />

          <Button
            type="submit"
            title="Transfer Crypto"
            className="h-12 w-full disabled:bg-primary-200"
            disabled={methods.formState.isSubmitting}
          />
        </form>
      </FormProvider>
    </div>
  );

  return (
    <Dialog
      open={modal.isOpen}
      onClose={modal.onClose}
      bodyContent={bodyContent}
    />
  );
};

export default Modal;
