import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';

import Hello from './Hello';
import FormPractice from './FormPractice';
import PercentileCards from './PercentileCards';
import Sidebar from './Sidebar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Sidebar} />
          <Route exact path="/hello" component={Hello} />
          <Route exact path="/form" component={FormPractice} />
          <Route exact path="/percent" component={PercentileCards} />
        </div>
      </BrowserRouter>
    );
  }
}

import reducers from './reducers';
const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
