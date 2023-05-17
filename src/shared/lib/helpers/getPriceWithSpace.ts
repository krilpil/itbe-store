interface IGetPriceWithSpace {
  price: number;
}

const getPriceWithSpace = ({ price = 0 }: IGetPriceWithSpace) => {
  // eslint-disable-next-line security/detect-unsafe-regex
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default getPriceWithSpace;
