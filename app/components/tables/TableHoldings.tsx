import { useState, useMemo } from "react";

import Image from "next/image";
import { Tooltip } from "react-tooltip";

import { Icons } from "@components/Card";
import Button from "@components/buttons/Button";

import { coin, leading } from "@hooks/format";
import type { Coin } from "@utils/getCoins";
import useTradeModal from "@hooks/useTradeModal";
import useTrade from "@hooks/useTrade";

import Table from "./Table";
import ClientCoinVariation from "@components/ClientCoinVariation";
import { twMerge } from "tailwind-merge";

interface TableProps {
  header: string[];
  headerMobile: string[];
  updatedAt?: number;
  items: [{ crypto: Coin; value: string }];
}

const TableHoldings: React.FC<TableProps> = (props) => {
  let { header, headerMobile, updatedAt, items } = props;
  const [mini, setMini] = useState<boolean>(true);

  const toggleMini = () => {
    setMini((p) => !p);
  };

  const result: any[] = useMemo(
    () => items.slice(0, mini ? 4 : undefined),
    [mini, updatedAt]
  );

  const tableModal = useTradeModal();
  const trade = useTrade();

  return (
    <>
      <div className="hidden w-full md:block">
        <Table header={header} hideViewMore updatedAt={updatedAt}>
          <>
            {items?.map((i, index) => (
              <tr
                key={i?.crypto.id_icon}
                className="odd:bg-white even:bg-secondary-100"
              >
                <td className="py-5">
                  <label className={"pl-6 font-normal text-secondary-500"}>
                    {leading(index + 1)}
                  </label>
                </td>
                <td className="py-5">
                  <div className="flex flex-row items-center ">
                    <Image
                      width={32}
                      height={32}
                      alt={`${i?.crypto.name} icon`}
                      src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${i?.crypto?.id_icon?.replaceAll(
                        "-",
                        ""
                      )}.png`}
                    />
                    <p className="ml-4">{i.crypto.name}</p>{" "}
                    <p className="ml-2 text-secondary-500">
                      {i.crypto.asset_id}
                    </p>
                  </div>
                </td>
                <td className="py-5 text-gray">
                  <div className="flex flex-col">
                    <p>
                      {coin((i?.crypto?.price_usd || 0) * parseFloat(i.value))}
                    </p>
                    <div>
                      <small className="text-primary-500">{i?.value}</small>
                      <small className="ml-1 text-primary-500">
                        {i?.crypto?.asset_id}
                      </small>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <ClientCoinVariation name={i?.crypto?.asset_id} />
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <Tooltip
                      place="bottom"
                      className="bg-primary-500 shadow-lg"
                      id="my-tooltip"
                    >
                      <div className="px-4 py-2">Transfer Crypto</div>
                    </Tooltip>
                    <button
                      data-tooltip-id="my-tooltip"
                      onClick={() => {
                        tableModal.onOpen();
                        trade.selectCrypto(index);
                      }}
                    >
                      <Icons.swap />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </>
        </Table>
      </div>

      <div className="grid grid-cols-2 gap-4 md:hidden">
        {result.map((i, index) => (
          <div key={i?.crypto?.asset_id} className="rounded-t-lg shadow-menu">
            <div className="flex flex-row items-center justify-center bg-primary-100 px-5 py-4">
              <Image
                width={32}
                height={32}
                alt={`${i?.crypto.name} icon`}
                src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${i?.crypto?.id_icon?.replaceAll(
                  "-",
                  ""
                )}.png`}
              />
              <p className="ml-4">{i.crypto.name}</p>{" "}
              <p className="ml-2 text-secondary-500">{i.crypto.asset_id}</p>
            </div>
            <div className="rounded-b-lg bg-white p-4">
              <div className="mb-4 flex flex-col">
                <small>Holdings</small>
                <p>{coin((i?.crypto?.price_usd || 0) * parseFloat(i.value))}</p>
                <div>
                  <small className="text-primary-500">{i?.value}</small>
                  <small className="ml-1 text-primary-500">
                    {i?.crypto?.asset_id}
                  </small>
                </div>
              </div>

              <div className="flex flex-col border-t-2 border-t-secondary-200 pt-4">
                <small>Change</small>
                <ClientCoinVariation name={i?.crypto?.asset_id} />
              </div>

              <div className="flex items-center justify-center">
                <Button
                  title="Trade"
                  className="mt-5"
                  onClick={() => {
                    tableModal.onOpen();
                    trade.selectCrypto(index);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={twMerge(
          "mt-5 flex items-center justify-center",
          items.length > 4 ? "flex" : "hidden"
        )}
      >
        <Button
          title={mini ? "View More" : "View Less"}
          icon="BsPlus"
          iconRight
          variant=""
          onClick={toggleMini}
          className="flex items-center justify-center bg-transparent text-primary-500 hover:bg-primary-100"
        />
      </div>
    </>
  );
};

export default TableHoldings;
