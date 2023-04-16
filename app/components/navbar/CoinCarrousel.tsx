import "server-only";

import CoinCarrouselItem from "./CoinCarrouseltem";
import { getCoins } from "@utils/getCoins";

/* @ts-expect-error Async Server Component */
const CoinCarrousel: React.FC = async ({}) => {
  const coins = await getCoins();

  return (
    <div className="flex animate-scrolling-left flex-row gap-x-2 md:max-w-xs">
      {coins.map((c) => (
        <div key={c.name}>
          <CoinCarrouselItem {...c} />
        </div>
      ))}
      <div aria-hidden="true" className="flex flex-row gap-x-2">
        {coins.map((c) => (
          <div key={c.name}>
            <CoinCarrouselItem {...c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCarrousel;
