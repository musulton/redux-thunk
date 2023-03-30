import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';

/*
Thunk merupakan sebuah middleware Redux,
apa itu middleware? middleware adalah sebuah kode untuk melakukan penanganan tertentu
yang ditempatkan diantara fungsi yang menerima request dan menghasilkan response
misalnya kalau di backend adalah logging, header authentication, dll.

Thunk adalah sebuah middleware yang memungkinkan kita memanggil action redux
yang mengembalikan function sebagai ganti objek, thunk digunakan untuk menjalankan fungsi sinkron (yaitu fungsi dispatch untuk menyimpan state di redux)
setelah operasi asinkron selesai (fetch API)
contohnya menyimpan data dari API ke dalam store redux
 */
const store = createStore(reducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
