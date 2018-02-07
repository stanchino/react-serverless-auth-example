import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createMemoryHistory";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

const mockStore = configureStore();

export const history = createHistory();

export const initialState = { isLoggedIn: false, flash: { error: null, notice: null } };

export const testComponent = (component) => {
  it("renders without errors", () => expect(renderer.create(component).toJSON()).toMatchSnapshot());
};

export const connectComponent = (Component, store) => (
  mount(<Provider store={store}><ConnectedRouter history={history}><Component /></ConnectedRouter></Provider>)
);

export const testContainer = (component) => {
  const store = mockStore({ auth: initialState });
  testComponent(<Provider store={store}>{component}</Provider>);
};

export const testConnectedContainer = (component) => {
  const store = mockStore({ auth: initialState });
  testComponent(<Provider store={store}><ConnectedRouter history={history}>{component}</ConnectedRouter></Provider>);
};