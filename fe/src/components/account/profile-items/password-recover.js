import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import './password-recover.sass'

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
`

const PasswordRecover = ({forgot}) => {
  const [email, setEmail] = useState(null)
  const [incorrectCredMsg, setIncorrectCredMsg] = useState(null)

  return (
    <Mutation mutation={PASSWORD_RECOVER}>
      {passwordRecover => {
        return (
          <div className="recover-password-container">
          <button className="password-recover-return" onClick={()=>forgot("login")}>
                <div className="recover-circle-button"><FontAwesomeIcon icon={faChevronLeft} /></div>
                <span>Return</span>
              </button> 

          <div>Forgot Password?</div> 
    
          <div className="recover-form">
            <form
              onSubmit={e => {
                e.preventDefault()
                passwordRecover({
                  variables: {
                      email: email,
                  },
                })
                  .then(result => {
                    if (result.data.customerRecover.customerUserErrors.length) {
                      setIncorrectCredMsg("E-Mail doesn't exist")
                      alert({incorrectCredMsg})
                    }
                    else {
                        alert('An E-Mail should have been sent to the provided E-Mail address')
                    }
                  })
                  .catch(err => {
                    alert(err)
                    console.error(err)
                  })
              }}
            >   
               <input
              placeholder="Email"
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></input>


              <button className="password-recover-button" type="submit">Recover Password</button>
            </form>
            
          </div>
          </div>
        )
      }}
    </Mutation>
  )
}

export default PasswordRecover  