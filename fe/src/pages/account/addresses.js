import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import StoreContext from "../../context/store";
import Layout from "../../components/account/Layout";
import AddAddressForm from "../../components/account/adresses/addAddressForm";
import DeleteAddress from "../../components/account/adresses/deleteAddress";
import EditAddressForm from "../../components/account/adresses/editAddressForm";

const CUSTOMER_ADDRESS = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      defaultAddress {
        id
      }
      addresses(first: 10) {
        edges {
          node {
            id
            address1
            address2
            city
            phone
            lastName
            firstName
            country
            province
            name
            zip
          }
        }
      }
    }
  }
`;

const Addresses = () => {
  const { customerAccessToken } = useContext(StoreContext);
  const [loadingValue, setLoadingValue] = useState(false);
  const [errorValue, setErrorValue] = useState(false);
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

  return (
    <Layout>
      <Query
        query={CUSTOMER_ADDRESS}
        variables={{
          customerAccessToken: customerAccessToken.accessToken,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <>{loadingAlert(true)}</>;
          if (!loading) {
            loadingAlert(false);
          }
          if (error) return <>{errorAlert(true)}</>
          if (!error) {
            errorAlert(false);
          }
          const { defaultAddress, addresses } = data?.customer;
          return (
            <div className="has-text-centered">
              {loadingValue && <div>Loading</div>}
              {errorValue && <div>Error</div>}
              <br />
              <div>
                {addresses != null &&
                  addresses?.edges.map((address) => (
                    <>
                      {defaultAddress?.id === address?.node?.id && (
                        <>
                          <h1
                            className="subtitle"
                            style={{ textAlign: "left" }}
                          >
                            Default Address:{" "}
                          </h1>
                        </>
                      )}
                      <div
                        key={address?.node?.id}
                        className="columns is-centered"
                        style={{ justifyContent: "space-between", alignItems: "center" }}
                      >
                        <div style={{textAlign: "left"}}>
                          <p className="has-text-grey">
                            {address?.node?.firstName} {address?.node?.lastName}
                          </p>
                          <p className="has-text-grey">
                            {address?.node?.address1}
                          </p>
                          <p className="has-text-grey">
                            {address?.node?.zip}, {address?.node?.city}
                          </p>
                          <p className="has-text-grey">
                            {address?.node?.country}
                          </p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                          <EditAddressForm address={address?.node} />
                          <DeleteAddress id={address?.node?.id} />
                        </div>
                      </div>
                      <hr />
                    </>
                  ))}
              </div>
              <br />
              <AddAddressForm />
            </div>
          );
        }}
      </Query>
    </Layout>
  );
};

export default Addresses;
