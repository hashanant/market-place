const nf = new Intl.NumberFormat();

export const priceFormatter = (price: number) => {
  return '\u20B9 ' + nf.format(price);
};
