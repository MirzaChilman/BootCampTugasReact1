import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    loading: false,
    warna: 'red',
    isSelected: false
  };

  berubahWarna = () => {};

  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <p
          onClick={this.berubahWarna}
          style={{ backgroundColor: this.state.warna }}>
          {' '}
          Berubah Warna!!!!
        </p>
        {this.state.loading ? (
          this.state.data.map(datum => {
            return <p>{datum.title}</p>;
          })
        ) : (
          <h1>Loading . . . .. . </h1>
        )}
      </div>
    );
  }
}

export default App;

/* <Component1
  data11={this.state.data11}
  data12={this.state.data12}
  data13={this.state.data13}
/>
<Component2 /> */
