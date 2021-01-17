import React, { useState } from "react";
import "./App.css";
import SignInDialog from "./components/SignInDialog";
import SignUpDialog from "./components/SignUpDialog";
import SignInPage from "./pages/SignInPage";
import MapPage from "./pages/MapPage";
import Header from "./components/Header";
import OrderDialog from "./components/OrderDialog";
import OrderConfirmationDialog from "./components/OrderConfirmationDialog";
import ProfileDialog from "./components/ProfileDialog";
import ProfileConfirmationDialog from "./components/ProfileConfirmationDialog";

enum Page {
  SIGN_IN,
  SIGN_UP,
  MAP_ORDER,
  MAP_ORDER_CONFIRMATION,
  MAP_PROFILE,
  MAP_PROFILE_CONFIRMATION,
}

function App() {
  const [page, setPage] = useState<Page>(Page.SIGN_IN);

  switch (page) {
    case Page.SIGN_IN:
      return (
        <SignInPage>
          <SignInDialog
            onSignUp={() => setPage(Page.SIGN_UP)}
            onSignIn={() => setPage(Page.MAP_ORDER)}
          />
        </SignInPage>
      );
    case Page.SIGN_UP:
      return (
        <SignInPage>
          <SignUpDialog
            onSignIn={() => setPage(Page.SIGN_IN)}
            onSignUp={() => setPage(Page.MAP_ORDER)}
          />
        </SignInPage>
      );
    case Page.MAP_ORDER:
      return (
        <MapPage>
          <Header
            onSignOut={() => setPage(Page.SIGN_IN)}
            onProfile={() => setPage(Page.MAP_PROFILE)}
          />
          <OrderDialog onOrder={() => setPage(Page.MAP_ORDER_CONFIRMATION)} />
        </MapPage>
      );
    case Page.MAP_ORDER_CONFIRMATION:
      return (
        <MapPage>
          <Header
            onSignOut={() => setPage(Page.SIGN_IN)}
            onProfile={() => setPage(Page.MAP_PROFILE)}
          />
          <OrderConfirmationDialog onNewOrder={() => setPage(Page.MAP_ORDER)} />
        </MapPage>
      );
    case Page.MAP_PROFILE:
      return (
        <MapPage>
          <Header
            onSignOut={() => setPage(Page.SIGN_IN)}
            onProfile={() => setPage(Page.MAP_PROFILE)}
          />
          <ProfileDialog
            onSave={() => setPage(Page.MAP_PROFILE_CONFIRMATION)}
          />
        </MapPage>
      );
    case Page.MAP_PROFILE_CONFIRMATION:
      return (
        <MapPage>
          <Header
            onSignOut={() => setPage(Page.SIGN_IN)}
            onProfile={() => setPage(Page.MAP_PROFILE)}
          />
          <ProfileConfirmationDialog
            onReturnToMap={() => setPage(Page.MAP_ORDER)}
          />
        </MapPage>
      );
    default:
      throw Error("Unknown");
  }
}

export default App;
