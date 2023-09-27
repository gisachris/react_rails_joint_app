import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Greeting from './components/greetings';


function App() {
  return (
    <Routes>
      <Route path='/'/>
      <Route path='/random_greeting' element={<Greeting />}/>
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
