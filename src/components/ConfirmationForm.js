import React from "react";

import {
  ConfirmationCode,
  ResetButton,
  ResendConfirmationCodeButton,
  ConfirmRegistrationForm,
  SubmitButton,
} from "react-serverless-auth";

export default props => (
  <ConfirmRegistrationForm {...props}>
    <ConfirmationCode />
    <ResendConfirmationCodeButton formType={'registration'}>Resend Code</ResendConfirmationCodeButton>
    <SubmitButton>Confirm</SubmitButton>
    <ResetButton>Reset</ResetButton>
  </ConfirmRegistrationForm>
);