import React, { useState, useContext, useEffect } from "react";
import StoreContext from "../../../context/store";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import axios from "axios";
import Collapse from "@material-ui/core/Collapse";

const CUSTOMER_EDIT_ADDRESS = gql`
  mutation customerAddressUpdate(
    $customerAccessToken: String!
    $id: ID!
    $address: MailingAddressInput!
  ) {
    customerAddressUpdate(
      customerAccessToken: $customerAccessToken
      id: $id
      address: $address
    ) {
      customerAddress {
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

const CUSTOMER_EDIT_DEFAULT_ADDRESS = gql`
  mutation customerDefaultAddressUpdate(
    $customerAccessToken: String!
    $addressId: ID!
  ) {
    customerDefaultAddressUpdate(
      customerAccessToken: $customerAccessToken
      addressId: $addressId
    ) {
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

const EditAddressForm = ({ address, setModal }) => {
  const [firstNameInput, setFirstNameInput] = useState(address.firstName);
  const [lastNameInput, setLastNameInput] = useState(address.lastName);
  const [companyInput, setCompanyInput] = useState(address.company);
  const [addressInput, setAddressInput] = useState(address.address1);
  const [apartmentInput, setApartmentInput] = useState(address.address2);
  const [cityInput, setCityInput] = useState(address.city);
  const [countryInput, setCountryInput] = useState(address.country);
  const [zipInput, setZipInput] = useState(address.zip);
  const [phoneInput, setPhoneInput] = useState(address.phone);
  const [countriesAll, setCountriesAll] = useState([]);
  const [checkDefaultAddress, setCheckDefaultAddress] = useState(false);

  const { customerAccessToken } = useContext(StoreContext);

  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  

  const handleBack = () => {
    setModal("home");
  };

  useEffect(() => {
    
  }, []);
  return (
    <>
    <Collapse in={true} appear={true}>
      <div className="columns is-centered" style={{maxWidth: "600px"}}>
        <div className="column is-6 has-text-left" style={{ width: "100%" }}>
          <Mutation mutation={CUSTOMER_EDIT_ADDRESS}>
            {(customerAddressUpdate) => {
              return (
                <Mutation mutation={CUSTOMER_EDIT_DEFAULT_ADDRESS}>
                  {(customerDefaultAddressUpdate) => {
                    return (
                      <form>
                        <h1 className="subtitle is-uppercase has-text-weight-semibold ">
                          EDIT ADDRESS
                        </h1>
                        <div className="columns">
                          <div style={{ flexGrow: "1" }}>
                            <div className="field">
                              <label className="label" htmlFor="firstNameInput">
                                First Name
                              </label>
                              <div className="control">
                                <input
                                  className="input"
                                  value={firstNameInput}
                                  type="text"
                                  onChange={(e) =>
                                    setFirstNameInput(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div style={{ flexGrow: "1" }}>
                            <div className="field">
                              <label className="label" htmlFor="lastNameInput">
                                Last Name
                              </label>
                              <div className="control">
                                <input
                                  className="input"
                                  value={lastNameInput}
                                  type="text"
                                  onChange={(e) =>
                                    setLastNameInput(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label className="label" htmlFor="companyInput">
                            Company
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              value={companyInput}
                              type="text"
                              onChange={(e) => setCompanyInput(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="field">
                          <label className="label" htmlFor="addressInput">
                            Address
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              value={addressInput}
                              type="text"
                              onChange={(e) => setAddressInput(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="field">
                          <label className="label" htmlFor="apartmentInput">
                            Apartment, suite, etc.
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              value={apartmentInput}
                              type="text"
                              onChange={(e) =>
                                setApartmentInput(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="columns" style={{marginTop: "5px"}}>
                          <div style={{ flexGrow: "1" }}>
                            <div className="field">
                              <label className="label" htmlFor="cityInput">
                                City
                              </label>
                              <div className="control">
                                <input
                                  className="input"
                                  value={cityInput}
                                  type="text"
                                  onChange={(e) => setCityInput(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              flexGrow: "1",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div className="field">
                              <label className="label" htmlFor="countryInput">
                                Country
                              </label>
                              <div className="control">
                                <div className="select">
                                  <select
                                    value={countryInput}
                                    onChange={(e) =>
                                      setCountryInput(e.target.value)
                                    }
                                    onBlur={(e) =>
                                      setCountryInput(e.target.value)
                                    }
                                    style={{
                                      minWidth: "140px",
                                      maxWidth: "310px",
                                    }}
                                  >
                                    {states.map((country) => (
                                    <option value={country.name}>
                                      {country.name}
                                    </option>
                                  ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label className="label" htmlFor="zipInput">
                            Postal/Zip Code
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              value={zipInput}
                              type="text"
                              onChange={(e) => setZipInput(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="field">
                          <label className="label" htmlFor="phoneInput">
                            Phone
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              value={phoneInput}
                              type="text"
                              onChange={(e) => setPhoneInput(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="field">
                          <div className="control">
                            <label
                              className="checkbox"
                              htmlFor="checkboxDefaultAddress"
                            >
                              <input
                                type="checkbox"
                                onChange={() =>
                                  setCheckDefaultAddress(!checkDefaultAddress)
                                }
                                value={checkDefaultAddress}
                              />
                              Set as default address
                            </label>
                          </div>
                        </div>
                        <button
                          style={{marginRight: "15px"}}
                          className="button account-button"
                          onClick={() => {
                            customerAddressUpdate({
                              variables: {
                                customerAccessToken:
                                  customerAccessToken.accessToken,
                                id: address.id,
                                address: {
                                  address1: addressInput,
                                  city: cityInput,
                                  company: companyInput,
                                  country: countryInput,
                                  firstName: firstNameInput,
                                  lastName: lastNameInput,
                                  phone: phoneInput,
                                  zip: zipInput,
                                },
                              },
                            });
                            checkDefaultAddress &&
                              customerDefaultAddressUpdate({
                                variables: {
                                  customerAccessToken:
                                    customerAccessToken.accessToken,
                                  addressId: address.id,
                                },
                              }).then((result) => alert(result));
                          }}
                        >
                          Update address
                        </button>
                        <button
                          className="button account-button"
                          onClick={() => handleBack()}
                        >
                          Cancel
                        </button>
                      </form>
                    );
                  }}
                </Mutation>
              );
            }}
          </Mutation>
        </div>
      </div>
      </Collapse>
    </>
  );
};

export default EditAddressForm;
