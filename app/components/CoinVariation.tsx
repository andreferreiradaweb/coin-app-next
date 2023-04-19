import { CoinVariation, getCoinVariation } from "@utils/getCoinVariation";

/* @ts-expect-error Async Server Component */
const CoinVariation: React.FC<CoinVariation> = async (props) => {
  const { variation } = await getCoinVariation(props);

  return (
    <span
      data-price={`${variation[0]}`}
      className="whitespace-nowrap data-[price='+']:text-tertiary-700 data-[price='-']:text-quartenary-700 text-xs md:text-base"
    >
      {variation}
    </span>
  );
};

export default CoinVariation;
