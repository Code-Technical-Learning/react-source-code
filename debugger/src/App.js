import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(prop) {
    super();

    this.state = {
      isSpan: '我是首次展示的值',
    };
  }

  click = () => {
    this.setState({isSpan: '我是 setState 后的值'});
  };

  render() {
    return (
      <div className="App" onClick={this.click}>
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={this.click}
          />

          <span>{this.state.isSpan}</span>

          <FNComponents
            showText={'我是 FNComponents 展示的 Prop 的值'}></FNComponents>
        </header>
      </div>
    );
  }
}

function FNComponents({showText}) {
  return <div className="FNComponents">{showText}</div>;
}

export default App;
