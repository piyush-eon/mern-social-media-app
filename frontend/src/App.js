import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
