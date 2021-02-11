import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

export const defaultStoreContext = {
  client,
  adding: true,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  filteredType: 'all',
  filteredSort: 'featured',
  errorMessage: '',
  customerAccessToken: null,
  setValue: () => { },
  addVariantToCart: () => { },
  addVariantToCartAndBuyNow: () => { },
  removeLineItem: () => { },
  updateLineItem: () => { },
  addDiscount: () => { },
}

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext