import React from "react";
import { Private } from "..";
import { PrivateComponent } from "../Private";
import { connectComponent, initialState } from "./shared-examples";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("Private", () => {
  const subject = store => connectComponent(Private, store);

  describe("for unauthenticated users", () => {
    const store = mockStore({ auth: initialState });

    it("will not show the private contents", () => {
      expect(subject(store)).not.toContainReact(<PrivateComponent />);
    });
  });

  describe("for authenticated users", () => {
    const store = mockStore({ auth: { ...initialState, isLoggedIn: true } });

    it("will show the private contents", () => {
      expect(subject(store)).toContainReact(<PrivateComponent />);
    });
  });
});