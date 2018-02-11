import React from "react";
import { ConfirmationForm } from "..";
import { testContainer } from "./shared-examples";

describe("PasswordResetConfirmForm", () => testContainer(<ConfirmationForm noEmail={null} />));