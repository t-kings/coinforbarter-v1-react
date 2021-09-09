import { CoinForBarterCheckout } from "./CoinForBarterCheckout";
import { CoinForBarterConfig, CoinForBarterStatus } from "./types";

export const useCoinForBarter = (config: CoinForBarterConfig) => {
  const pay = () => {
    try {
      CoinForBarterCheckout({
        ...config,
        onSuccess: config.callback,
        onError: config.callback,
      });
    } catch (error) {
      config.callback({
        status: CoinForBarterStatus.Error,
        error,
      });
    }
  };

  return pay;
};
