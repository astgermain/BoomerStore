import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
})

export const defaultStoreContext = {
  client,
  adding: true,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  searchValue: '',
  filteredType: 'all',
  filteredSort: 'featured',
  errorMessage: '',
  customerAccessToken: null,
  updateSearchValue: () => { },
  setValue: () => { },
  addVariantToCart: () => { },
  addVariantToCartAndBuyNow: () => { },
  removeLineItem: () => { },
  updateLineItem: () => { },
  addDiscount: () => { },
  removeDiscount: () => { },
}

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext