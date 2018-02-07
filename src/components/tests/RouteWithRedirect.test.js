import React from "react";
import { RouteWithRedirect } from "..";
import { testConnectedContainer } from "./shared-examples";

describe("RouteWithRedirect", () => testConnectedContainer(<RouteWithRedirect path={'/auth/login'} to={'/'} />));