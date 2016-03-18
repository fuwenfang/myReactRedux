import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './container/App'
import todoApp from './reducer'

let store = createStore(todoApp);

let rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  rootElement
)