"use client";

import Image from "next/image";

import { Icons } from "@components/Card";
import Button from "@components/buttons/Button";
import TableHoldings from "@components/tables/TableHoldings";

import emptywallet from "../../../public/images/empty-wallet.webp";

import useAddCryptoModal from "@hooks/useAddCryptoModal";
import useTradeStore from "@hooks/useTrade";

const CoinTrade = () => {
  const addCrypto = useAddCryptoModal();
  const trade = useTradeStore();

  return (
    <div className="border-t-2 border-t-secondary-300 md:border-t-0 md:bg-white md:shadow-trade">
      <div className="flex flex-row justify-between border-b border-b-secondary-200 p-6">
        <div className="flex flex-row">
          <Icons.wallet width={32} height={32} />
          <h4 className="ml-4 font-bold text-gray">My wallet</h4>
        </div>
        <div className="hidden lg:block">
          <Button
            onClick={addCrypto.onOpen}
            title="Add crypto"
            icon="BsPlus"
            iconLeft
          />
        </div>
        <div className="block lg:hidden">
          <Button
            className="flex h-10 w-10 items-center justify-center rounded-full px-2"
            onClick={addCrypto.onOpen}
            title=""
            iconLeft
            icon="BsPlus"
          />
        </div>
      </div>
      {!trade.data.length && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="h-16 w-20">
            <Image alt="Image of a empty wallet" src={emptywallet} />
          </div>
          <h5 className="mb-2 mt-5 font-bold">Nothing here yet...</h5>
          <p>Add a crypto and start earning</p>
        </div>
      )}

      {!!trade.data.length && (
        <div>
          <TableHoldings
            headerMobile={[]}
            items={trade.data}
            updatedAt={trade.updatedAt}
            header={["#", "Crypto", "Holdings", "Change", "Trade"]}
          />
        </div>
      )}
    </div>
  );
};

export default CoinTrade;
