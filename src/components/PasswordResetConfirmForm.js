import React from "react";

import {
  ConfirmationCode,
  Password,
  PasswordConfirmation,
  ResetButton,
  ResendConfirmationCodeButton,
  PasswordResetConfirmForm,
  SubmitButton,
} from "react-serverless-auth";

export default props => (
  <PasswordResetConfirmForm {...props}>
    <ConfirmationCode />
    <Password autoComplete={"new-password"}/>
    <PasswordConfirmation autoComplete={"new-password"}/>
    <ResendConfirmationCodeButton formType={'passwordReset'}>Resend Code</ResendConfirmationCodeButton>
    <SubmitButton>Reset Password</SubmitButton>
    <ResetButton>Cancel</ResetButton>
  </PasswordResetConfirmForm>
);