import React from "react";
import { action } from "mobx";
import { observer, inject } from "mobx-react";

import styled, { css } from "styled-components";

import {
  CoffeeMachineStore,
  TDepositType,
  TCoinType,
} from "../store/CoffeeMachine.store";

export interface ICoinProps {
  store?: CoffeeMachineStore;
  type: TDepositType;
  value: TCoinType;
  amount: number;
}

const CoinWrapper = styled.div<{ type: TDepositType }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 12px;

  box-shadow: 0 0 5px 0.05px #ffc600;
  border-radius: 50px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;

  width: ${(props) => (props.type === "user" ? "70px" : "50px")};
  height: ${(props) => (props.type === "user" ? "70px" : "50px")};

  background-color: #ffffff;

  ${(props) =>
    props.type === "userDeposit"
      ? css`
          width: 55px;
          height: 55px;
          cursor: pointer;
          transition: background-color 0.5s;
          font-size: 20px;

          background: linear-gradient(
            to top,
            RGBA(255, 198, 0, 1),
            RGBA(255, 255, 255, 0),
            RGBA(255, 255, 255, 0)
          );

          > p {
            font-size: 18px;
            bottom: -50px;
          }

          &:hover {
            background-color: RGBA(255, 198, 0, 0.4);
          }
        `
      : css`
          width: 45px;
          height: 45px;
          font-size: 17px;
          border: 1px solid #ffc600;

          > p {
            font-size: 15px;
            bottom: -45px;
          }
        `}
`;

const Value = styled.p``;

const Amount = styled.p`
  position: absolute;
  color: #454545;
  font-weight: 700;
`;

@inject("store")
@observer
export class Coin extends React.Component<ICoinProps> {
  @action.bound
  private onClickCoin() {
    const { value, amount, store } = this.props;

    if (amount > 0) {
      store.addCoin(value);
    }
  }

  render() {
    const { onClickCoin, props } = this;
    const { value, amount, type } = props;

    return (
      <CoinWrapper type={type} onClick={onClickCoin}>
        <Value>{value}</Value>
        <Amount>{amount}</Amount>
      </CoinWrapper>
    );
  }
}
