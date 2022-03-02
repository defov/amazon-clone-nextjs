import Product from "./Product"

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            {...{ id, title, price, description, category, image }}
          />
        ))}

      <img className="mx-auto md:col-span-full" src="/images/ad.jpg" alt="" />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              {...{ id, title, price, description, category, image }}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            {...{ id, title, price, description, category, image }}
          />
        ))}
    </div>
  )
}

export default ProductFeed
