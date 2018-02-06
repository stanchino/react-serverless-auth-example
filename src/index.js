import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";

import createHistory from "history/createBrowserHistory";
import createStore from "./createStore";

import registerServiceWorker from "./registerServiceWorker";

import { Unauthenticated, SignOutLink, PasswordResetForm, authRoutes } from "react-serverless-auth";

import {
  ConfirmationForm,
  Home,
  NotFound,
  Private,
  Public,
  PasswordResetRequestForm,
  PasswordResetConfirmForm,
  RouteWithRedirect,
  SignInForm,
  SignUpForm,
} from "./components";

import "./index.css";

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/public">Public</NavLink>
          <NavLink to="/private">Private</NavLink>
          <Unauthenticated><NavLink to={authRoutes.signIn}>Sign In</NavLink></Unauthenticated>
          <Unauthenticated><NavLink to={authRoutes.register}>Sign Up</NavLink></Unauthenticated>
          <SignOutLink className={"btn"}>Sign Out</SignOutLink>
        </nav>
        <Switch>
          <Route path={"/"} exact><Home /></Route>
          <Route path={"/public"}><Public /></Route>
          <Route path={"/private"}><Private /></Route>
          <RouteWithRedirect to={"/"} path={authRoutes.signIn} component={SignInForm} />
          <RouteWithRedirect to={"/"} path={authRoutes.register} component={SignUpForm} />
          <RouteWithRedirect to={"/"} path={authRoutes.confirm} component={ConfirmationForm} />
          <Route path={authRoutes.reset}>
            <Unauthenticated component={NotFound}>
              <PasswordResetForm
                requestForm={PasswordResetRequestForm}
                confirmationForm={PasswordResetConfirmForm}
              />
            </Unauthenticated>
          </Route>
          <Route><NotFound /></Route>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();