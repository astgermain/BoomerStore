import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import "./login.sass";

const PASSWORD_RECOVER = gql`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const PasswordRecover = ({ forgot, confirm2 }) => {
  const [email, setEmail] = useState(null);
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null);

  return (
    <Mutation mutation={PASSWORD_RECOVER}>
      {(passwordRecover) => {
        return (
          <div className="recover-form">
            <form
              className="rec-form"
              onSubmit={(e) => {
                e.preventDefault();
                passwordRecover({
                  variables: {
                    email: email,
                  },
                })
                  .then((result) => {
                    if (result.data.customerRecover.customerUserErrors.length) {
                      setIncorrectCredMsg("E-Mail doesn't exist");
                      alert({ incorrectCredMsg });
                    } else {
                      confirm2(true)
                      forgot("login")
                    }
                  })
                  .catch((err) => {
                    alert(err);
                    console.error(err);
                  });
              }}
            >
              <div className="wrap-input-login">
                <input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="reverse-row">
                <button type="submit" className="account-button">
                  Recover Password
                </button>
                <button
                  onClick={() => forgot("login")}
                  className="forgot-button"
                >
                  Return To Login
                </button>
              </div>
            </form>
            <div></div>
          </div>
        );
      }}
    </Mutation>
  );
};

export default PasswordRecover;
