import "react-tooltip/dist/react-tooltip.css";

import Image from "next/image";
import { BsPlus } from "react-icons/bs";

import ETHGraph from "@components/chart/ETHChart";
import CoinTrade from "@components/cointrade/CoinTrade";
import CoinVariation from "@components/CoinVariation";
import { coin } from "@hooks/format";

import balance from "../../public/images/balance.webp";

export default function Dashboard() {
  return (
    <div className="flex-1 bg-[#F9F9F9] p-6 md:p-12 lg:p-14">
      <div className="mb-8 grid grid-cols-4 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-6 lg:h-28 lg:auto-rows-fr lg:grid-cols-[2fr,280px,280px] xl:grid-cols-[2fr,1fr,1fr]">
        <div className="col-span-4 rounded-lg shadow-md lg:col-span-1">
          <div className="grid h-full grid-cols-2">
            <div className="flex flex-row items-center justify-center gap-x-4 bg-white p-4 md:justify-start md:p-6">
              <div className="h-8 w-8 md:h-16 md:w-16">
                <Image
                  className="h-8 w-8 object-contain md:h-16 md:w-16"
                  alt="Balance Logo"
                  src={balance}
                />
              </div>
              <div className="flex-1">
                <h4 className="hidden whitespace-nowrap md:inline">
                  Balance in US$
                </h4>
                <p className="block md:hidden">
                  Balance <span className="hidden sm:block">in US$</span>
                </p>
                <small className="block text-secondary-500 sm:hidden">
                  in US$
                </small>
                <p className="hidden text-secondary-500 md:block">
                  (approximately)
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center justify-center bg-primary-100 p-2 md:p-4">
              <h3 className="hidden font-bold md:block">{coin(32256.0)}</h3>
              <p className="block font-bold md:hidden">{coin(32256.0)}</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col rounded-lg bg-white p-2 shadow-md md:flex-row md:p-4 lg:col-span-1">
          <div className="mr-2 flex flex-[.3] flex-col">
            <small className="text-secondary-500">Daily Variation</small>
            <div className="mt-2 flex flex-row">
              <Image
                className="mb-1 mr-2 h-6 w-6"
                width={32}
                height={32}
                alt="Ethereum Logo"
                src="https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/604ae4533d9f4ad09a489905cce617c2.png"
              />
              <label className="mr-4">ETH</label>
              <div className="block md:hidden">
                <CoinVariation name="ETH" />
              </div>
            </div>
            <div className="hidden md:block">
              <CoinVariation name="ETH" />
            </div>
          </div>
          <div className="flex-1">
            <ETHGraph />
          </div>
        </div>

        <div className="col-span-2 flex flex-col rounded-lg bg-white shadow-md md:flex-row lg:col-span-1">
          <div className="flex-1 p-2 md:p-4">
            <div className="flex flex-col">
              <label className="font-bold">NFT&apos;s NEWS</label>
              <small className="mb-1 mt-1 leading-4 text-secondary-500 md:mb-3">
                New ElephantX NFT to be lauched!
              </small>
              <a
                href="#"
                className="hidden flex-row items-center text-primary-500 md:flex"
              >
                <span className="mr-1">Read more</span>
                <BsPlus />
              </a>
            </div>
          </div>
          <div className="h-24 bg-[url('/images/elephant.webp')] bg-cover bg-center bg-no-repeat md:h-auto md:flex-1">
            {" "}
          </div>
        </div>
      </div>

      <CoinTrade />
    </div>
  );
}
