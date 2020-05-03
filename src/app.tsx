import React from "react";
import { Component } from "react";
import { Provider } from "mobx-react";

import styled from "styled-components";

import { CoffeeMachineStore } from "./store/CoffeeMachine.store";

import { Machine } from "./components/Machine";
import { Money } from "./components/Money";

const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 95%;
  top: 5%;
  left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export class App extends Component {
  private store: CoffeeMachineStore = new CoffeeMachineStore();

  render() {
    return (
      <Provider store={this.store}>
        <Wrapper>
          <Machine />
          <Money />
        </Wrapper>
      </Provider>
    );
  }
}
