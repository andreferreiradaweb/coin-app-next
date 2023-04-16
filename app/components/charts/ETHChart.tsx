import Graph from "./Chart";

import { getCoinData } from "@utils/getCoinVariation";

/* @ts-expect-error Async Server Component */
const ETHChart: React.FC<LineProps> = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastWeek = new Date(today);
  lastWeek.setHours(0, 0, 0, 0);
  lastWeek.setDate(lastWeek.getDate() - 7);

  const variation = await getCoinData({
    name: "ETH",
    timeStart: lastWeek,
    timeEnd: today,
  });

  return <Graph variation={variation} />;
};

export default ETHChart;
