import React, { useState, useEffect, useContext } from "react";
import { navigate } from "@reach/router";
import StoreContext, { defaultStoreContext } from "./store";
const isBrowser = typeof window !== "undefined";

const Provider = ({ children }) => {
  const [store, updateStore] = useState(defaultStoreContext);
  const [searchValue, updateSearchValue] = useState(defaultStoreContext);
  const [checkout, setCheckout] = useState(defaultStoreContext.checkout);
  const getlocalStorage = (value) => {
    try {
      return JSON.parse(localStorage.getItem(value));
    } catch (e) {
      return "";
    }
  };
  useEffect(() => {
    const initializeCheckout = async () => {
      // Check if card exits already
      const isBrowser = typeof window !== "undefined";
      const existingCheckoutID = isBrowser
        ? localStorage.getItem("shopify_checkout_id")
        : null;

      const setCheckoutInState = (checkout) => {
        if (isBrowser) {
          localStorage.setItem("shopify_checkout_id", checkout.id);
        }

        updateStore((state) => {
          return { ...state, checkout };
        });
      };

      const createNewCheckout = () => store.client.checkout.create();
      const fetchCheckout = (id) => store.client.checkout.fetch(id);
      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID);

          // Make sure this cart hasn’t already been purchased.
          if (!checkout.completedAt) {
            setCheckoutInState(checkout);
            return;
          }
        } catch (e) {
          localStorage.setItem("shopify_checkout_id", null);
        }
      }
      const newCheckout = await createNewCheckout();
      setCheckoutInState(newCheckout);
    };
    initializeCheckout();
  }, [store.client.checkout]);
  return (
    <StoreContext.Provider
      value={{
        store,
        checkout,
        searchValue,
        customerAccessToken: getlocalStorage("customerAccessToken"),
        addVariantToCart: (variantId, quantity) => {
          updateStore((state) => {
            return { ...state, adding: true };
          });
          const { checkout, client } = store;
          const checkoutId = checkout.id;
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) },
          ];
          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then((checkout) => {
              updateStore((state) => {
                return { ...state, checkout, adding: true };
              });
            })
            .catch((error) => console.log(error))
        },
        addVariantToCartAndBuyNow: (variantId, quantity) => {
          updateStore((state) => {
            return { ...state, adding: true };
          });
          const { checkout, client } = store;
          const checkoutId = checkout.id;
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) },
          ];
          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then((checkout) => {
              updateStore((state) => {
                return { ...state, checkout, adding: false };
              });
              navigate(checkout.webUrl);
            });
        },
        addDiscount: (discountCode) => {
          updateStore((state) => {
            return { ...state, adding: true };
          });
          const { checkout, client } = store;
          const checkoutId = checkout.id;
          return client.checkout
            .addDiscount(checkoutId, discountCode)
            .then((checkout) => {
              updateStore((state) => {
                return {
                  ...state,
                  checkout,
                  adding: false,
                  errorMessage: checkout?.userErrors[0]?.message,
                };
              });
            });
        },
        removeDiscount: () => {
          updateStore((state) => {
            return { ...state, adding: true };
          });
          const { checkout, client } = store;
          const checkoutId = checkout.id;
          return client.checkout
            .removeDiscount(checkoutId)
            .then((checkout) => {
              updateStore((state) => {
                return {
                  ...state,
                  checkout,
                  adding: false,
                  errorMessage: checkout?.userErrors[0]?.message,
                };
              });
            });
        },
        updateSearchValue: (value) => {
          updateStore((state) => {
            return { ...state, searchValue: value };
          });
        },
        removeLineItem: (checkoutID, lineItemID) => {
          const { checkout, client } = store;
          return client.checkout
            .removeLineItems(checkoutID, [lineItemID])
            .then((resultat) => {
              updateStore((state) => {
                return { ...state, checkout: resultat };
              });
            });
        },
        updateLineItem: (client, checkoutID, lineItemID, quantity) => {
          const lineItemsToUpdate = [
            { id: lineItemID, quantity: parseInt(quantity, 10) },
          ];
          return client.checkout
            .updateLineItems(checkoutID, lineItemsToUpdate)
            .then((resultat) => {
              updateStore((state) => {
                return { ...state, checkout: resultat };
              });
            });
        },
        updateFilterType: (type) => {
          updateStore((state) => {
            return { ...state, filteredType: type };
          });
        },
        updateFilterSort: (sort) => {
          updateStore((state) => {
            return { ...state, filteredSort: sort };
          });
        },
        setValue: (value) => {
          isBrowser &&
            localStorage.setItem("customerAccessToken", JSON.stringify(value));
          updateStore((state) => {
            return { ...state, customerAccessToken: value };
          });
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
