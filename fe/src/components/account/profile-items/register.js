import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
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
                    if (result?.data?.customerCreate?.customerUserErrors?.length) {
                      setIncorrectCredMsg(result.data.customerCreate.customerUserErrors[0].message);
                      alert(result.data.customerCreate.customerUserErrors[0].message);
                    }
                    else {
                      confirm(true)
                      login("login")
                    }
                  })
                  .catch((err) => {
                    alert(err);
                    console.error(err);
                  });
              }}
            >
              <div className="wrap-input-login">
                <div className="name-row">
                  <input
                    placeholder="First Name"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ width: "47.5%" }}
                  ></input>
                  <input
                    placeholder="Last Name"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ width: "47.5%" }}
                  ></input>
                </div>
                <input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) => setPassword2(e.target.value)}
                  className={`${firstName == "" && firstName}`}
                ></input>
              </div>
              <div className="reverse-row">
                {((password != password2) || (email == null) || (email == "")) ? (
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
