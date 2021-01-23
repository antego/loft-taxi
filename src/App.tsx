import React, { useState } from "react";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MapProfilePage from "./pages/MapProfilePage";
import MapOrderPage from "./pages/MapOrderPage";

enum Page {
  SIGN_IN,
  SIGN_UP,
  MAP_ORDER,
  MAP_PROFILE,
}

const App: React.FC<{}> = () => {
  const [page, setPage] = useState<Page>(Page.SIGN_IN);

  switch (page) {
    case Page.SIGN_IN:
      return (
        <SignInPage
          onSignIn={() => setPage(Page.MAP_ORDER)}
          onSignUp={() => setPage(Page.SIGN_UP)}
        />
      );
    case Page.SIGN_UP:
      return (
        <SignUpPage
          onSignIn={() => setPage(Page.MAP_ORDER)}
          onSignUp={() => setPage(Page.SIGN_UP)}
        />
      );
    case Page.MAP_ORDER:
      return (
        <MapOrderPage
          onOrder={() => setPage(Page.MAP_ORDER)}
          onProfile={() => setPage(Page.MAP_PROFILE)}
          onSignOut={() => setPage(Page.SIGN_IN)}
        />
      );
    case Page.MAP_PROFILE:
      return (
        <MapProfilePage
          onOrder={() => setPage(Page.MAP_ORDER)}
          onProfile={() => {}}
          onSignOut={() => setPage(Page.SIGN_IN)}
          onReturnToOrder={() => setPage(Page.MAP_ORDER)}
        />
      );
    default:
      throw Error("Unknown");
  }
};

export default App;
