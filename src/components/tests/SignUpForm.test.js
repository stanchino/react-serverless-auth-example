import React from "react";
import { SignUpForm } from "..";
import { testConnectedContainer } from "./shared-examples";

describe("SignUpForm", () => testConnectedContainer(<SignUpForm />));