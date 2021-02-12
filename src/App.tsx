import React, { useState } from "react";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import MapPage from "./pages/MapPage";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import AuthContext from "./components/AuthContext";

const App: React.FC<{}> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUpPage} />
          <Route
            path="/map"
            render={() => (isLoggedIn ? <MapPage /> : <Redirect to="/" />)}
          />
          <Route
            path="/profile"
            render={() => (isLoggedIn ? <ProfilePage /> : <Redirect to="/" />)}
          />
          <Route path="/" component={SignInPage} exact />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
