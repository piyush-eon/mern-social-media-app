import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen/SignUpScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/signup" component={SignUpScreen} exact />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
