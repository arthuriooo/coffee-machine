import React from "react";
import { Component } from "react";
import { observer, inject } from "mobx-react";

import styled, { css } from "styled-components";

import { CoffeeMachineStore } from "../store/CoffeeMachine.store";
import { action } from "mobx";

interface IMachineProps {
  store?: CoffeeMachineStore;
}

const Wrapper = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
`;

const DrinksPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DrinksList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const Drink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > p {
    font-size: 12px;
    font-weight: 800;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
  }

  > img {
    width: 45px;
    height: 45px;
  }
`;

const Price = styled.span`
  text-transform: lowercase;
  font-size: 14px;
  background-color: #1d1d1d;
  margin-left: 7px;
  padding: 5px 10px;
  border-radius: 10px;
  color: #ffffff;
`;

const CoffeeMachine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #07070c;
`;

const MachineButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const AmountLeft = styled.p`
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  color: #eee7e1;
`;

const Button = styled.div<{ available: boolean }>`
  width: 50px;
  height: 50px;
  background-color: #eee7e1;
  padding: 15px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.4s;

  ${(props) =>
    props.available
      ? css`
          border: 3px solid #00620a;
          box-shadow: 0 0 30px 1px #00620a;
        `
      : css`
          border: 3px solid #810000;
          box-shadow: 0 0 30px 1px #810000;
        `};

  &:hover {
    background-color: #be8f64;
  }

  > img {
    width: 50px;
    height: 50px;
  }
`;

const MachineImage = styled.img`
  width: 100%;
  margin-top: 20px;
  border-top: 3px solid #bb936c;
`;

const Hint = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;

  > p {
    display: inline-block;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    padding: 10px 60px;
    border-radius: 15px;
    border: 2px solid RGBA(190, 143, 100, 1);
    background-color: RGBA(7, 7, 12, 0.7);
    color: #ffffff;
  }
`;

const Message = styled(Hint)<{ successful: boolean }>`
  bottom: 30%;

  > P {
    font-size: 14px;
    padding: 10px 30px;
    border-radius: 15px;
    border: ${(props) =>
      props.successful ? "3px solid #00620A" : "3px solid #810000"};
    background-color: RGBA(7, 7, 12, 0.7);
    color: #ffffff;
  }
`;

const Availability = styled.p<{ available: boolean }>`
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  bottom: -40px;
  color: ${(props) => (props.available ? "#1B751E" : "#810000")};
`;

@inject("store")
@observer
export class Machine extends Component<IMachineProps> {
  @action.bound
  private onClickDrink(evt: React.MouseEvent<HTMLDivElement>) {
    const { drink } = evt.currentTarget.dataset;

    this.props.store.getDrink(drink);
  }

  render() {
    const { onClickDrink, props } = this;
    const { drinks, insertedSum, buttonPressed } = props.store;

    return (
      <Wrapper>
        <DrinksPrice>
          <Title>Стоимость напитков:</Title>
          <DrinksList>
            {Object.keys(drinks).map((drink) => (
              <Drink key={drink}>
                <img src={drinks[drink].link} />
                <p>
                  {drinks[drink].name}
                  <Price>{drinks[drink].price}</Price>
                </p>
              </Drink>
            ))}
          </DrinksList>
        </DrinksPrice>
        <CoffeeMachine>
          <MachineButtons>
            {Object.keys(drinks).map((drink) => {
              const available = insertedSum >= drinks[drink].price;

              return (
                <div key={drink} data-drink={drink} onClick={onClickDrink}>
                  <AmountLeft>{drinks[drink].left}</AmountLeft>
                  <Button available={available}>
                    <img src={drinks[drink].link} />
                  </Button>
                  <Availability available={available}>
                    {available ? "Доступно" : null}
                  </Availability>
                </div>
              );
            })}
          </MachineButtons>
          <MachineImage src={`https://i.ibb.co/brLqCLx/coffee-machine.png`} />
          {buttonPressed ? (
            <Message successful={buttonPressed.successful}>
              <p>
                {buttonPressed.successful
                  ? `Спасибо! Вами приобретен ${buttonPressed.drink}`
                  : `Недостаточно средств: ${buttonPressed.price} р.`}
              </p>
            </Message>
          ) : null}
          <Hint>
            <p>
              {insertedSum > 0
                ? "Выберите напиток"
                : "Добавьте монеты в кофемашину"}
            </p>
          </Hint>
        </CoffeeMachine>
      </Wrapper>
    );
  }
}
