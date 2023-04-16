import CoinVariation from "../CoinVariation";
import type { Coin } from "@utils/getCoins";

const CoinCarrouselItem: React.FC<Coin> = (props) => {
  const { price_usd, asset_id } = props;

  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      <span className="whitespace-nowrap text-sm">{asset_id}</span>
      <span className="whitespace-nowrap text-secondary-800 text-sm">
        R$ {price_usd?.toFixed(2)}
      </span>
      <CoinVariation name={asset_id} />
    </div>
  );
};

export default CoinCarrouselItem;
