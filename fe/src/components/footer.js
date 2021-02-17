import React from 'react';
import "./footer.sass"

const Footer = () => {

    const FooterSection = ({ title, children }) => (
        <div className="footer-section">
            <h6>{title}</h6>
            <ul>
                {children}
            </ul>
        </div>

    )

    return (
        <footer className="main-footer" style={{ padding: "3rem 1.5rem 2rem" }}>
            <FooterSection title={'Contact Us'}>
                <li>8670 W Cheyenne Ave. # 120 <br></br>Las Vegas, NV 89129</li>
                <li>Call: (702) 960-4843</li>
                <li>Order Questions:<br></br>Info@BoomerNaturals.com</li>
            </FooterSection>
            <FooterSection title={'About Us'}>
                <li>About Boomer Store</li>
                <li>Donations</li>
                <li>Shipping Policy</li>
                <li>Privacy Policy</li>
            </FooterSection>
            <FooterSection title={'Wholesale'}>
                <li>Call: (702) 996-1312</li>
                <li>Wholesale@BoomerNaturals.com</li>
                <li>BoomerNaturalsWholesale.com</li>
            </FooterSection>
            <FooterSection title={'Store Hours'}>
                <li>Call: (702) 960-4843</li>
                <li><span>Mon - Sat</span><span>8am - 5pm (PST)</span></li>
                <li><span>Sun</span><span>Closed</span></li>
            </FooterSection>
        </footer>
    );
};

export default Footer;