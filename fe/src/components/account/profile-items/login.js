import React, { useState, useContext } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../../context/store"

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
`



const Login = ({reg}) => {
  /* eslint-disable no-unused-vars */
  const { setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  // const [message, setMessage] = useState(``)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }


  return (
    <Mutation mutation={LOGIN_USER}>
      {loginFunc => {
        return (
          <div className="login-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                loginFunc({
                  variables: {
                    input: {
                      email: email,
                      password: password,
                    },
                  },
                })
                  .then(result => {
                    handleCustomerAccessToken(
                      result.data.customerAccessTokenCreate.customerAccessToken
                    )
                    if (
                      result.data.customerAccessTokenCreate.customerUserErrors
                        .length
                    ) {
                      setIncorrectCredMsg("Username or Password is incorrect")
                      alert(incorrectCredMsg)
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }}
            >
              
              <div className="wrap-input-login">
                    <input
                      type="email"
                      placeholder="E-Mail"
                      onChange={e => setEmail(e.target.value)}
                    ></input>
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                    ></input>
              </div>
              <div className="row">
                <button onClick={() => reg("forgot")}>Forgot your password?</button>
                <button type="submit">Login</button>
              </div>
            </form>

            <div>
              <button onClick={() => reg("register")}>Click here to register</button>
              
            </div>
          </div>
        )
      }}
    </Mutation>
  )}

export default Login
