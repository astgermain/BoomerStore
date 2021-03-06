import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faEnvelope,
  faSearch,
  faAngleDown,
  faShoppingCart,
  faStream,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
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
              <div className="formField" style={{paddingRight: "25px", paddingLeft: "25px"}}>
                <input
                  className="form-control"
                  placeholder=""
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label className="labelIcon">
                  <FontAwesomeIcon icon={faEnvelope} style={{color: "black"}} />
                </label>
                {email === "" || email === null ? (
                  <div className="selectedInput">E-Mail</div>
                ) : (
                  <div className="hasInput">E-Mail</div>
                )}
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
