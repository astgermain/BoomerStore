import React, { useContext } from 'react'; /* eslint-disable */
import SEO from "../components/seo"
import StoreContext from "../context/store"
import Products from "../components/Cart/Products"
import Empty from "../components/Cart/Empty"

const Cart = () => {

    const context = useContext(StoreContext)
    const { checkout } = context.store
    return (
        <>
            <SEO title="Shopping Cart" />
            <section className="hero contain shop-now">
                <div className="cart-body">
                    <div className="container">
                        {
                            checkout.lineItems.length !== 0 ?
                            <Products checkout={checkout}/>
                            :
                            <Empty/>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;