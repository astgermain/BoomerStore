import React, { useContext, useState, useEffect } from "react";
import { Query } from "react-apollo";
import { NetworkStatus } from "@apollo/client";
import gql from "graphql-tag";
import StoreContext from "../../context/store";
import Layout from "../../components/account/Layout";
import AccountUpdate from "../../components/account/profile-items/account-update";
import Register from "../../components/account/profile-items/register";
import Login from "../../components/account/profile-items/login";
import PasswordRecover from "../../components/account/profile-items/password-recover";
import Addresses from "./addresses";
import OrderHistory from "../../components/account/profile-items/order-history";
import Alert from "@material-ui/lab/Alert";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import "../../components/account/profile-items/account.sass";

const CUSTOMER_INFO = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      email
      firstName
      lastName
      id
      phone
      defaultAddress {
        firstName
        id
        lastName
        address1
        city
        zip
        country
      }
      orders(first: 10) {
        edges {
          node {
            name
            id
            totalPrice
            processedAt
            statusUrl
            currencyCode
            lineItems(first: 10) {
              edges {
                node {
                  title
                  quantity
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
            address1
            id
            city
            lastName
            firstName
            country
            name
            zip
          }
        }
      }
    }
  }
`;
const Index = () => {
  const { customerAccessToken, setValue } = useContext(StoreContext);
  const [checked, setChecked] = useState(false);
  const [sign, setSign] = useState("login");
  const [updatedModal, setUpdateModal] = useState(false);
  const [message, setMessage] = useState("");
  const [closed, setClosed] = useState("");
  const [severity, setSeverity] = useState("");
  const [up, setUp] = useState(0);
  const [curPage, setCurPage] = useState("My Account");
  const [lastD, setLastD] = useState({});
  const [loadingValue, setLoadingValue] = useState(false);
  const [errorValue, setErrorValue] = useState(false);
  const [fetchingValue, setFetchingValue] = useState(false);

  let fetchingAlert = (value) => {
    if (value) {
      setFetchingValue(true);
    } else {
      setFetchingValue(false);
    }
  };

  let loadingAlert = (value) => {
    if (value) {
      setLoadingValue(true);
    } else {
      setLoadingValue(false);
    }
  };

  let errorAlert = (value) => {
    if (value) {
      setErrorValue(true);
    } else {
      setErrorValue(false);
    }
  };

  useEffect(() => {}, []);

  const handleChange = (value) => {
    if (value) {
      setChecked(value);
    } else {
      setChecked((prev) => !prev);
    }
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: "flex",
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
    if (value) {
      setUpdateModal(value);
    } else {
      setUpdateModal((prev) => !prev);
    }
  };
  const handleAlert = ({ message = "", close = "", severity = "" }) => {
    if (checked === true) {
      handleChange();
    }
    setMessage(message);
    setClosed(close);
    setSeverity(severity);
    handleChange();
    if (severity === "success") handleEditModal(false);
  };
  const handleCustomerAccessToken = (value) => {
    setValue(value);
  };
  const handleNavClick = (e) => {
    // value constant is the title of the clicked nav btn
    const { value } = e.target;
    setCurPage(value);
  };
  const NAV_TITLE_ARR = ["My Account", "Addresses", "Order History"];
  const NAV_LIST_ITEMS = NAV_TITLE_ARR.map((title, index) => {
    const isActive = curPage === title && "active";
    return (
      <>
        <li key={index} className={`nav-btn-list-items ${isActive.toString()}`}>
          <div>
            <span className={isActive.toString()}></span>
          </div>
          <button
            className={`EBold carousel-nav-btn ${isActive.toString()} black-text less-button nav-button`}
            onClick={handleNavClick}
            value={title}
          >
            {title}
          </button>
        </li>
        <br></br>
      </>
    );
  });
  let queryFunc = () => {
    if (customerAccessToken !== null) {
      var firstDate = new Date(Date.now());
      var secondDate = new Date(customerAccessToken.expiresAt);
      if (secondDate <= firstDate) {
        alert("Login has expired, please relog");
        handleCustomerAccessToken(null);
      }
    }
    try {
      return (
        <Query
          query={CUSTOMER_INFO}
          variables={{
            customerAccessToken: customerAccessToken.accessToken,
          }}
          notifyOnNetworkStatusChange={true}
        >
          {({
            loading,
            error,
            data,
            refetch,
            networkStatus,
            startPolling,
            stopPolling,
          }) => {
            if (networkStatus === NetworkStatus.refetch) {
              return (
                <>
                  {fetchingAlert(true)}
                  <div style={{ height: "calc(100vh - 300px)", padding: "15px" }}>
                    <h1>Refetching Data</h1>
                  </div>
                </>
              );
            }
            if (!(networkStatus === NetworkStatus.refetch)) {
              fetchingAlert(false);
            }
            if (loading) {
              return (
                <>
                  {loadingAlert(true)}
                  <div style={{ height: "calc(100vh - 300px)", padding: "15px" }}>
                    <h1>Loading Data</h1>
                  </div>
                </>
              )
            }
            if (!loading) {
              loadingAlert(false);
            }
            if (error) {
              return (
                <>
                  {errorAlert(true)}
                  <div style={{ height: "calc(100vh - 300px)", padding: "15px" }}>
                    <h1>Data Error, Please Refresh The Page or Try Clearing Your Browser Cookies.<><br></br></> Contact Support Using The Support Button At The Bottom Right Of Your Screen If Problems Persist.</h1>
                  </div>
                </>
              )
            }
            if (!error) {
              errorAlert(false);
            }

            let updatedCustomer = data.customer;

            let {
              firstName,
              lastName,
              phone,
              email,
              // addresses,
              defaultAddress,
              // orders,
            } = updatedCustomer || "";
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
            } = defaultAddress || "";
            let phone1;
            try {
              phone1 = defaultAddress.phone;
            } catch {
              phone1 = "";
            }
            return (
              <>
                <Layout>
                  <section className="account-page-section">
                    {/*
                    <div className="account-alert-row">
                      {checked === true && (
                        <Grow in={checked}>
                          <Alert
                            severity={severity}
                            action={
                              <Button
                                color="inherit"
                                size="small"
                                onClick={handleChange}
                              >
                                {closed}
                              </Button>
                            }
                          >
                            {message}
                          </Alert>
                        </Grow>
                      )}
                    </div>
                    */}
                    <div className="account-page-top">
                      <div style={{ marginRight: "15px" }}></div>
                    </div>
                    <div className="account-content">
                      <div className="account-left">
                        {NAV_LIST_ITEMS}
                        <button
                          onClick={() => handleCustomerAccessToken(null)}
                          className="account-button3"
                        >
                          Logout
                        </button>
                      </div>
                      <div className="account-right">
                        {
                          //Start main Account
                        }
                        {curPage === "My Account" && (
                          <>
                            <h1 className="account-h1">My Account</h1>
                            {fetchingValue && <div>Fetching Data</div>}
                            {loadingValue && <div>Loading</div>}
                            {errorValue && <div>Error</div>}
                            {updatedModal == true && (
                              <>
                                <div className="hi">
                                  <Collapse in={updatedModal} appear={true}>
                                    <AccountUpdate
                                      data={data}
                                      loading={loading}
                                      refetch={refetch}
                                      oFirstName={firstName}
                                      oLastName={lastName}
                                      oEmail={email}
                                      oPhone={phone}
                                      handleAlert={handleAlert}
                                      setUp={setUp}
                                      up={up}
                                      startPolling={startPolling}
                                    />
                                    <button
                                      onClick={() => handleEditModal()}
                                      className="margin-top account-button3"
                                    >
                                      Back To Account
                                    </button>
                                  </Collapse>
                                </div>
                              </>
                            )}
                            {updatedModal === false && (
                              <>
                                <div className="account-row">
                                  <div className="account-col first">
                                    <div className="EBold">Name</div>
                                    <div className="EReg">
                                      {firstName == ("" || null) ? (
                                        <>
                                          <p>*Incomplete Name*</p>
                                        </>
                                      ) : (
                                        <>
                                          {firstName} {lastName}
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  <div className="account-col">
                                    <div className="EBold">E-Mail</div>
                                    <div className="EReg">{email}</div>
                                  </div>
                                </div>
                                <br></br>
                                <div className="EBold account-row">
                                  Default Address: <br></br>
                                  {name ? (
                                    <div className="EReg">
                                      {name}
                                      <br></br>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {company ? (
                                    <div className="EReg">
                                      {company}
                                      <br></br>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {address1 ? (
                                    <div className="EReg">
                                      {address1}
                                      <br></br>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {address2 ? (
                                    <div className="EReg">
                                      {address2}
                                      <br></br>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div className="EReg">
                                    {city ? <>{city} </> : ""}
                                    {provinceCode ? provinceCode : ""}
                                    {zip ? (
                                      <>
                                        {zip}
                                        <br></br>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  {country ? (
                                    <div className="EReg">
                                      {country}
                                      <br></br>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {phone1 ? (
                                    <div className="EReg">
                                      {phone1}
                                      <br></br>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <br></br>
                                <button
                                  className="account-button"
                                  onClick={() => handleEditModal(true)}
                                >
                                  Update Account
                                </button>
                              </>
                            )}
                          </>
                        )}
                        {
                          //Start Addresses
                        }
                        {curPage === "Addresses" && (
                          <>
                            <h1 className="account-h1">Addresses</h1>
                            <Addresses
                              data={data}
                              id={id}
                              handleAlert={handleAlert}
                            />
                          </>
                        )}
                        {
                          //Start Order History
                        }
                        {curPage === "Order History" && (
                          <>
                            <h1 className="account-h1">Order History</h1>
                            <OrderHistory data={data} />
                          </>
                        )}
                      </div>
                    </div>
                  </section>
                </Layout>
              </>
            );
          }}
        </Query>
      );
    } catch {
      return (
        <div className="login-wrapper full-page-wrapper">
          {(() => {
            switch (sign) {
              case "login":
                return (
                  <>
                    <div>
                      <span style={{ fontSize: "24px", color: "white" }}>
                        Sign In
                      </span>
                    </div>
                    <br></br>
                    <Login reg={setSign} />
                  </>
                );
              case "register":
                return (
                  <>
                    <div>
                      <span style={{ fontSize: "24px", color: "white" }}>
                        Register &nbsp;
                      </span>
                    </div>
                    <br></br>
                    <Register login={setSign} />
                  </>
                );
              case "forgot":
                return (
                  <>
                    <div style={{ fontSize: "24px", color: "white" }}>
                      Forgot Password?
                    </div>
                    <PasswordRecover forgot={setSign} />
                  </>
                );
              default:
                return "There seems to be an error";
            }
          })()}
        </div>
      );
    }
  };

  return <div>{queryFunc()}</div>;
};

export default Index;
