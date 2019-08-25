import React, { Component } from 'react';

import Loader from './Loader/Loader';

import { AppProps, AppState } from './App.h';
import { Wrapper, InputStyled, ButtonStyled } from './App.styled';

class App extends Component<AppProps, AppState> {
  constructor(props: Readonly<AppProps>) {
    super(props);

    this.state = {
      animating: false,
      inputValue: 0,
      percentValue: 0,
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const cleanValue = +value.replace(/\D/g, value) || 0;
    const inputValue = cleanValue > 100 ? 100 : cleanValue < 0 ? 0 : cleanValue;

    this.setState({
      inputValue
    })
  }

  handleSetPercentValue = () => {
    this.setState(state => ({
      animating: true,
      percentValue: state.inputValue
    }),
    () => setTimeout(() => this.setState({ animating: false }), 1000));
  }

  render() {
    const { inputValue, percentValue, animating } = this.state;
    return (
      <Wrapper>
        <Loader
          percent={percentValue / 100}
          size={200}
          backBarWidth={3}
          progressBarWidth={6}
          backBarColor="#e6e6e6"
          progressBarColor="#f4b94c123"
        />
        <InputStyled
          value={`${inputValue}`}
          onChange={this.handleInputChange}
        />
        <ButtonStyled
          onClick={this.handleSetPercentValue}
          disabled={animating}
        >
          Применить
        </ButtonStyled>
      </Wrapper>
    );
  }
}

export default App;
