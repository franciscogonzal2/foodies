import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/js/reducer';
import thunk from 'redux-thunk';

class Foodies extends Component {
  renderApp() {
    let store = null;
    const middleware = applyMiddleware(thunk/*, logger*/);
    store = createStore(
      rootReducer,
      middleware
    );
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
  render() {
    return (
      this.renderApp()
    );
  }
}
export default Foodies;
const wrapper = document.getElementById("root");
ReactDOM.render(<Foodies />, wrapper) 
