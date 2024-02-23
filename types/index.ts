type DefaultInputType = {
  text?: string;
  link?: string;
};

type ImageCardType = {
  photo: string;
  text: string;
};

type PriceCardType = {
  price: string;
  title: string;
  installments?: number;
  best?: boolean;
  off?: number;
};
