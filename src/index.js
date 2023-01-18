import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CreateForm from './components/form/createForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
      <CreateForm/>
    </Provider>
   
);
