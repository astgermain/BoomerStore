import React, { useState, useContext, useEffect } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../../context/store"


const USER_UPDATE = gql`
  mutation customerUpdate(
    $customerAccessToken: String!
    $customer: CustomerUpdateInput!
  ) {
    customerUpdate(
      customerAccessToken: $customerAccessToken
      customer: $customer
    ) {
      customer {
        id
      }
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

const AccountUpdate = ({
  data,
  oFirstName,
  oLastName,
  oEmail,
  handleAlert,
  setUp,
  up
}) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [password2, setPassword2] = useState(``)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  // const [checked, setChecked] = React.useState(false)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  //Commented the below code out because it doesn't look like it's needed
  //Please consider deleting if you wrote this and no longer need it

  // const handleChange = () => {
  //   setChecked(prev => !prev)
  // }
  let newCustomerData = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  }
  useEffect(() => {
    setFirstName(oFirstName)
    setLastName(oLastName)
    setEmail(oEmail)
  }, [data, oFirstName, oLastName, oEmail])
  return (
    <Mutation mutation={USER_UPDATE}>
      {updateFunc => {
        return (
          <>
            <div className="update-form">
              <form
                onSubmit={e => {
                  e.preventDefault()
                  
                  // We weren't using password2 to check for accuracy
                  // Could use refactoring if we want to do something else
                  if(password === password2) {
                    updateFunc({
                      variables: {
                        customerAccessToken: customerAccessToken.accessToken,
                        customer: newCustomerData,
                      },
                    })
                    .then(result => {
                      if (
                        result.data.customerUpdate.customerAccessToken === null
                      ) {
                        result.data.customerUpdate.customerUserErrors.forEach(
                          msg => {
                            handleAlert({
                              message: msg.message,
                              close: "Close",
                              severity: "warning",
                            })
                          }
                        )
                      } else {
                        handleCustomerAccessToken(
                          result.data.customerUpdate.customerAccessToken
                        )
                        handleAlert({
                          message: "Your Account Has Been Updated",
                          close: "Close",
                          severity: "success",
                        })
                        setUp(up + 1)
                      }
                    })
                    .catch(err => {
                      handleAlert({
                        message: "There Was An Error Updating Your Account",
                        close: "Close",
                        severity: "error",
                      })
                    })
                    data.refetch()
                  }
                
                  // would be useful to add a block that
                  // notifies user that their passwords don't match
                }}
              >

                <div className="account-row">
                  <div className="account-col first">
                    <div className="profile-bold">First Name</div>
                    <input
                      defaultValue={firstName}
                      type="text"
                      name="first-name"
                      autoComplete="off"
                      onChange={e => setFirstName(e.target.value)}
                    ></input>
                  </div>
                  <div className="account-col">
                    <div className="profile-bold">Last Name</div>
                    <input
                      defaultValue={lastName}
                      type="text"
                      name="last-name"
                      autoComplete="off"
                      onChange={e => setLastName(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="account-row">
                  <div className="account-col first">
                    <div className="profile-bold">New Password</div>
                    <input
                      type="password"
                      name="npassword1"
                      autoComplete="off"
                      onChange={e => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="account-col">
                    <div className="profile-bold">Confirm Password</div>
                    <input
                      type="password"
                      name="npassword2"
                      autoComplete="off"
                      onChange={e => setPassword2(e.target.value)}
                    ></input>
                  </div>
                </div>
                <br></br>
                <button type="submit" className="account-button">Save Changes</button>
                <br></br>
              </form>
            </div>
          </>
        )
      }}
    </Mutation>
  )
}

export default AccountUpdate
