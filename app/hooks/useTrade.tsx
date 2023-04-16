import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Schema } from "@components/dialogs/AddCrypto";
import { Schema as TransferSchema } from "@components/dialogs/Trade";

interface TradeStore {
  data: any;
  updatedAt: number;
  activeCrypto: any;
  addItem: (data: Schema) => void;
  transfer: (data: TransferSchema) => void;
  selectCrypto: (index: number) => void;
}

const useTradeStore = create(
  immer<TradeStore>((set) => ({
    data: [],
    updatedAt: 0,
    activeCrypto: {},
    selectCrypto: (index: number) =>
      set((state) => {
        state.activeCrypto = state.data[index];
        state.activeCrypto.index = index;
      }),
    transfer: (data: TransferSchema) =>
      set((state) => {
        const index = state.activeCrypto.index;
        let item = state.data[index];

        switch (data.type.value) {
          case 0:
            const subtract = parseFloat(item.value) - parseFloat(data.quantity);

            if (subtract > 0) {
              item.value = subtract;

              state.updatedAt = new Date().getTime();
              state.data[index] = { ...item };
            } else {
              state.updatedAt = new Date().getTime();
              state.data = [
                ...state.data.slice(0, index),
                ...state.data.slice(index + 1),
              ];
            }

          case 1:
            const add = parseFloat(item.value) + parseFloat(data.quantity);
            state.updatedAt = new Date().getTime();
            item.value = add;
        }
      }),
    addItem: (data: Schema) =>
      set((state) => {
        state.updatedAt = new Date().getTime();

        const found = state.data.findIndex(
          (i: any) => i.crypto.asset_id === data.crypto.asset_id
        );

        if (found !== -1) {
          state.data[found].value =
            parseFloat(state.data[found].value) + parseFloat(data.value);
        } else {
          state.data.push(data);
        }
      }),
  }))
);

export default useTradeStore;
