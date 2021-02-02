import React, { useState } from "react";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import MapPage from "./pages/MapPage";

enum Page {
  SIGN_IN,
  SIGN_UP,
  MAP,
  PROFILE,
}

const App: React.FC<{}> = () => {
  const [page, setPage] = useState<Page>(Page.SIGN_IN);

  switch (page) {
    case Page.SIGN_IN:
      return (
        <SignInPage
          onSignIn={() => setPage(Page.MAP)}
          onSignUp={() => setPage(Page.SIGN_UP)}
        />
      );
    case Page.SIGN_UP:
      return (
        <SignUpPage
          onSignIn={() => setPage(Page.SIGN_IN)}
          onSignUp={() => setPage(Page.MAP)}
        />
      );
    case Page.MAP:
      return (
        <MapPage
          onMap={() => setPage(Page.MAP)}
          onProfile={() => setPage(Page.PROFILE)}
          onSignOut={() => setPage(Page.SIGN_IN)}
        />
      );
    case Page.PROFILE:
      return (
        <ProfilePage
          onMap={() => setPage(Page.MAP)}
          onProfile={() => {}}
          onSignOut={() => setPage(Page.SIGN_IN)}
          onReturnToMap={() => setPage(Page.MAP)}
        />
      );
    default:
      throw Error("Unknown");
  }
};

export default App;
