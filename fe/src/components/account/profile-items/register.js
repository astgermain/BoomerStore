import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import './register.sass'

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
`

const RegisterForm = ({login}) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  return (
    <Mutation mutation={CUSTOMER_REGISTER}>
      {customerRegister => {
        return (
          <div className="login-form, register-form">
            <button className="register-login-return" onClick={()=>login("login")}>
                <div className="recover-circle-button"><FontAwesomeIcon icon={faChevronLeft} /></div>
                <span>Login</span>
              </button>

              <div><span className="gold-text">Welcome! </span>Please Fill In Your Details</div>

            <form
              onSubmit={e => {
                e.preventDefault()
                customerRegister({
                  variables: {
                    input: {
                      email: email,
                      password: password,
                    },
                  },
                })
                  .then(result => {
                    /*
                    handleCustomerAccessToken(
                      result.data.customerCreate.customerAccessToken
                    )
                    */
                    if (result.data.customerCreate.customerUserErrors.length) {
                      setIncorrectCredMsg("Username or Password is incorrect")
                      alert({incorrectCredMsg})
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }}
            >
              <div className="register-input">
                <input
                placeholder="Email"
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></input>
              <input
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              </div>
            </form>
            <div>
              <button className="register-signup-button" type="submit">Create Account</button>
            </div>
          </div>
        )
      }}
    </Mutation>
  )
}

const Register = ({login}) => {
  return (
      <RegisterForm login={login}/>
  )
}

export default Register
