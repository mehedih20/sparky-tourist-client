import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBooking from "./components/AddBooking/AddBooking";
import AddTour from "./components/AddTour/AddTour";
import AllBooking from "./components/AllBooking/AllBooking";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyBooking from "./components/MyBooking/MyBooking";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./Private/PrivateRoute";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/addBooking">
          <AddBooking />
        </PrivateRoute>
        <PrivateRoute path="/addTour">
          <AddTour />
        </PrivateRoute>
        <PrivateRoute path="/myBooking">
          <MyBooking />
        </PrivateRoute>
        <PrivateRoute path="/allBooking">
          <AllBooking />
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
