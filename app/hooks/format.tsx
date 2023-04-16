const coin = (value: number = 0) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
  }).format(value);

const percent = (value: number = 0) =>
  new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "always",
  }).format(value);

const leading = (value: number = 0) =>
  value.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

export { coin, percent, leading };
