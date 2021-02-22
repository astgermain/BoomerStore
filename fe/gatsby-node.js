const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allShopifyCollection {
        edges{
          node {
            handle
          }
        }
      }
    }
  `).then(result => {
    if(result.errors){
      Promise.reject(result.errors)
    }
    //create products
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
        const id = node.handle
      createPage({
        path: `/product/${id}/`,
        component: path.resolve(`./src/templates/productPage.js`),
        context: {
            id,
            node
        },
      })
    })
    //create products
    result.data.allShopifyCollection.edges.forEach(({ node }) => {
      const id = node.handle
    createPage({
      path: `/collection/${id}/`,
      component: path.resolve(`./src/templates/collectionPage.js`),
      context: {
          id,
          node
      },
    })
  })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}
