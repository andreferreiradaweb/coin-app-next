"use client";

import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Dialog from "./Dialog";

import Input from "@components/inputs/Input";
import CryptoSelect from "@components/inputs/CryptoSelect";
import Button from "@components/buttons/Button";

import useAddCryptoModal from "@hooks/useAddCryptoModal";
import useTradeStore from "@hooks/useTrade";

const schema = z.object({
  crypto: z.object({
    asset_id: z.string(),
    name: z.string(),
    type_is_crypto: z.number(),
    data_quote_start: z.string(),
    data_quote_end: z.string(),
    data_orderbook_start: z.string(),
    data_orderbook_end: z.string(),
    data_trade_start: z.string(),
    data_trade_end: z.string(),
    data_symbols_count: z.number(),
    volume_1hrs_usd: z.number(),
    volume_1day_usd: z.number(),
    volume_1mth_usd: z.number(),
    price_usd: z.number(),
    id_icon: z.string(),
    data_start: z.string(),
    data_end: z.string(),
  }),
  value: z
    .string()
    .min(1)
    .refine((p) => parseInt(p) > -1, {
      message: "Please use a valid positive number",
    }),
});

export type Schema = z.infer<typeof schema>;

const Modal: React.FC = () => {
  const modal = useAddCryptoModal();
  const trade = useTradeStore();

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

    trade.addItem(data);
    toast.success("Thank you for buying with us");
    modal.onClose();
  };

  const openSignUp = () => {};

  const bodyContent = (
    <div className="flex w-full flex-col items-center gap-y-6">
      <h4 className="font-bold">Add Crypto</h4>
      <FormProvider {...methods}>
        <form
          className="flex w-full flex-col items-center gap-y-6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <CryptoSelect placeholder="Choose" name="crypto" />
          <Input placeholder="20,00" name="value" type="number" />

          <Button
            type="submit"
            title="Add Crypto"
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
