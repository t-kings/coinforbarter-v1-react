import { BodyType, CloseType, ConfigType, CustomException } from "./types";
import { settings } from "./config";
const { iframeId } = settings;

class Checkout {
  private iframeId: string = iframeId;
  constructor(private readonly config: ConfigType) {
    this.initialize();
  }

  async initialize() {
    const {
      publicKey,
      txRef,
      amount,
      currency,
      customer,
      customerPhoneNumber,
      customerFullName,
      customizations,
    } = this.config;
    const body: BodyType = {
      publicKey,
      txRef,
      amount,
      currency,
      customer,
      customerPhoneNumber,
      customerFullName,
      customizations,
    };
    this.createIframe(body);
  }

  createIframe(body: BodyType) {
    try {
      const iframe = document.createElement("iframe");
      const form = document.createElement("form");
      form.setAttribute("action", settings.url);

      form.setAttribute("target", this.iframeId);
      form.setAttribute("method", "POST");

      for (const [name, value] of Object.entries(body)) {
        if (name === "currencies") {
          for (let index = 0; index < value.length; index++) {
            const currency = value[index];
            const input = document.createElement("input");
            input.setAttribute("name", `${name}[]`);
            input.setAttribute("value", currency);
            form.append(input);
          }
        } else if (name === "customizations") {
          if (value) {
            for (const [
              customizationName,
              customizationValue,
            ] of Object.entries(value)) {
              const input = document.createElement("input");
              input.setAttribute("name", `${name}[${customizationName}]`);
              input.setAttribute(
                "value",
                typeof customizationValue === "string" ? customizationValue : ""
              );
              form.append(input);
            }
          }
        } else {
          const input = document.createElement("input");
          input.setAttribute("name", name);
          input.setAttribute("value", value);
          form.append(input);
        }
      }
      iframe.setAttribute("src", settings.url);
      iframe.setAttribute("name", this.iframeId);
      iframe.setAttribute("id", this.iframeId);
      iframe.setAttribute(
        "style",
        `
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        display:block;
        width:100%;
        height:100vh;
        background:white;
        border:none;
        border-width:0;
        `
      );

      console.log(document);

      document.body.appendChild(form);
      document.body.appendChild(iframe);
      form.submit();
      form.remove();
      this.checkStatus();
    } catch (error) {}
  }

  checkStatus() {
    window.addEventListener("message", ({ data: { message, value } }) => {
      if (message === "CoinForBarter:inline:response") {
        this.handleResponse(value.status, value.txRef, value.id);
      }
    });
  }

  async handleResponse(status: string, txRef: string, transactionId: string) {
    if (status === "success") {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ publicKey: this.config.publicKey }),
      };

      await fetch(`${settings.verifyUrl}/${transactionId}/verify`, params)
        .then(async (res) => {
          if (!res.ok) {
            throw new CustomException({
              ...(await res.json()),
              status: res.status,
            });
          }
          return res.json();
        })
        .then(({ data }) => {
          this.close(CloseType.Success, {
            data,
            status,
            transactionId,
            txRef,
          });
        })
        .catch((err) => {
          this.close(CloseType.Error, {
            data: { err },
            status,
            transactionId,
            txRef,
          });
        });
    } else {
      this.close(CloseType.Error, {
        status,
        transactionId,
        txRef,
      });
    }
    if (this.config.redirectUrl) {
      return window.open(this.config.redirectUrl);
    }
    return;
  }

  close(status: CloseType, data: Record<string, any>) {
    const iframe = document.querySelector(`#${this.iframeId}`);
    iframe?.remove();
    if (status === CloseType.Success) {
      if (this.config.onSuccess) {
        this.config.onSuccess({
          status: data.status,
          transactionId: data.transactionId,
          txRef: data.txRef,
          amount: data.data.amount,
          amountReceived: data.data?.amountReceived,
          currency: data.data.currency,
          customer: data.data.customerDetails,
          baseCurrency: data.data.baseCurrency,
          baseAmount: data.data.baseAmount,
        });
      }
    }

    if (status === CloseType.Error) {
      if (this.config.onError) {
        this.config.onError({
          status: data.status,
          transactionId: data.transactionId,
          txRef: data.txRef,
          amount: data.data?.amount,
          amountReceived: data.data?.amountReceived,
          currency: data.data?.currency,
          customer: data.data?.customerDetails,
          baseCurrency: data.data?.baseCurrency,
          baseAmount: data.data?.baseAmount,
        });
      }
    }
  }
}

export const CoinForBarterCheckout = (config: ConfigType) => {
  return new Checkout(config);
};
