import React from "react";
import Account from "../account/profile-items/account"
import './accountSection.sass'

const AccountSection = ({ data }) => {
  //Data is allShopifyProduct
  return (
    <div className="account-section" style={{ margin: "0", }}>
        <Account />
    </div>
  );
};

export default AccountSection;