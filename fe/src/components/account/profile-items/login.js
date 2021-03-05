import React, { useState, useContext } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import StoreContext from "../../../context/store";
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

const LOGIN_USER = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const Login = ({ reg, confirm, confirm2 }) => {
  /* eslint-disable no-unused-vars */
  const { setValue } = useContext(StoreContext);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  // const [message, setMessage] = useState(``)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null);
  const handleCustomerAccessToken = (value) => {
    setValue(value);
  };

  return (
    <Mutation mutation={LOGIN_USER}>
      {(loginFunc) => {
        return (
          <>
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                loginFunc({
                  variables: {
                    input: {
                      email: email,
                      password: password,
                    },
                  },
                })
                  .then((result) => {
                    handleCustomerAccessToken(
                      result.data.customerAccessTokenCreate.customerAccessToken
                    );
                    if (
                      result.data.customerAccessTokenCreate.customerUserErrors
                        .length
                    ) {
                      setIncorrectCredMsg("Username or Password is incorrect");
                      alert(incorrectCredMsg);
                    }
                  })
                  .catch((err) => {
                    alert(err);
                    console.error(err);
                  });
              }}
            >
              {confirm && (
                <p className="reset-text">Your Account Has Been Created</p>
              )}
              {confirm2 && (
                <p className="reset-text">
                  An E-Mail should have been sent to the provided E-Mail address
                </p>
              )}
              <div className="formField">
                <input
                  className="form-control"
                  type="email"
                  placeholder=""
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label className="labelIcon">
                  <FontAwesomeIcon icon={faEnvelope} style={{color: "black"}} />
                </label>
                {email === "" ? (
                  <div className="selectedInput">E-Mail</div>
                ) : (
                  <div className="hasInput">E-Mail</div>
                )}
              </div>
              <br></br>
              <div className="formField">
                <input
                  className="form-control"
                  type="password"
                  placeholder=""
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <label className="labelIcon">
                  <FontAwesomeIcon icon={faKey} style={{color: "black"}} />
                </label>
                {password === "" ? (
                  <div className="selectedInput">Password</div>
                ) : (
                  <div className="hasInput">Password</div>
                )}
              </div>
              <br></br>
              <div className="reverse-row">
                <button type="submit" className="account-button">
                  Login
                </button>
                <button onClick={() => reg("forgot")} className="forgot-button">
                  Forgot your password?
                </button>
              </div>
            </form>

            <div className="login-reg-section">
              <button onClick={() => reg("register")} className="reg-button">
                Don't Have An Account?
              </button>
            </div>
          </>
        );
      }}
    </Mutation>
  );
};

export default Login;
