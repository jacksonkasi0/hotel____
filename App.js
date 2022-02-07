import React from "react";
import Home from "./components/Home/Home";
import Customer from "./Customer/Customer";
import Gallery from "./components/Gallery/Gallery";
import Nav from "./Nav/Nav";
import Booking from "./components/Booking/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
import userReducer from "./store/reducer/user";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  data: userReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
