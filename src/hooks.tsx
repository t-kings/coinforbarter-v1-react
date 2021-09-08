import { CoinForBarterCheckout } from './CoinForBarterCheckout';
import { CoinForBarterConfig } from './types';

export const useCoinForBarter = (config: CoinForBarterConfig) => {
  const pay = () => {
    CoinForBarterCheckout({
      ...config,
      onSuccess: config.callback,
      onError: config.callback,
    });
  };

  return pay;
};
