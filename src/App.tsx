import React from "react";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import MapPage from "./pages/MapPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={SignInPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
