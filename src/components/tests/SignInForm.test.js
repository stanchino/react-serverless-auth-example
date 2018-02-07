import React from "react";
import { SignInForm } from "..";
import { testConnectedContainer } from "./shared-examples";

describe("SignInForm", () => testConnectedContainer(<SignInForm />));