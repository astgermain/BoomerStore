import React, { useState, useContext, useEffect } from 'react';
import StoreContext from '../../../context/store'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import axios from 'axios'

const CUSTOMER_CREATE_ADDRESS = gql`
mutation customerAddressCreate($customerAccessToken: String!, $address: MailingAddressInput!) {
  customerAddressCreate(customerAccessToken: $customerAccessToken, address: $address) {
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
`


const AddAddressForm = () => {
    const [addAdressForm, setAddAdressForm] = useState(false);
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [companyInput, setCompanyInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [apartmentInput, setApartmentInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    const [countryInput, setCountryInput] = useState("");
    const [zipInput, setZipInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");

    const { customerAccessToken } = useContext(StoreContext);

    const states = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ]



    

    useEffect(() => {
      }, []);

    return (
        <>
            <button className="button account-button" onClick={() => setAddAdressForm(!addAdressForm)}>Add a new address</button>
            {
            addAdressForm && (
            <div className="columns is-centered">
                <div className="column is-6 has-text-left">
                    <Mutation mutation={CUSTOMER_CREATE_ADDRESS}>
                        {(customerAddressCreate) => {
                            return (
                                <form>
                                    <h1 className="subtitle is-uppercase has-text-weight-semibold ">ADD A NEW ADDRESS</h1>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="field">
                                                <label className="label" htmlFor="firstNameInput">First Name</label>
                                                <div className="control">
                                                    <input className="input" value={firstNameInput} type="text" onChange={(e) => setFirstNameInput(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <label className="label" htmlFor="lastNameInput">Last Name</label>
                                                <div className="control">
                                                    <input className="input" value={lastNameInput} type="text" onChange={(e) => setLastNameInput(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"  htmlFor="companyInput">Company</label>
                                        <div className="control">
                                            <input className="input" value={companyInput} type="text" onChange={(e) => setCompanyInput(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"  htmlFor="addressInput">Address</label>
                                        <div className="control">
                                            <input className="input" value={addressInput} type="text" onChange={(e) => setAddressInput(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"  htmlFor="apartmentInput">Apartment, suite, etc.</label>
                                        <div className="control">
                                            <input className="input" value={apartmentInput} type="text" onChange={(e) => setApartmentInput(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="field">
                                                <label className="label"  htmlFor="cityInput">City</label>
                                                <div className="control">
                                                    <input className="input" value={cityInput} type="text" onChange={(e) => setCityInput(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field" >
                                                <label className="label"  htmlFor="countryInput">State</label>
                                                <div className="control">
                                                    <div className="select">
                                                        
                                                        <select value={countryInput} onChange={(e) => setCountryInput(e.target.value)} onBlur={(e) => setCountryInput(e.target.value)} style={{minWidth: "140px",maxWidth: "310px"}}>
                                                            {
                                                                states.map((country)=>(
                                                                    <option value={country.name}>{country.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"  htmlFor="zipInput">Postal/Zip Code</label>
                                        <div className="control">
                                            <input className="input" value={zipInput} type="text" onChange={(e) => setZipInput(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"  htmlFor="phoneInput">Phone</label>
                                        <div className="control">
                                            <input className="input" value={phoneInput} type="text" onChange={(e) => setPhoneInput(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox"  htmlFor="checkboxDefaultAddress">
                                                <input type="checkbox" />
                                                Set as default address
                                        </label>
                                        </div>
                                    </div>
                                    <button
                                        className="button account-button"
                                        onClick={() => {
                                            customerAddressCreate({
                                                variables: {
                                                    "customerAccessToken": customerAccessToken.accessToken,
                                                    "address": {
                                                        address1: addressInput,
                                                        city: cityInput,
                                                        company: companyInput,
                                                        country: "United States",
                                                        firstName: firstNameInput,
                                                        lastName: lastNameInput,
                                                        phone: phoneInput,
                                                        province: countryInput,
                                                        zip: zipInput,
                                                    }
                                                }
                                            }).then((result) => {
                                                setAddAdressForm(!addAdressForm)
                                            })
                                        }}
                                    >
                                        Add address</button>
                                    <button className="link-button" onClick={() => setAddAdressForm(!addAdressForm)} onKeyPress={() => setAddAdressForm(!addAdressForm)}>Cancel</button>
                                </form>
                            )
                        }}
                    </Mutation>
                </div>
            </div>
            )}
        </>
    );
};

export default AddAddressForm;