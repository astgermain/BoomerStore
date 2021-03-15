import React, { useContext } from "react";
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
  

  return (
    <Layout>
      <Query
        query={CUSTOMER_ADDRESS}
        variables={{
          customerAccessToken: customerAccessToken.accessToken,
        }}
      >
        {({ loading, error, data }) => {
            console.log("Loading", loading)
            console.log("Data", data)
            console.log("Error", error)
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;
          const { defaultAddress, addresses } = data?.customer;
          return (
            <div className="has-text-centered">
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
                        style={{ justifyContent: "space-between" }}
                      >
                        <div>
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
                        <div>
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
