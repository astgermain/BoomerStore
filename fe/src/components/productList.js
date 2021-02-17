import React, {useContext} from 'react';
import ProductBox from "./ProductList/productBox"
import Sort from "./Filter/sort"
import Collection from './Filter/collection';
import StoreContext from '../context/store'

const ProductList = ({ data, total, give, top}) => {
  const { edges: products } = data.allShopifyProduct
  const context = useContext(StoreContext);
  let cur = 0
  return (
    <section className={`hero ${top == true && `top-prods`}`}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline" style={{ margin: "0", justifyContent: "center", maxHeight: "350px",overflow: "hidden" }}>
            {
              products
                .filter(p => context.store.filteredType === 'all' ? p : (p.node.productType.includes(context.store.filteredType)))
                .sort(
                  context.store.filteredSort === "featured" ? (a) => (a)
                    : context.store.filteredSort === "low" ? ((a, b) => a.node.variants[0].price - b.node.variants[0].price)
                      : context.store.filteredSort === "high" ? ((a, b) => b.node.variants[0].price - a.node.variants[0].price)
                        : context.store.filteredSort === "Z-A" ? ((a, b) => b.node.title.localeCompare(a.node.title))
                          : context.store.filteredSort === "A-Z" ? ((a, b) => a.node.title.localeCompare(b.node.title)) : null
                )
                .map((p, i) => {
                  let product = p
                  cur++
                  if(cur > total){
                    return ""
                  }
                  else{
                    return (
                      <div className={`column is-3 pro-${i}`} key={i}>
                        <ProductBox product={product} give={give}/>
                      </div>
                    )
                  }
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;