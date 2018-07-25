import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics/rootEpic';

const epicMiddleware = createEpicMiddleware();

function reducer(state = {}, action) {
  console.log(action)
  return {}
}


const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware)
);


epicMiddleware.run(rootEpic)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
