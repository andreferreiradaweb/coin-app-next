import { cache } from "react";
import { percent } from "@hooks/format";

export interface CoinVariation {
  name: string;
  variation?: string;
  timeStart?: Date;
  timeEnd?: Date;
}

export interface ExchangeRate {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  rate_open: number;
  rate_high: number;
  rate_low: number;
  rate_close: number;
}

export const getCoinVariation = cache(async (coinVariation: CoinVariation) => {
  const { name } = coinVariation;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setHours(0, 0, 0, 0);
  yesterday.setDate(yesterday.getDate() - 2);

  const res: Response = await fetch(
    `https://rest.coinapi.io/v1/exchangerate/${name.toUpperCase()}/USD/history?period_id=1DAY&apikey=${
      process.env.API_KEY
    }&time_start=${yesterday
      .toISOString()
      .replace(".000Z", "")}&time_end=${today
      .toISOString()
      .replace(".000Z", "")}`,
    {
      next: { revalidate: 6000000 },
    }
  );

  if (!res.ok) {
    return {
      name,
      variation: "+0",
    };
  }

  const coinData: ExchangeRate[] = await res.json();

  const variation = percent(
    coinData[0]?.rate_open / coinData[1]?.rate_close / 100
  );

  return {
    name,
    variation,
  };
});

export const getCoinData = cache(async (coinVariation: CoinVariation) => {
  const { name, timeStart = new Date(), timeEnd = new Date() } = coinVariation;

  const res: Response = await fetch(
    `https://rest.coinapi.io/v1/exchangerate/${name}/USD/history?period_id=1DAY&apikey=${
      process.env.API_KEY
    }&time_start=${timeStart
      .toISOString()
      .replace(".000Z", "")}&time_end=${timeEnd
      .toISOString()
      .replace(".000Z", "")}`,
    {
      next: { revalidate: 6000000 },
    }
  );

  if (!res.ok) {
    return [
      {
        time_period_start: "2023-04-06T00:00:00.0000000Z",
        time_period_end: "2023-04-07T00:00:00.0000000Z",
        time_open: "2023-04-06T03:00:00.0000000Z",
        time_close: "2023-04-06T23:59:00.0000000Z",
        rate_open: 1894.4302274863821,
        rate_high: 1900.1100074903172,
        rate_low: 1857.4495932686038,
        rate_close: 1872.8119057736183,
      },
      {
        time_period_start: "2023-04-07T00:00:00.0000000Z",
        time_period_end: "2023-04-08T00:00:00.0000000Z",
        time_open: "2023-04-07T00:00:00.0000000Z",
        time_close: "2023-04-07T23:59:00.0000000Z",
        rate_open: 1873.1074884586542,
        rate_high: 1882.7604086118,
        rate_low: 1844.711399752973,
        rate_close: 1864.9324349192411,
      },
      {
        time_period_start: "2023-04-08T00:00:00.0000000Z",
        time_period_end: "2023-04-09T00:00:00.0000000Z",
        time_open: "2023-04-08T00:00:00.0000000Z",
        time_close: "2023-04-08T23:59:00.0000000Z",
        rate_open: 1864.915039093664,
        rate_high: 1879.5351854530115,
        rate_low: 1848.5667477301592,
        rate_close: 1849.4858911013594,
      },
      {
        time_period_start: "2023-04-09T00:00:00.0000000Z",
        time_period_end: "2023-04-10T00:00:00.0000000Z",
        time_open: "2023-04-09T00:00:00.0000000Z",
        time_close: "2023-04-09T23:59:00.0000000Z",
        rate_open: 1849.7155242558943,
        rate_high: 1873.6576388525702,
        rate_low: 1829.1524349738802,
        rate_close: 1859.6905730769136,
      },
      {
        time_period_start: "2023-04-10T00:00:00.0000000Z",
        time_period_end: "2023-04-11T00:00:00.0000000Z",
        time_open: "2023-04-10T00:00:00.0000000Z",
        time_close: "2023-04-10T23:59:00.0000000Z",
        rate_open: 1859.888313414927,
        rate_high: 1918.1697153307837,
        rate_low: 1848.9285622401028,
        rate_close: 1911.5615454248878,
      },
      {
        time_period_start: "2023-04-11T00:00:00.0000000Z",
        time_period_end: "2023-04-12T00:00:00.0000000Z",
        time_open: "2023-04-11T00:00:00.0000000Z",
        time_close: "2023-04-11T23:59:00.0000000Z",
        rate_open: 1911.2506653638206,
        rate_high: 1936.593004325148,
        rate_low: 1885.852385193616,
        rate_close: 1891.9726550177668,
      },
      {
        time_period_start: "2023-04-12T00:00:00.0000000Z",
        time_period_end: "2023-04-13T00:00:00.0000000Z",
        time_open: "2023-04-12T00:00:00.0000000Z",
        time_close: "2023-04-12T23:59:00.0000000Z",
        rate_open: 1891.6118734439992,
        rate_high: 1929.675539778343,
        rate_low: 1860.2297294926227,
        rate_close: 1917.9029696790076,
      },
      {
        time_period_start: "2023-04-13T00:00:00.0000000Z",
        time_period_end: "2023-04-14T00:00:00.0000000Z",
        time_open: "2023-04-13T00:00:00.0000000Z",
        time_close: "2023-04-13T02:59:00.0000000Z",
        rate_open: 1918.533842423338,
        rate_high: 1921.439983995899,
        rate_low: 1901.5717789650291,
        rate_close: 1908.4736021025662,
      },
    ];
  }

  const coinData: ExchangeRate[] = await res.json();
  return coinData;
});
