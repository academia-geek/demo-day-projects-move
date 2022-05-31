<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
>>>>>>> a9ab9cef309617db56dad65feca6da6e2250e670

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store/store";
import AppRouter from "./routes/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
