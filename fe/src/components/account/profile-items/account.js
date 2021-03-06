import React, { useState, useContext, useEffect } from "react"
import { Query } from "react-apollo"
import { Link } from "gatsby"; /* eslint-disable */
import gql from "graphql-tag"
import StoreContext from "../../../context/store"
import AccountUpdate from "./account-update"
import Register from "./register"
import Login from "./login"
import PasswordRecover from "./password-recover"
import Addresses from "./addresses"
import OrderHistory from "./order-history"
import Alert from "@material-ui/lab/Alert"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Grow from "@material-ui/core/Grow"
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import "./account.sass"
import "./login.sass";

const GET_CUSTOMER_OBJECT = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      acceptsMarketing
      email
      firstName
      lastName
      phone
      defaultAddress {
        id
        address1
        address2
        city
        lastName
        firstName
        country
        countryCodeV2
        name
        zip
        company
        phone
        provinceCode
        province
        formattedArea
      }
      orders(first: 10, reverse: true) {
        edges {
          node {
            name
            totalPrice
            processedAt
            statusUrl
            currencyCode
            orderNumber
            fulfillmentStatus
            financialStatus
            successfulFulfillments {
              trackingCompany
            }
            shippingAddress {
              address1
              address2
              city
              country
              zip
            }
            lineItems(first: 10) {
              edges {
                node {
                  title
                  quantity
                  variant {
                    price
                    image {
                      src
                    }
                    product {
                      handle
                    }
                  }
                }
              }
            }
            shippingAddress {
              address1
              city
              lastName
              firstName
              zip
              country
            }
            subtotalPrice
            totalPrice
          }
        }
      }
      addresses(first: 10) {
        edges {
          node {
            id
            address1
            address2
            city
            lastName
            firstName
            country
            name
            zip
            company
            province
            provinceCode
            phone
          }
        }
      }
    }
  }
`

const Account = ({side}) => {
  const { customerAccessToken, setValue } = useContext(StoreContext)
  const [checked, setChecked] = React.useState(false)
  const [sign, setSign] = React.useState("login")
  const [confirm, setConfirm] = React.useState(false)
  const [confirm2, setConfirm2] = React.useState(false)
  const [updatedModal, setUpdateModal] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [closed, setClosed] = React.useState("")
  const [severity, setSeverity] = React.useState("")
  const handleChange = (value) => {
    if(value){
      setChecked(value)
    }
    else{
      setChecked(prev => !prev)
    }
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));
  const handleEditModal = (value) => {
    if(value){
      setUpdateModal(value)
    }
    else{
      setUpdateModal(prev => !prev)
    }
  }
  const handleAlert = ({ message = "", close = "", severity = "" }) => {
    if(checked === true){
      handleChange()
    }
    setMessage(message)
    setClosed(close)
    setSeverity(severity)
    handleChange()
    if(severity === "success") handleEditModal(false)
  }
  const handleCustomerAccessToken = value => {
    side()
    setValue(value)
  }
  const [curPage, setCurPage] = useState("My Account")
  const handleNavClick = e => {
    // value constant is the title of the clicked nav btn
    const { value } = e.target
    setCurPage(value)
  }
  const NAV_TITLE_ARR = ["My Account", "Addresses", "Order History"]
  const NAV_LIST_ITEMS = NAV_TITLE_ARR.map((title, index) => {
    const isActive = curPage === title && "active"
    return (
      <>
      <li key={index} className={`nav-btn-list-items ${isActive.toString()}`}>
        <div>
          <span className={isActive.toString()}></span>
        </div>
        <button
          className={`carousel-nav-btn ${isActive.toString()}`}
          onClick={handleNavClick}
          value={title}
        >
          {title}
        </button>
      </li>
      <br></br>
      </>
    )
  })
  let queryFunc = () => {
    if (customerAccessToken !== null) {
      var firstDate = new Date(Date.now())
      var secondDate = new Date(customerAccessToken.expiresAt)
      if (secondDate <= firstDate) {
        alert("Login has expired, please relog")
        handleCustomerAccessToken(null)
      }
    }
    try {
      return (
        <Query
          query={GET_CUSTOMER_OBJECT}
          variables={{
            customerAccessToken: customerAccessToken.accessToken,
          }}
        >
          {data => {
            let updatedCustomer
            try {
              updatedCustomer = data.data.customer
            } catch {
              updatedCustomer = {}
            }

            let {
              firstName,
              lastName,
              phone,
              email,
              // addresses,
              defaultAddress,
              // orders,
            } = updatedCustomer || ""
            let {
              address1,
              address2,
              city,
              company,
              country,
              id,
              name,
              zip,
              // formattedArea,
              provinceCode,
            } = defaultAddress || ""
            let phone1
            try {
              phone1 = defaultAddress.phone
            } catch {
              phone1 = ""
            }
            return (

              <>
              <div className="logged-wrapper">
              {data?.data?.customer?.firstName == null ? <div><span className="gold-text">Welcome! </span></div>  : <div><span className="gold-text">Hi, </span>{data?.data?.customer?.firstName}</div>}
                <div className="logged-bottom" >
                  <Link to="/account" onClick={() => side()}><button className="account-button" style={{margin: "10px"}}>Dashboard</button></Link>
                  <button onClick={() => {handleCustomerAccessToken(null)}} className="account-button" style={{margin: "10px"}}>Logout</button>
                </div>
              </div>
              </>
            )
          }}
        </Query>
      )
    } catch {
      return (
        <div className="login-wrapper">
          {(() => {
        switch (sign) {
          case "login":   return (
            <>
            <div style={{width: "100%", paddingLeft: "25px"}}><span className="" style={{fontSize: "24px"}}>Sign In </span></div>
              <Login reg={setSign} confirm={confirm} confirm2={confirm2}/>
            </>
          )
          case "register": return (
            <>
            <div style={{width: "100%", paddingLeft: "25px"}}><span className="" style={{fontSize: "24px"}}>Register</span></div>
              <Register login={setSign} confirm={setConfirm}/>
            </>
          )
          case "forgot":  return (
            <>
            <div style={{width: "100%", paddingLeft: "25px"}}><span className="" style={{fontSize: "24px"}}>Forgot Password?</span></div>
            <PasswordRecover forgot={setSign} confirm2={setConfirm2}/>
            </>
          )
          default:      return "There seems to be an error";
        }
      })()}
          
        </div>
      )
    }
  }

  useEffect(() => { }, [])

  return <div className="a-wrap">{queryFunc()}</div>
}

export default Account