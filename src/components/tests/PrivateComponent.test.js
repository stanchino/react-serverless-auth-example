import React from "react";
import { PrivateComponent } from "../Private";
import { testComponent } from "./shared-examples";

describe("PrivateComponent", () => testComponent(<PrivateComponent />));