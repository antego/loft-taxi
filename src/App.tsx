import React, { useState } from "react";
import "./App.css";
import SignInDialog from "./components/SignInDialog";
import SignUpDialog from "./components/SignUpDialog";
import SignInPage from "./pages/SignInPage";
import MapPage from "./pages/MapPage";
import Header from "./components/Header";
import OrderDialog from "./components/OrderDialog"
import OrderConfirmationDialog from "./components/OrderConfirmationDialog"

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
          <SignInDialog onSignUp={() => setPage(Page.SIGN_UP)} onSignIn={() => setPage(Page.MAP_ORDER)} />
        </SignInPage>
      );
    case Page.SIGN_UP:
      return (
        <SignInPage>
          <SignUpDialog onSignIn={() => setPage(Page.SIGN_IN)} />
        </SignInPage>
      );
    case Page.MAP_ORDER:
      return (
        <MapPage>
          <Header onSignOut={() => setPage(Page.SIGN_IN)} />
          <OrderDialog onOrder={() => setPage(Page.MAP_ORDER_CONFIRMATION)} />
        </MapPage>
      );
      case Page.MAP_ORDER_CONFIRMATION:
        return (
          <MapPage>
          <Header onSignOut={() => setPage(Page.SIGN_IN)} />
          <OrderConfirmationDialog onNewOrder={() => setPage(Page.MAP_ORDER)} />
        </MapPage>
        )
    default:
      throw Error("Unknown");
  }
}

export default App;
