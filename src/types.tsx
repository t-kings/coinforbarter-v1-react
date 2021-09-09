export interface CoinForBarterConfig {
  publicKey: string;
  txRef: string;
  amount: number;
  currency: string;
  redirectUrl?: string;
  /**
   * customer is customer's email
   */
  customer: string;
  customerPhoneNumber?: string;
  customerFullName?: string;
  callback: (data: CallbackType) => void;
  customizations?: Customization;
  /**
   * leave empty if you want to accept all currencies
   */
  currencies: string[];
}

export interface Customization {
  title?: string;
  description?: string;
  logo?: string;
}

type CustomerType = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

export enum CloseType {
  Error = "error",
  Success = "success",
}

export class CustomException {
  name = "CustomException";
  response = {};
  constructor(data: Record<string, any>) {
    this.response = { ...data };
  }
}

export interface BodyType {
  publicKey: string;
  txRef: string;
  amount: number;
  currency: string;
  redirectUrl?: string;
  customer: string;
  customerPhoneNumber?: string;
  customerFullName?: string;
  customizations?: Customization;
}

export enum CoinForBarterStatus {
  Success = "success",
  Error = "error",
}

export type CallbackType = {
  amount?: number;
  amountReceived?: number;
  currency?: string;
  customer?: CustomerType;
  status: CoinForBarterStatus;
  txRef?: string;
  transactionId?: string;
  baseCurrency?: string;
  baseAmount?: number;
  error?: any;
};

export interface ConfigType extends BodyType {
  onSuccess: (data: CallbackType) => void;
  onError: (data: CallbackType) => void;
}

export interface CoinForBarterButtonProps {
  config: CoinForBarterConfig;
  text?: string;
}
