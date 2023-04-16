import { use } from "react";
import { CoinVariation } from "@utils/getCoinVariation";

const fetchMap = new Map<string, Promise<any>>();

function queryClient(name: string, query: () => Promise<any>) {
  if (!fetchMap.has(name)) {
    fetchMap.set(name, query());
  }

  return fetchMap.get(name)!;
}

const CoinVariation: React.FC<CoinVariation> = ({ name }) => {
  const data = use(
    queryClient(name, () =>
      fetch(`/dashboard/api/coin/${name}`).then((res) => res.json())
    )
  );

  return (
    <span
      data-price={`${data.variation?.[0]}`}
      className="whitespace-nowrap data-[price='+']:text-tertiary-700 data-[price='-']:text-quartenary-700"
    >
      {data.variation}
    </span>
  );
};

export default CoinVariation;
