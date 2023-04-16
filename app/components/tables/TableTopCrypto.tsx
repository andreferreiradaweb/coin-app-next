import Image from "next/image";
import { HiChevronUp } from "react-icons/hi";

import Button from "@components/buttons/Button";
import Disclosure from "@components/Disclosure";

import { coin, leading } from "@hooks/format";
import type { Coin } from "@utils/getCoins";
import { getCoins } from "@utils/getCoins";

import CoinVariation from "../CoinVariation";
import Table from "./Table";

interface TableProps {
  header: string[];
  headerMobile: string[];
  items?: Coin[];
}

/* @ts-expect-error Async Server Component */
const TableTopCrypto: React.FC<TableProps> = async (props) => {
  let { header, headerMobile, items } = props;

  if (!items) {
    items = await getCoins();
  }

  return (
    <>
      <div className="hidden w-full sm:block">
        <Table header={header}>
          <>
            {items?.map((i, index) => (
              <tr
                key={i?.asset_id}
                className="odd:bg-white even:bg-secondary-100"
              >
                <td className="py-5">
                  <label className={"pl-6 font-normal text-secondary-500"}>
                    {leading(index + 1)}
                  </label>
                </td>
                <td className="flex flex-row items-center py-5">
                  <Image
                    width={32}
                    height={32}
                    alt={`${i?.name} icon`}
                    src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${i?.id_icon?.replaceAll(
                      "-",
                      ""
                    )}.png`}
                  />
                  <p className="ml-4">{i.name}</p>{" "}
                  <p className="ml-2 text-secondary-500">{i.asset_id}</p>
                </td>
                <td className="py-5">{coin(i?.price_usd)}</td>
                <td className="py-5">
                  <CoinVariation name={i?.asset_id} />
                </td>
                <td>
                  <div>
                    <Button
                      title="Buy"
                      type="button"
                      className="ml-auto mr-6 h-8 bg-tertiary-700 hover:bg-tertiary-800"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </>
        </Table>
      </div>
      <div className="block sm:hidden">
        <Table header={headerMobile}>
          <>
            {items?.map((i) => (
              <Disclosure
                key={i?.asset_id}
                className="group odd:bg-white even:bg-secondary-100"
                bodyContent={
                  <>
                    <td
                      className="border-t border-t-secondary-200 py-4"
                      colSpan={2}
                    >
                      <div className="grid grid-rows-2 px-4">
                        <div className="flex items-center justify-between">
                          <p>Price</p>
                          <p>{coin(i?.price_usd)}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p>Change</p>
                          <CoinVariation name={i?.asset_id} />
                        </div>
                      </div>
                    </td>
                  </>
                }
              >
                <>
                  <td className="flex flex-row items-center px-4 py-5">
                    <Image
                      width={32}
                      height={32}
                      alt={`${i?.name} icon`}
                      src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${i?.id_icon?.replaceAll(
                        "-",
                        ""
                      )}.png`}
                    />
                    <p className="ml-4">{i.name}</p>{" "}
                    <p className="ml-2 text-secondary-500">{i.asset_id}</p>
                  </td>
                  <td className="py-5 pr-2">
                    <div>
                      <HiChevronUp className="ml-auto h-8 w-8 text-primary-500 transition-all hover:text-primary-600 group-data-[headlessui-state='open']:rotate-180" />
                    </div>
                  </td>
                </>
              </Disclosure>
            ))}
          </>
        </Table>
      </div>
    </>
  );
};

export default TableTopCrypto;
