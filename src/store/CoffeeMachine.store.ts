import { observable, action } from "mobx";

export type TDepositType = "userDeposit" | "machineDeposit";
export type TCoinType = 1 | 2 | 5 | 10;
export type TDrinkName = "Чай" | "Кофе" | "Кофе с молоком" | "Сок";

export interface IDrink {
  name: TDrinkName;
  price: string;
  left: number;
  link: string;
}

export interface IDrinkList {
  tea: IDrink;
  coffee: IDrink;
  coffeeMilk: IDrink;
  juice: IDrink;
}

export interface ICoin {
  value: TCoinType;
  amount: number;
}

export interface IDeposit {
  1: number;
  2: number;
  5: number;
  10: number;
}

export class CoffeeMachineStore {
  @observable
  public userDeposit: IDeposit = {
    1: 10,
    2: 30,
    5: 20,
    10: 15,
  };

  @observable
  public machineDeposit: IDeposit = {
    1: 100,
    2: 100,
    5: 100,
    10: 100,
  };

  @observable
  public drinks: IDrinkList = {
    tea: {
      name: "Чай",
      price: "13",
      left: 10,
      link: "https://i.ibb.co/FVQj1W2/tea.png",
    },
    coffee: {
      name: "Кофе",
      price: "18",
      left: 20,
      link: "https://i.ibb.co/7RYW2VQ/coffee.png",
    },
    coffeeMilk: {
      name: "Кофе с молоком",
      price: "21",
      left: 20,
      link: "https://i.ibb.co/N1NKRzj/coffee-Milk.png",
    },
    juice: {
      name: "Сок",
      price: "35",
      left: 15,
      link: "https://i.ibb.co/9mXG3bN/juice.png",
    },
  };

  @observable
  public insertedSum: number = 0;

  @observable
  public buttonPressed: {
    successful: boolean;
    drink: TDrinkName;
    price: number;
  } = undefined;

  @action.bound
  public addCoin(value: TCoinType) {
    this.insertedSum += value;
    this.updateDeposit("machineDeposit", value, "add");
    this.updateDeposit("userDeposit", value, "substract");
  }

  @action.bound
  private updateDeposit(
    type: TDepositType,
    value: TCoinType,
    method: "add" | "substract",
    amount?: number
  ) {
    if (amount === undefined) {
      amount = 1;
    }
    this[type][value] += method === "add" ? amount : -amount;
  }

  @action.bound
  public getChange(values: number[] = [10, 5, 2, 1]) {
    const { updateDeposit, insertedSum, getChange } = this;

    const value = values[0];
    const optimal = Math.floor(insertedSum / value);

    updateDeposit("machineDeposit", value as TCoinType, "substract", optimal);
    updateDeposit("userDeposit", value as TCoinType, "add", optimal);
    this.insertedSum -= optimal * value;

    if (insertedSum > 0 && values.length > 1) {
      getChange(values.slice(1));
    } else {
      return;
    }
  }

  @action.bound
  public getDrink(drink: string) {
    const { insertedSum, drinks, hideMessage } = this;
    const { price, name } = drinks[drink];

    if (price <= insertedSum) {
      this.buttonPressed = {
        successful: true,
        drink: name,
        price,
      };
      drinks[drink].left--;
      this.insertedSum -= price;
      hideMessage();
    } else {
      this.buttonPressed = {
        successful: false,
        drink: name,
        price,
      };
      hideMessage();
    }
  }

  @action.bound
  private hideMessage() {
    setTimeout(() => {
      this.buttonPressed = undefined;
    }, 5000);
  }
}

export const coffeeMachineStore = new CoffeeMachineStore();
