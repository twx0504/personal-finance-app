const formatMoney = (amountCents) => {
  if (!Number.isFinite(amountCents)) {
    return;
  }
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
  })
    .format(Math.round(amountCents) / 100)
    .replace(/\s/g, "");
};

export { formatMoney };
