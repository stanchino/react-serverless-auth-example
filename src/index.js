import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { NavLink } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";

import createHistory from "history/createBrowserHistory";
import createStore from "./createStore";

import registerServiceWorker from "./registerServiceWorker";

import { Unauthenticated, SignOutButton, PasswordResetForm, Protected, authRoutes } from "react-serverless-auth";

import {
  ConfirmationForm,
  NotFound,
  PasswordResetRequestForm,
  PasswordResetConfirmForm,
  SignInForm,
  SignUpForm,
} from "./components";

import "./index.css";

const history = createHistory();
const store = createStore(history);

const AuthRoute = ({ path, children }) => (
  <Route path={path}>
    <Unauthenticated component={<Redirect to={'/'} />} loadingComponent={'Loading...'}>{children}</Unauthenticated>
  </Route>
);

registerServiceWorker();
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
          <SignOutButton className={"btn"}>Sign Out</SignOutButton>
        </nav>

        <Switch>
          <Route path={"/"} exact><div>Home</div></Route>
          <Route path={"/public"}><div>Public Content</div></Route>
          <Route path={"/private"}><Protected component={SignInForm}><div>Private Content</div></Protected></Route>
          <AuthRoute path={authRoutes.signIn}><SignInForm /></AuthRoute>
          <AuthRoute path={authRoutes.register}><SignUpForm /></AuthRoute>
          <AuthRoute path={authRoutes.confirm}><ConfirmationForm noEmail={<Redirect to={'/'} />}/></AuthRoute>
          <AuthRoute path={authRoutes.reset}><PasswordResetForm requestForm={PasswordResetRequestForm} confirmationForm={PasswordResetConfirmForm} /></AuthRoute>
          <Route><NotFound /></Route>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
