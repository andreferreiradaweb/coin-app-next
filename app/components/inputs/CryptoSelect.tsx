import { use } from "react";
import Image from "next/image";

import { TbChevronRight } from "react-icons/tb";
import Select from "./Select";
import { Coin } from "@utils/getCoins";

const fetchData = async () => {
  const res = await fetch("/dashboard/api");
  return res.json();
};

const dataPromise = fetchData();

/* @ts-expect-error Async Server Component */
const CryptoSelect: React.FC<SelectProps> = (props) => {
  const data: Coin[] = use(dataPromise);

  return (
    <Select
      data={data}
      labelKey="name"
      valueKey="asset_id"
      displayValue={(c) => {
        if (c) {
          return c.name + " " + c.asset_id;
        }

        return "";
      }}
      {...props}
    >
      {(data: any, selected: any, active: any) => (
        <div className="flex flex-row items-center">
          <Image
            className="mr-2 h-4 w-4"
            width={16}
            height={16}
            alt={`${data.name} Logo`}
            src={`https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_32/${data?.id_icon?.replaceAll(
              "-",
              ""
            )}.png`}
          />
          <span
            className={`block truncate ${
              selected ? "font-medium" : "font-normal"
            }`}
          >
            {data?.name}
          </span>
          <span
            className={`ml-2 block text-secondary-500 ${
              selected ? "font-medium" : "font-normal"
            }`}
          >
            {data?.asset_id}
          </span>
          <div className="ml-auto">
            <TbChevronRight
              className="h-5 w-5 text-secondary-300"
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </Select>
  );
};

export default CryptoSelect;
