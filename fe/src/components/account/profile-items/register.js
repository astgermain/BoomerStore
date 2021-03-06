import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faEnvelope,
  faCheck,
  faUser,
  faShoppingCart,
  faStream,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./login.sass";

const CUSTOMER_REGISTER = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const RegisterForm = ({ login, confirm }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null);
  return (
    <Mutation mutation={CUSTOMER_REGISTER}>
      {(customerRegister) => {
        return (
          <>
            <form
              className="reg-form"
              onSubmit={(e) => {
                e.preventDefault();
                customerRegister({
                  variables: {
                    input: {
                      email: email,
                      password: password,
                      firstName: firstName,
                      lastName: lastName,
                    },
                  },
                })
                  .then((result) => {
                    /*
                    handleCustomerAccessToken(
                      result.data.customerCreate.customerAccessToken
                    )
                    */
                    if (
                      result?.data?.customerCreate?.customerUserErrors?.length
                    ) {
                      setIncorrectCredMsg(
                        result.data.customerCreate.customerUserErrors[0].message
                      );
                      alert(
                        result.data.customerCreate.customerUserErrors[0].message
                      );
                    } else {
                      confirm(true);
                      login("login");
                    }
                  })
                  .catch((err) => {
                    alert(err);
                    console.error(err);
                  });
              }}
            >
              <div className="name-row">
                <div className="formField" style={{paddingRight: "25px"}}>
                  <input
                    className="form-control2"
                    placeholder=""
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ width: "calc(100% - 50px)" }}
                  ></input>
                  <label className="labelIcon">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "black" }}
                  />
                </label>
                  {firstName === "" ? (
                    <div className="selectedInput">First Name</div>
                  ) : (
                    <div className="hasInput">First Name</div>
                  )}
                </div>
                <div className="formField">
                  <input
                    className="form-control2"
                    placeholder=""
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ width: "calc(100% - 50px)" }}
                  ></input>
                  <label className="labelIcon">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "black" }}
                  />
                </label>
                  {lastName === "" ? (
                    <div className="selectedInput">Last Name</div>
                  ) : (
                    <div className="hasInput">Last Name</div>
                  )}
                </div>
              </div>
              <div className="formField" style={{paddingRight: "25px", paddingLeft: "25px"}}>
                <input
                  className="form-control3"
                  placeholder=""
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label className="labelIcon">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "black" }}
                  />
                </label>
                {email === "" || email == null ? (
                  <div className="selectedInput">E-Mail</div>
                ) : (
                  <div className="hasInput">E-Mail</div>
                )}
              </div>
              <div className="name-row">
                <div className="formField" style={{paddingRight: "25px"}}>
                  <input
                    className="form-control2"
                    placeholder=""
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "calc(100% - 50px)" }}
                  ></input>
                  <label className="labelIcon">
                    <FontAwesomeIcon icon={faKey} style={{ color: "black" }} />
                  </label>
                  {password === "" || password == null ? (
                    <div className="selectedInput">Password</div>
                  ) : (
                    <div className="hasInput">Password</div>
                  )}
                </div>
                <div className="formField">
                  <input
                    className="form-control2"
                    placeholder=""
                    type="password"
                    onChange={(e) => setPassword2(e.target.value)}
                    style={{ width: "calc(100% - 50px)" }}
                  ></input>
                  <label className="labelIcon">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "black" }}
                    />
                  </label>
                  {password2 === "" || password2 == null ? (
                    <div className="selectedInput">Confirm</div>
                  ) : (
                    <div className="hasInput">Confirm</div>
                  )}
                </div>
              </div>
              <div className="reverse-row">
                {password == null || password == "" || password2 == null || password2 == "" || email == null || email == "" ? (
                  <div className="account-button2">Sign Up</div>
                ) : (
                  <button type="submit" className="account-button">
                    Sign Up
                  </button>
                )}
                <button
                  onClick={() => login("login")}
                  className="forgot-button"
                >
                  Already Have An Account?
                </button>
              </div>
            </form>
            <div></div>
          </>
        );
      }}
    </Mutation>
  );
};

const Register = ({ login }) => {
  return <RegisterForm login={login} />;
};

export default Register;
