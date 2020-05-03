import React from "react";
import { Component } from "react";
import { observer, inject } from "mobx-react";

import styled from "styled-components";

import { CoffeeMachineStore, TCoinType } from "../store/CoffeeMachine.store";

import { Coin } from "./Coin";
import { action } from "mobx";

interface IMoneyProps {
  store?: CoffeeMachineStore;
}

const Wrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;

  > div {
    height: 200px;
    margin-bottom: 20px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: #07070c;

  > span {
    text-transform: lowercase;
    color: #5e5e5e;
  }
`;

const Button = styled.span`
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
  border-radius: 20px;
  border: 2px solid #ffc600;
  padding: 10px 30px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: RGBA(255, 198, 0, 0.4);
  }
`;

const CoinsList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

@inject("store")
@observer
export class Money extends Component<IMoneyProps> {
  @action.bound
  private onClickChange() {
    this.props.store.getChange();
  }

  render() {
    const { onClickChange, props } = this;
    const { userDeposit, machineDeposit, insertedSum } = props.store;

    return (
      <Wrapper>
        <div>
          <Title>
            Внесенная сумма: <span>{insertedSum} р.</span>
          </Title>

          {insertedSum > 0 ? (
            <Button onClick={onClickChange}>Выдать сдачу</Button>
          ) : null}
        </div>
        <div>
          <Title>Ваш депозит:</Title>
          <CoinsList>
            {Object.keys(userDeposit).map((coinNumber) => (
              <Coin
                key={`user ${coinNumber}`}
                type={"userDeposit"}
                value={+coinNumber as TCoinType}
                amount={userDeposit[coinNumber]}
              />
            ))}
          </CoinsList>
        </div>
        <div>
          <Title>Депозит кофемашины:</Title>
          <CoinsList>
            {Object.keys(userDeposit).map((coinNumber) => (
              <Coin
                key={`machine ${coinNumber}`}
                type={"machineDeposit"}
                value={+coinNumber as TCoinType}
                amount={machineDeposit[coinNumber]}
              />
            ))}
          </CoinsList>
        </div>
      </Wrapper>
    );
  }
}
