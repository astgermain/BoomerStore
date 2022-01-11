# BoomerStore

## For anyone that wants to work with Shopify's GraphQL API with Gatsby. Fully functional build just replace API keys and such

## TODO

- product image zoom
- Setup secondary DNS & DNSSEC
- Do not make BUY X GET Y COUPONS, DO NOT WORK RN
- error red box if redeem code invalid on view cart page


## Notes

-I added a webhook in aws and set it in Shopify store notifications to rebuild in AWS if Collection or a product is updated
- Added additional functionality that when a product availability(aka inventory is set to zero) then it will trigger a build
in AWS Amplify. To do this I had to create an API gateway to use for the shopify notification webhook for inventory level update which in turn connects to an AWS Lambda function that triggers when the inventory level of something reaches zero.
- Currently rebuilds can only be triggered on collection update, product update, and inventory level change
- Possible issue when updating many quantities. Possible solutions include filtering through another lambda and encouraging bulk updates
- Or use bulk editor under Boomer Store - Products - Inventory

- Build minutes may be extremely high. If builds are preformed at all times then cost will be approximately $500 per month
- May need to figure out how to fetch inventory levels client side
