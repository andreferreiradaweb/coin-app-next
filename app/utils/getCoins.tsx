import { cache } from "react";

const initialState: Coin[] = [
  {
    asset_id: "BTC",
    name: "Bitcoin",
    type_is_crypto: 1,
    data_quote_start: "2014-02-24T17:43:05.0000000Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2014-02-24T17:43:05.0000000Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2010-07-17T23:09:17.0000000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 145979,
    volume_1hrs_usd: 5144538197347.65,
    volume_1day_usd: 116778915848128.98,
    volume_1mth_usd: 14364145560016906,
    price_usd: 30392.572625088716,
    id_icon: "4caf2b16-a017-4e26-a348-2cea69c34cba",
    data_start: "2010-07-17",
    data_end: "2023-04-13",
  },
  {
    asset_id: "LTC",
    name: "Litecoin",
    type_is_crypto: 1,
    data_quote_start: "2014-04-20T15:06:34.0000000Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2014-04-20T15:06:34.0000000Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2013-05-19T15:23:45.0000000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 4990,
    volume_1hrs_usd: 3235552791.28,
    volume_1day_usd: 2230905932498.94,
    volume_1mth_usd: 12815061582707.12,
    price_usd: 94.03004874404051,
    id_icon: "a201762f-1499-41ef-9b84-e0742cd00e48",
    data_start: "2013-05-19",
    data_end: "2023-04-13",
  },
  {
    asset_id: "XRP",
    name: "Ripple",
    type_is_crypto: 1,
    data_quote_start: "2014-07-31T13:05:46.0000000Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2014-07-31T13:05:46.0000000Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2013-11-25T11:54:57.9270000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 6532,
    volume_1hrs_usd: 77578491.27,
    volume_1day_usd: 2087834317.92,
    volume_1mth_usd: 137800091309.72,
    price_usd: 0.5096034463408289,
    id_icon: "ba90bcb0-cafb-4801-ac5d-d310f47d6411",
    data_start: "2013-11-25",
    data_end: "2023-04-13",
  },
  {
    asset_id: "DOGE",
    name: "DogeCoin",
    type_is_crypto: 1,
    data_quote_start: "2014-07-31T13:05:46.0000000Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2014-07-31T13:05:46.0000000Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2014-02-21T05:16:16.8330000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 5358,
    volume_1hrs_usd: 1688443047.5,
    volume_1day_usd: 37514710059.77,
    volume_1mth_usd: 34437271168546.48,
    price_usd: 0.08698372318648091,
    id_icon: "63e240f3-047f-41c7-9179-6784bc719f63",
    data_start: "2014-02-21",
    data_end: "2023-04-13",
  },
  {
    asset_id: "ETH",
    name: "Ethereum",
    type_is_crypto: 1,
    data_quote_start: "2015-08-07T14:50:38.1774950Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2015-08-07T14:50:38.1774950Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2015-08-07T15:21:48.1062520Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 116519,
    volume_1hrs_usd: 574576056434.5,
    volume_1day_usd: 28159907555016.42,
    volume_1mth_usd: 1681411973636309.8,
    price_usd: 1998.0894841119302,
    id_icon: "604ae453-3d9f-4ad0-9a48-9905cce617c2",
    data_start: "2015-08-07",
    data_end: "2023-04-13",
  },
  {
    asset_id: "XMR",
    name: "Monero",
    type_is_crypto: 1,
    data_quote_start: "2016-06-12T11:53:38.1680117Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2016-06-12T11:53:38.1680117Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2016-05-29T15:06:50.0000000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 776,
    volume_1hrs_usd: 13861697.06,
    volume_1day_usd: 300076412.4,
    volume_1mth_usd: 8555811618.67,
    price_usd: 163.0506271776328,
    id_icon: "e342d99d-4648-423e-9fb5-f68785dd2adf",
    data_start: "2016-05-29",
    data_end: "2023-04-13",
  },
  {
    asset_id: "ETC",
    name: "Ethereum Classic",
    type_is_crypto: 1,
    data_quote_start: "2016-07-24T04:14:11.6591746Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2016-07-24T04:14:11.6591746Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2016-07-24T15:34:44.0000000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 1441,
    volume_1hrs_usd: 54742520.03,
    volume_1day_usd: 1606959535.75,
    volume_1mth_usd: 27985826804.69,
    price_usd: 22.26721454273043,
    id_icon: "05628752-3f59-423e-a1e8-7967e39dfa03",
    data_start: "2016-07-24",
    data_end: "2023-04-13",
  },
  {
    asset_id: "DOT",
    name: "Polkadot",
    type_is_crypto: 1,
    data_quote_start: "2017-03-18T22:53:47.4297547Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2017-03-18T22:53:47.4297547Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2017-02-19T03:13:02.0000000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 1199,
    volume_1hrs_usd: 23021775.35,
    volume_1day_usd: 469326597.76,
    volume_1mth_usd: 15036095223.49,
    price_usd: 6.562438993276584,
    id_icon: "b9afd327-327a-435c-8044-8040e8d4a2eb",
    data_start: "2017-02-19",
    data_end: "2023-04-13",
  },
  {
    asset_id: "ADA",
    name: "Cardano",
    type_is_crypto: 1,
    data_quote_start: "2017-09-29T07:11:06.6463948Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2017-09-29T07:11:06.6463948Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2017-10-01T20:08:31.0000000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 865,
    volume_1hrs_usd: 119608625.65,
    volume_1day_usd: 980572016.12,
    volume_1mth_usd: 30514805004.25,
    price_usd: 0.4127742077094155,
    id_icon: "2701173b-1b77-40f2-8693-9659359e225c",
    data_start: "2017-09-29",
    data_end: "2023-04-13",
  },
  {
    asset_id: "THETA",
    name: "Theta Token",
    type_is_crypto: 1,
    data_quote_start: "2018-01-17T20:09:54.7386886Z",
    data_quote_end: "2023-04-13T00:00:00.0000000Z",
    data_orderbook_start: "2018-01-17T20:09:54.7386886Z",
    data_orderbook_end: "2023-04-13T00:00:00.0000000Z",
    data_trade_start: "2018-01-17T18:25:20.0000000Z",
    data_trade_end: "2023-04-13T00:00:00.0000000Z",
    data_symbols_count: 161,
    volume_1hrs_usd: 8880782.14,
    volume_1day_usd: 172075321.88,
    volume_1mth_usd: 5310710395.6,
    price_usd: 1.0674132208574076,
    id_icon: "b51a348f-d41c-4dfe-b74e-90f2cf785167",
    data_start: "2018-01-17",
    data_end: "2023-04-13",
  },
];

export interface Coin {
  asset_id: string;
  name: string;
  type_is_crypto?: number;
  data_quote_start?: string;
  data_quote_end?: string;
  data_orderbook_start?: string;
  data_orderbook_end?: string;
  data_trade_start?: string;
  data_trade_end?: string;
  data_symbols_count?: number;
  volume_1hrs_usd?: number;
  volume_1day_usd?: number;
  volume_1mth_usd?: number;
  price_usd?: number;
  id_icon?: string;
  data_start?: string;
  data_end?: string;
  variation?: string;
}

export const getCoins = cache(async () => {
  const res: Response = await fetch(
    `https://rest.coinapi.io/v1/assets?filter_asset_id=${process.env.ASSETS_ID}&apikey=${process.env.API_KEY}`,
    {
      next: { revalidate: 6000000 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return await Promise.resolve(initialState);
  }

  const coins: Promise<Coin[]> = await res.json();

  if (!Array.isArray(coins)) {
    return [];
  }

  return coins;
});
